var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
    
gulp.task('default', ['ugly','views', 'concat','scss','watch']);

gulp.task('views', function(){
   return gulp.src('client/views/index.html')
            .pipe(gulp.dest('public/views/')); 
});

gulp.task('watch', function(){
   gulp.watch('client/views/index.html', ['views']); 
   gulp.watch('client/scripts/*.js', ['ugly']); 
   gulp.watch('client/styles/scss/*.scss',['concat','scss']);
});

gulp.task('ugly', function(){
   return gulp.src('client/scripts/*.js')
            .pipe(uglify())
            .pipe(gulp.dest('public/scripts/')); 
});

gulp.task('concat', function(){
   return gulp.src('client/styles/scss/*.scss')
                .pipe(concat('style.scss'))
                .pipe(gulp.dest('client/styles/')); 
});

gulp.task('scss', function(){
   return sass('client/styles/style.scss')
                .pipe(gulp.dest('public/styles/'));
             
});

