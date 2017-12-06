/*
 created by x13133053566@163.com
 https://github.com/justwe7
*/

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    spriter = require('gulp-css-spriter'),
    base64 = require('gulp-css-base64');


gulp.task('img-min', function () {//压缩图片任务流
    gulp.src('dist/img/*.{png,jpg,gif,ico}')
    .pipe(imagemin({
        optimizationLevel: 3, //类型：Number  默认：3  取值范围：0-7（优化等级）
        progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
        interlaced: false, //类型：Boolean 默认：false 隔行扫描gif进行渲染
        multipass: false //类型：Boolean 默认：false 多次优化svg直到完全优化
    }))
    .pipe(gulp.dest('dist/img'))
});


gulp.task('compress', ['img-min'],function (done) {//图片处理操作，合成/转base64 -->之后进行图片压缩
    var timeline = +new Date();
    gulp.src('dist/css/*.css')
        .pipe(spriter({
            spriteSheet: 'dist/img/spritesheet' + timeline + '.png',
            pathToSpriteSheetFromCSS: '../img/spritesheet' + timeline + '.png',
            spritesmithOptions: {
                padding: 10
            }
        }))
        .pipe(base64())
        .pipe(gulp.dest('dist/task'))
        .on('end', done);
});

gulp.task('watch', function (done) {//图片处理操作，合成/转base64
    gulp.watch('dist/css/*.css',['compress']);
});

gulp.task('default', ['compress','watch']);
