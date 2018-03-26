const gulp = require('gulp'),
prefix = require('autoprefixer'),
postcss = require('gulp-postcss'),
nested = require('postcss-nested'),
mixins = require('postcss-mixins'),
cssImport = require('postcss-import');

gulp.task('styles', () => {
    gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, mixins, nested, prefix]))
    .on('error', function(errorInfo) {
        console.log(errorInfo.toString());
        this.emit('end');
    })
    .pipe(gulp.dest("./app/temp/styles"))
});