const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const components = require('./components.json')

function buildCss(cb) {
    gulp.src('../src/styles/index.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(rename('tm-ui.css'))
        .pipe(gulp.dest('../lib/styles'));
    cb()
}
// 其他之前的代码...

function buildSeperateCss(cb) {
    Object.keys(components).forEach(compName => {
        gulp.src(`../src/styles/${compName}.scss`)
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(cleanCSS())
            .pipe(rename(`${compName}.css`))
            .pipe(gulp.dest('../lib/styles'));
    })

    cb()
}

exports.default = gulp.series(buildCss, buildSeperateCss) // 加上 buildSeperateCss


exports.default = gulp.series(buildCss)
