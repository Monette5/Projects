
var cache = {};

var AWS = require('aws-sdk');
AWS.config.update({accessKeyId: 'AKIAIFAIN4UM3DDBUGSQ', secretAccessKey: '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'});

module.exports = {

	getSettings:function( siteId, instanceId, compId, callback ) {

		var key = instanceId + '/' + compId+'.json';

		var result=cache[key];

		if (result!=undefined) {

			callback(result);
			return;
		}

		var s3 = new AWS.S3();

		var bucket = siteId+'-settings';

		s3.getObject({
		Bucket: bucket,
		Key: key
		}, function (err, data) {

			if (err)  {

				if (err.code=='NoSuchKey') {

					result= {

						  key:key,
						  bucket:bucket,

						  err:err,

						  image0:
						   { fileName: 'Rollover',
						    // relativeUri: "78276c8fc3254f39960eddb2a8f6fdbc.jpg",
							  relativeUri: "48e47a_db6ef74408904b2e914b95fa5fd3f691~mv2.png",
						     width: '600',
						     height: '400' },
						  image1:
						   { fileName: 'Rollover',
						    // relativeUri: "3c7c70fc3de546c09ddea86469b7fcf7.jpeg",
							  relativeUri: "48e47a_c9ae374ac7234bada4ff0461d58ba6fc~mv2.png",
						     width: '600',
						     height: '400' }
						 };

					callback( result );



				}
				else {

					console.log('S3 error', err);
					callback( {} );

				}
			}
			else {

				result=cache[key]=JSON.parse(data.Body.toString());
				result.key = key;

				callback( result );
			}

		});


	},

	putSettings:function( siteId, instanceId, compId, settings, callback) {

		var key = instanceId + '/' + compId+'.json';

		var s3 = new AWS.S3();
		s3.putObject({
			Bucket: siteId+'-settings',
			Key: key,
			Body: settings
		}, function () {
			cache[key]=settings;
			callback();
		});
	},

	deleteSettings:function( siteId, instanceId, compId, callback) {

		var key = instanceId + '/' + compId+'.json';

		var s3 = new AWS.S3();
		s3.deleteObject({
		Bucket: siteId+'-settings',
		Key: key
		}, function () {
			cache[key]=undefined;
			callback();
		});
	}
}
