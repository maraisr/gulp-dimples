Gulp Dimples
============

[![NPM version](https://img.shields.io/npm/v/gulp-dimples.svg?style=flat-square)](https://www.npmjs.com/package/gulp-dimples)
[![License](https://img.shields.io/npm/l/gulp-dimples.svg?style=flat-square)](https://github.com/maraisr/gulp-dimples/blob/master/LICENSE.md)

Wrapper for [Dimples](https://github.com/maraisr/dimples).

## Installation
via [npm](https://www.npmjs.com/)

```sh
npm i gulp-dimples --save-dev
```

### Example
```js
var gulp = require('gulp'),
	dimples = require('gulp-dimples');

gulp.task('default', function() {
	return gulp.src('app.js')
		.pipe(dimples({
			views: './views/'
		}))
		.pipe(gulp.dest('output'));
});
```

## License
[GPL-2.0](https://github.com/maraisr/gulp-dimples/blob/master/LICENSE.md)

Copyright(c) 2016 Marais Rossouw
