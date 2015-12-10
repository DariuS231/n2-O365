var gulp = require('gulp');

var PATHS = {
    srcTsFiles: 'src/**/**/*.ts',
    srcFiles: 'src/**/*'
};
var libs = [
  'node_modules/angular2/bundles/angular2.min.js',
  'node_modules/angular2/bundles/router.min.js',
  'node_modules/angular2/bundles/http.min.js',
  'node_modules/systemjs/dist/system.js',
  'node_modules/es6-shim/es6-shim.min.js'
];


gulp.task('clean', function (done) {
    var del = require('del');
    del(['dist'], done);
});

gulp.task('ts2js', function () {
    var typescript = require('gulp-typescript');
    var tscConfig = require('./tsconfig.json');

    gulp.src(libs).pipe(gulp.dest('dist/lib'));
    gulp.src([PATHS.srcFiles, '!' + PATHS.srcTsFiles]).pipe(gulp.dest('dist'));

    var tsResult = gulp.src(PATHS.srcTsFiles).pipe(typescript(tscConfig.compilerOptions));

    return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('play', ['ts2js'], function () {
    var http = require('http');
    var connect = require('connect');
    var serveStatic = require('serve-static');
    var open = require('open');

    var port = 44302, app;

    gulp.watch(PATHS.srcTsFiles, ['ts2js']);

    app = connect().use(serveStatic(__dirname));
    http.createServer(app).listen(port, function () {
        open('http://localhost:' + port);
    });
});

gulp.task('default', ['play']);