var through = require('through2'),
	gutil = require('gulp-util'),
	PluginError = gutil.PluginError,
	t = require('templicated');

const PLUGIN_NAME = 'gulp-templicated';

module.exports = function(options) {

	if (!options || !options.views) {
		throw new PluginError(PLUGIN_NAME, 'Missing views directory!');
	}

	return through.obj(function(file, encoding, cb) {

		if (file.isNull()) {
			return cb(null, file);
		}

		var templated = (new t.Templicated(file.contents, options));

		if (file.isBuffer()) {
			file.contents = templated.compile();
		}

		if (file.isStream()) {
			file.contents.pipe(through().write(templated.code));
		}

		cb(null, file);
	});
};
