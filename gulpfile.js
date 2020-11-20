'use strict';

const gulp = require('gulp'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
    pump = require('pump'),
	babel = require('gulp-babel');

const scssFile = 'assets/sass/**/*.scss';

const cssDest = 'assets/css/';

const sassDevOptions = {
	outputPtyle: 'expanded'
}

const sassProdOptions = {
	outputStyle: 'compressed'
}

const jsFile = 'assets/js/*js';

const jsDest = 'assets/js/dist/';

gulp.task('sassDev', () => {
	return gulp.src(scssFile)
		.pipe(sass(sassDevOptions).on('error', sass.logError))
		.pipe(gulp.dest(cssDest))

});

gulp.task('sassProd', () => {

	return gulp.src(scssFile)
		.pipe(sass(sassProdOptions).on('error', sass.logError))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(cssDest))

});

gulp.task('jsProd', cb => {

	pump([
		gulp.src(jsFile),
        babel({
			presets: ['@babel/env']
		}),
		uglify(),
		rename({suffix: '.min'}),
		gulp.dest(jsDest)
	], cb);

});

gulp.task('watch', () => {

	gulp.watch(scssFile, gulp.series('sassDev'));
	gulp.watch(scssFile, gulp.series('sassProd'));
	gulp.watch(jsFile, gulp.series('jsProd'));
});

gulp.task('default', gulp.series('sassDev', 'sassProd', 'jsProd', 'watch'));
