var gulp=require("gulp");
var less=require("gulp-less");
var bs=require("browser-sync");


// gulp.task("default",function(){
//     console.log(1111)
// });
gulp.task("less",function(){
    gulp.src("less/*.less").pipe(less())
    .pipe(gulp.dest("dist/css"))
});

gulp.task("Server",["less"],function(){
    bs.init({
        server:{
            baseDir:"./",
            index:"index.html"
        }
    });
    gulp.watch("less/*.less",["less"]);
    gulp.watch("dist/css/*.css").on("change",bs.reload);
    gulp.watch("*.html").on("change",bs.reload);
});

gulp.task("default",["Server"]);//默认任务-server