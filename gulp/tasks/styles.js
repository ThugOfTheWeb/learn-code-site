const gulp = require('gulp'),
postcss = require('gulp-postcss'),
prefix = require('autoprefixer'),
nested = require('postcss-nested'),
mixins = require('postcss-mixins'),
cssImport = require('postcss-import');

gulp.task('styles', function() {
    gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, mixins, nested, prefix]))
    .on('error', function(errorInfo) {
        console.log(errorInfo.toString());
        this.emit('end');
    })
    .pipe(gulp.dest("./app/temp/styles"))
});