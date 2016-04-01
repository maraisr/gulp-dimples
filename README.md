Gulp Templicated
================

[![NPM version](https://img.shields.io/npm/v/gulp-templicated.svg?style=flat-square)](https://www.npmjs.com/package/gulp-templicated)
[![License](https://img.shields.io/npm/l/gulp-templicated.svg?style=flat-square)](https://github.com/maraisr/gulp-templicated/blob/master/LICENSE.md)

Wrapper for [Templicated](https://github.com/maraisr/templicated).

## Installation
```sh
npm i gulp-templicated --save-dev
```

#### Example
```JavaScript
var gulp = require('gulp'),
	templicated = require('gulp-templicated');

gulp.task('default', function() {
	return gulp.src('app.js')
		.pipe(templicated({
			views: './views/'
		}))
		.pipe(gulp.dest('output'));
});
```

## License
[GPL-2.0](https://github.com/maraisr/templicated/blob/master/LICENSE.md)

Copyright(c) 2016 Marais Rossouw
