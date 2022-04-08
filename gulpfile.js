import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer'
import webpack from 'webpack-stream';
import concat from 'gulp-concat';
import browserSync from 'browser-sync';

const liveBrowserSync = browserSync.create()


function addPrefix() {
    return gulp.src('src/assets/css/*.css')
        .pipe(autoprefixer({
            cascade: false,
        }))
        .pipe(liveBrowserSync.stream())
        .pipe(gulp.dest('src/assets/css/'))
}
gulp.task('autoPrefix', addPrefix)


function concatJS() {
    return gulp.src('src/assets/js/scripts/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('src/assets/js'))
}

function bundleJS() {
    return gulp.src('src/assets/js/main.js')
        .pipe(webpack())
        .pipe(liveBrowserSync.stream())
        .pipe(gulp.dest('src/assets/js/'))
}

gulp.task('loadJS', gulp.series(concatJS, bundleJS))

function liveBrowser() {
    return liveBrowserSync.init({
        server: {
            baseDir: "./src"
        }
    })
}
gulp.task('liveBrowser', liveBrowser)


function observers() {
    gulp.watch('src/assets/css/*.css', gulp.series('autoPrefix'))
    gulp.watch('src/assets/js/scripts/*.js', gulp.series('loadJS'))
    gulp.watch('src/*.html').on('change', liveBrowserSync.reload)
    return;
}

gulp.task('default', gulp.parallel('liveBrowser', observers))