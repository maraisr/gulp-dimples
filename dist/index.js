var through = require('through2'),
	gutil = require('gulp-util'),
	PluginError = gutil.PluginError,
	t = require('dimples');

const PLUGIN_NAME = 'gulp-dimples';

module.exports = function(options) {

	if (!options || !options.views) {
		throw new PluginError(PLUGIN_NAME, 'Missing views directory!');
	}

	return through.obj(function(file, encoding, cb) {

		if (file.isNull()) {
			return cb(null, file);
		}

		var dimples = (new t.Dimples(file.contents, options));

		if (file.isBuffer()) {
			file.contents = dimples.compile();
		}

		if (file.isStream()) {
			file.contents.pipe(through().write(dimples.code));
		}

		cb(null, file);
	});
};
