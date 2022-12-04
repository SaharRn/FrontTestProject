import gulp from 'gulp';
import sass from 'gulp-sass';
import imagemin from 'gulp-imagemin';
import cleancss from 'gulp-cleancss';


// 1. transfar sass to css
gulp.task("trnsf_sass", () => {
    gulp.src('Sass/*.scss').pipe(sass()).pipe(gulp.dest('dist/scss'));
});

// 2. minify css code
gulp.task("minify_css", () => {
    gulp.src('css/*.css').pipe(cleancss({ keepBreaks: false })).pipe(gulp.dest('dist/css'));
});

//3. minify images
gulp.task("minify_Images", () => {
    gulp.src('Images/*').pipe(imagemin()).pipe(gulp.dest('dist/img'));
});

// 4. dist


// 5. Copy Html File to dist

gulp.task("CopyHtmlFile", () => {
    gulp.src("*.html").pipe(gulp.dest('dist'));
});

// 6. Copy Font to dist
gulp.task("CopyFonts", () => {
    gulp.src("Fonts/*").pipe(gulp.dest('dist/Fonts'));
});
