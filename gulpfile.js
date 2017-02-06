'use strict';

var gulp = require('gulp'),
	watch = require('gulp-watch'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	pug = require('gulp-pug'),
	csso = require('gulp-csso'),
	concat = require('gulp-concat'),
	browserSync = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer'),
	imagemin = require('gulp-imagemin'),
	del = require('del');

gulp.task('clean' , function(){
	return del('public');
});

/* Complete SASS */
gulp.task('sass' , function(){
	gulp.src('src/scss/*.scss')
	.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
	.pipe(sass().on('error' , sass.logError))
	.pipe(csso())
	.pipe(gulp.dest('public/css/'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('bgrid' , function(){
	gulp.src('src/scss/bootstrap-grid/**.**scss')
	.pipe(sass().on('error' , sass.logError))
	.pipe(csso())
	.pipe(concat('bootstrap-grid.css'))
	.pipe(gulp.dest('public/css/'))
});

/* Pug(Jade) */
gulp.task('pug' , function(){
	gulp.src('src/*.pug')
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest('public'))
		.pipe(browserSync.reload({stream: true}))
});

/* JavaScript&jQuery */
gulp.task('js' , function(){
	gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('public/js/'))
		.pipe(browserSync.reload({stream: true}))
});

/* Images */
gulp.task('images' , function(){
	gulp.src('src/images/**.**')
		.pipe(imagemin())
		.pipe(gulp.dest('public/images'))
		.pipe(browserSync.reload({stream: true}))
});

/* Browser-sync */
gulp.task('browser-sync', function(){
    browserSync({
        server: {
            baseDir: 'public'
        },
        notify: false
    });
});

gulp.task('watch' , ['browser-sync' , 'pug' , 'sass' , 'images' , 'js'] , function(){
	gulp.watch('src/scss/*.scss' , ['sass']);
	gulp.watch('src/*.pug' , ['pug']);
	gulp.watch('src/js/*.js' , ['js']);
	gulp.watch('src/images/**.**' , ['images']);
});