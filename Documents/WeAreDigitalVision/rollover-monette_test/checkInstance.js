var appSecrets = require('./appSecrets');
var crypto = require("crypto");

function verifyInstance(instance, secret) {
    // spilt the instance into signature and data
    var pair = instance.split('.');
    var signature = decode(pair[0], 'binary');
    var data = pair[1];
    // sign the data using hmac-sha1-256
    var hmac = crypto.createHmac('sha256', secret);
    var newSignature = hmac.update(data).digest('binary');

    return (signature === newSignature) ? data : null;
}

function decode(data, encoding) {
    encoding = encoding === undefined ? 'utf8' : encoding
    var buf = new Buffer(data.replace(/-/g, '+').replace(/_/g, '/'), 'base64')
    return encoding ? buf.toString(encoding) : buf;
}

function checkInstance(req, res, next) {

    var instance = req.query.instance || req.body.instance;
    var siteId = 'rollover';

    req.siteId = siteId;
    var host = req.headers.host;
    req.isLocal = false;
    var secretKey = siteId;
    req.testMode = false;
   
    if (host.indexOf('cf67b83d.ngrok.io') !== -1) { 
        secretKey = 'localhost' + siteId;
        req.isLocal = true;
        req.testMode = true; 
    }
    if (host.indexOf('test') !== -1) {
        secretKey = 'test' + siteId;
        req.testMode = true;
    }
    if (host.indexOf('preview') !== -1) {
        secretKey = 'preview' + siteId;
        req.testMode = true;
    }
    if (host.indexOf('sandbox') !== -1) {
        secretKey = 'sandbox' + siteId;
        req.testMode = true;
    }

    var appSecret = appSecrets[secretKey];

    if (appSecret == undefined) {
        res.send('No site defined @ ' + siteId);
        return;
    }

    // If the instance is set
    if (instance != undefined) {
        var data = verifyInstance(instance, appSecret);

        if (data == null) {
            console.log('BADINSTANCE', host, secretKey);
            res.send('BADINSTANCE ' + host);
            return;
        }

        var buf = new Buffer(data.replace(/-/g, '+').replace(/_/g, '/'), 'base64')
        var instanceData = JSON.parse(buf.toString('utf8'));

        req.instanceId = instanceData.instanceId;
        req.vendorProductId = instanceData.vendorProductId || '';

        next();
    } else {
        res.send('BADINSTANCE2');
    }
};


module.exports = checkInstance;