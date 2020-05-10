const gulp  = require('gulp'),
    { parallel, series } = require('gulp'),
    gulpClean = require('gulp-clean'),
    htmlmin = require('gulp-htmlmin'),
    cssmin = require('gulp-cssmin'),
    inlinesource = require('gulp-inline-source'),
    imagemin = require('gulp-imagemin');

// funções
// apaga a pasta dist
function clean() {

    return gulp
        .src('dist/')
        .pipe(gulpClean());
}

// copia, adicina js inline e minifica html
function copyHtml() {

    return gulp
        .src('src/*.html')
        .pipe(inlinesource())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/'));
}

// copia e minifica css
function copyCss() {

    return gulp
        .src('src/**/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/'));
}

// otimiza imagens
function otimizaImg() {

    return gulp
        .src('src/imagens/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/imagens/'));
}

exports.clean = clean;

exports.default = series(parallel(copyHtml, copyCss, otimizaImg));
