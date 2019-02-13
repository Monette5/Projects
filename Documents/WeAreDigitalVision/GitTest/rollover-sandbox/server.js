"use strict";

var checkInstance = require("./checkInstance");
var express = require('express');
var url = require('url');
var expressSanitizer = require('express-sanitizer');
var bodyParser = require('body-parser');
var settingsService= require("./services/SettingsService");
var jwt = require('jsonwebtoken');
var handlebars = require('express-handlebars');
var moment = require('moment');
var AWS = require('aws-sdk');
var ck = new Date().getTime();
var defaults = require('./defaults');

var app = express();
var hbs = require('express-handlebars').create({
  helpers: {
    if_all: function () {
      var args = [].slice.apply(arguments);
      var opts = args.pop();

      var fn = opts.fn;
      for(var i = 0; i < args.length; ++i) {
        if(args[i])
          continue;
        fn = opts.inverse;
        break;
      }
      return fn(this);
    }
  }
});

app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(expressSanitizer());

// Render the Wix settings panel and inject the settings data
app.get('/settings', checkInstance, function(req, res) {
	var origCompId = req.query.origCompId;

  // Get settings from the S3 bucket
	settingsService.getSettings( req.siteId, req.instanceId, origCompId, function(settings) {
    console.log('Settings: Retrieved settings from S3 Bucket for instance ' + req.instanceId + ' component ' + req.query.origCompId);

		var vendorProductId = req.vendorProductId;

   
    settings.trial_expires = '2021-08-30T00:00:00.000Z';
    

    // Get expiry time
    var expiry_date = moment(settings.trial_expires);
    var todays_date = moment().startOf('day');
    var trial_expires = expiry_date.diff(todays_date, 'days');
    var measure_date;

    if(trial_expires < 2) {
      measure_date = "day";
    } else {
      measure_date = "days";
    }

    // Render settings page and send settings to the page
		res.render( 'settings', {
			ck : ck,
			testServer : req.testMode,
			instanceId : req.instanceId,
			wixSettings: JSON.stringify(settings),
			showUpgrade: vendorProductId !== 'Premiem',
      trialExpired: trial_expires<1,
      trialExpires: trial_expires + ' ' + measure_date,
			vendorProductId: vendorProductId,
      helpers: {
        if_all: function () {
          var args = [].slice.apply(arguments);
          var opts = args.pop();

          var fn = opts.fn;
          for(var i = 0; i < args.length; ++i) {
            if(args[i])
              continue;
            fn = opts.inverse;
            break;
          }
          return fn(this);
        }
      }
		 });
	});
});

app.get('/settings/data', checkInstance, function(req, res) {
  var origCompId = req.query.origCompId;

  settingsService.getSettings( req.siteId, req.instanceId, origCompId, function( settings ) {
    var vendorProductId=(req.vendorProductId || '').toLowerCase();
    res.send(JSON.stringify(settings));
  });
});

// Update the S3 bucket settings
app.post('/save', checkInstance, function(req, res) {
  var compId = req.body.compId;
	var settings = req.body.settings;

	settings.text0 = req.sanitize(req.body.settings.text0);
	settings.text1 = req.sanitize(req.body.settings.text1);
 // settings.subtext0 = req.sanitize(req.body.settings.subtext0);
  settings.subtext0 = req.body.settings.subtext0;
	settings.subtext1 = req.sanitize(req.body.settings.subtext1);
  settings.textbtn0 = req.sanitize(req.body.settings.textbtn0);
  settings.textbtn1 = req.sanitize(req.body.settings.textbtn1);

	//Object.keys(settings).forEach(key => console.log(key, settings[key]));

  settingsService.putSettings( req.siteId, req.instanceId, compId, settings, function( ) {
    res.send('New settings saved');
  });
});

// Delete the S3 bucket settings
app.post('/delete', checkInstance, function(req, res) {
  var compId = req.body.compId;

  settingsService.deleteSettings( req.siteId, req.instanceId, compId, function( ) {
    res.send('Widget deleted');
  });
});

// Render the SEO for the widget
app.get('/widget-seo', checkInstance, function( req, res ) {
	res.render( 'widget-seo');
});

// Render the Wix widget and inject the settings data
app.get('/widget', checkInstance, function( req, res ) {
  console.log('Widget: Retrieved settings from S3 Bucket for instance ' + req.instanceId + ' component ' + req.query.compId);
  var origCompId = req.query.originCompId;
	var compId = req.query.compId;

  // Attempt to get the settings from S3 bucket
	settingsService.getSettings( req.siteId, req.instanceId, compId, function( settings ) {
    console.log('Widget: Get settings');
    // If the file doesn't exist
		if (settings.err && settings.err.code == 'NoSuchKey') {
      console.log('Widget: Settings don\'t exist yet');

      // Check if we have copy and pasted a component
      settingsService.getSettings( req.siteId, req.instanceId, origCompId, function( origSettings ) {
        // If we have use the original components settings
        if(!origSettings.err) {
          // Create it from the default settings
    			settingsService.putSettings( req.siteId, req.instanceId, compId, origSettings, function( settings ) {
            console.log('Widget: S3 settings file was created');
            // Get default settings
            render( settings );
          });
        } else {
          // Create it from the default settings
    			settingsService.putSettings( req.siteId, req.instanceId, compId, defaults, function( settings ) {
            console.log('Widget: S3 settings file was created');
            // Get default settings
            render( settings );
          });
        }
      });
		} else {
      // Get saves settings
			render( settings );
		}

		function render( settings ) {
			settings.tick = new Date().getTime();

      settings.trial_expires = '2021-08-30T00:00:00.000Z';

      var expiry_date = moment(settings.trial_expires);
      var todays_date = moment().startOf('day');
      var trial_expires = expiry_date.diff(todays_date, 'days');
      var vendorProductId = req.vendorProductId;
      
			var widgetSettings = {
				ck: ck,
				isLocal: req.isLocal,
				instanceId: req.instanceId,
				vendorProductId : vendorProductId,
				settingsJSON : JSON.stringify(settings),
				backColor0 : settings.backColor0,
				backColor1 : settings.backColor1,
        trialExpired: trial_expires<1,
        premium: vendorProductId == 'Premiem',
        showUpgrade: vendorProductId !== 'Premiem',
        transitionType: settings.transitiontype,
        transition: settings.transition,
        helpers: {
          if_eq: function (a, b, opts) {
            if (a == b) {
                return opts.fn(this);
            } else {
                return opts.inverse(this);
            }
          }
        }
			}

			res.render( 'widget', widgetSettings );
		}
	});
});

app.post('/info', function( req, res ) {
	var productId = req.query.productId || '';
	var subProductId = req.query.subProductId || '';
	var vendorProductId = req.query.vendorProductId || '';
	var instanceId = req.query.instanceId || '';
	var compId = req.query.compId || '';
	var title = req.query.title || '';
	var viewmode = req.query.viewmode || '';
	var url = req.query.url || '';

	var productId=req.query.productId || '';
	var subProductId=req.query.subProductId || '';
	var vendorProductId=req.query.vendorProductId || '';
	var instanceId=req.query.instanceId || '';
	var compId=req.query.compId || '';
	var title=req.query.title || '';
	var viewmode=req.query.viewmode || '';
	var url=req.query.url || '';

	var params=[ new Date(), instanceId, url, title, compId, productId, subProductId, viewmode, vendorProductId ];

	if (process.env.DB && false) {
    pg.connect(process.env.DB,function(err, client, done) {
      if (err) {
        console.log('DB err', err);
        done();
      } else {
        client.query("insert into log (created, instanceid, url, title, compid, productid, subproductid, viewmode, vendorproductid ) values ( $1, $2, $3, $4, $5, $6, $7,$8, $9 )",
        params,
        function(err, result) {
          if (err) {
            console.log('DB err:', err);
          } else {
          	console.log('DB result:', result);
          }
          done();
        });
      }
    });
  }
  res.send('OK');
});

/* Charge Stripe */
app.post('/charge', checkInstance, function(req, res) {
	var stripe = require('stripe')('sk_test_gHndarYtlaOhUGVNjlbvDhKJ');
	stripe.customers.create({
	  description: 'Customer for RolloverFx',
		source: req.body.token.id
	}, function(err, customer) {
		console.log(err);
		console.log(customer);
		stripe.subscriptions.create({
		  customer: customer.id,
		  plan: "RolloverFx_monthly"
		}, function(err, subscription) {
			// asynchronously called
			console.log(err);
		  }
		);
	});
});

/* cCarge Stripe */
app.post('/charges', checkInstance, function(req, res) {
//	console.log(req);
	//console.log(res);
});

/* Payment success Stripe */
app.get('/paysuccess', checkInstance, function(req, res) {

});

/* Send enquiries from the settings panel */
app.post('/send', function(req, res) {
  console.log('dfdfdfffffffff');
	var email=req.body.email;
	var message=req.body.message;

	AWS.config.update({region:'us-east-1'});
	var ses = new AWS.SES();

	var params = {
		Destination: {
			ToAddresses: ["info@wearedigitalvision.com"]
		},
		Message: {
			Body: {
				Text: {
				Charset: "UTF-8",
				Data: message
				}
			},
			Subject: {
				Charset: "UTF-8",
				Data: `Rollover message from ${email}`
			}
		},
		ReplyToAddresses: [ email ],
		Source: "info@wearedigitalvision.com"
	};
	ses.sendEmail(params, function(err, data) {
	if (err) console.log(err, err.stack); // an error occurred
	else res.send('OK');
	});
});

// Make src and dist folders static
app.use('/src',express.static('src'));
app.use('/dist',express.static('dist'));

const port = process.env.PORT || 5000;
console.log(new Date(),'Listening port',port);
app.listen(port);
