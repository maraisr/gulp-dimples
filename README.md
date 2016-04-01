Templicated Gulp
================

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
