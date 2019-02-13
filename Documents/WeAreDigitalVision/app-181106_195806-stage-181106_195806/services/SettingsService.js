var AWS = require('aws-sdk');
var moment = require('moment');
AWS.config.update({accessKeyId: 'AKIAJSLAZREJ2IWMO7LA', secretAccessKey: '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'});

module.exports = {
	// Get settings for the instance from the server
	getSettings:function( siteId, instanceId, compId, callback ) {
		// Store the specific bucket in a variable
		var s3 = new AWS.S3();
		var bucket = siteId+'-settings';
		var key = instanceId + '/' + compId + '.json';
		var response;
		var result

		// Get the bucket from S3 or check for a cached version of the settings
		s3.getObject({
				Bucket: bucket,
				Key: key
			}, function (err, data) {
				if (err)  {
					callback( { err:err } );
			} else {
				try {
					s3.getObject({
						Bucket: bucket,
						Key: instanceId + '/' + instanceId + '.json'
					}, function (err, data2) {
						if (err)  {
							callback( { err: err });
							// if we don't have an expiry date file - find contency - awaiting Naomi
						} else {
							var expiry = JSON.parse(data2.Body.toString());
							console.log(expiry.trial_expires);
							result = JSON.parse(data.Body.toString());
							result.trial_expires = expiry.trial_expires;

							result.key = key;
							callback(result);
						}
					});
				} catch( e ) {
					result = {};
				}
			}
		});
	},
	// Update the S3 bucket file settings
	putSettings:function( siteId, instanceId, compId, settings, callback) {
		// Store the file name in a variable
		var key = instanceId + '/' + compId+'.json';

		// New S3 instance
		var s3 = new AWS.S3();

		s3.getObject({
			Bucket: siteId+'-settings',
			Key: instanceId + '/' + instanceId + '.json'
		}, function (err, data) {
			if(err) {
				// Create global settings file
				s3.putObject({
					Bucket: siteId+'-settings',
					Key: instanceId + '/' + instanceId + '.json',
					Body: JSON.stringify({"trial_expires": moment().add(14, 'days').startOf('day')})
				}, function () {
					// Update the S3 bucket file
					s3.getObject({
						Bucket: siteId+'-settings',
						Key: key,
					}, (err, data) => {
						if (err) {
							s3.putObject({
								Bucket: siteId + '-settings',
								Key: key,
								Body: JSON.stringify(settings)
							}, function () {
								callback(settings);
							});
						} else {
							callback(data)
						}
					})
				});
			} else {
				// Update the S3 bucket file
				s3.putObject({
					Bucket: siteId+'-settings',
					Key: key,
					Body: JSON.stringify(settings)
				}, function () {
					var expiry = JSON.parse(data.Body.toString());
					settings.trial_expires = expiry.trial_expires;
					callback(settings);
				});
			}
		});
	},
	// Delete the settings in S3 bucket
	deleteSettings:function( siteId, instanceId, compId, callback) {
		// Store the file name in a variable
		var key = instanceId + '/' + compId +'.json';

		// New S3 instance
		var s3 = new AWS.S3();

		// Delete the S3 bucket file
		s3.deleteObject({
			Bucket: siteId+'-settings',
			Key: key
		}, function (err, data) {
			callback();
		});
	}
}
