const gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', () => console.log("Successfully configured gulp"));

//Html Task reloading browser
gulp.task('html', () => console.log("Html Updated"));

gulp.task('styles', () => console.log("Css Compiled"));

gulp.task('watch', () => {
    watch('./app/index.html', ()=> gulp.start('html'));

    watch('./app/assets/styles/**/*.css', ()=> gulp.start('styles'));

});