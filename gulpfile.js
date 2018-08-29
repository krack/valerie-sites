var gulp = require('gulp');
var imageResize = require('gulp-image-resize');

gulp.task('image-resize', function () {
    gulp.src(['src/assets/images/**', '!src/assets/images/thumb', , '!src/assets/images/thumb/**'])
        .pipe(imageResize({
            width: 300,
        }))
        .pipe(gulp.dest('src/assets/images/thumb'));
});