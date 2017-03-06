"use strict";

var gulp = require("gulp");

var browserSync = require('browser-sync');
var less = require('gulp-less');
var path = require('path');
var flatten = require('gulp-flatten');

var paths = {
    webroot: "./design/",
    nodeModules: "./node_modules/**/*",
    scripts: "./",
};

gulp.task("browser-sync", function () {
    browserSync.init({
        server: {
            baseDir: "./design/"
        }
    });
});

gulp.task("compile:less", function () {
    return gulp.src(paths.scripts + "css/*.less")
        .pipe(less({
            rootPath: "files",
            relativeUrls: true,
            paths: [path.join(__dirname, "less", "includes")]
        }))

        .pipe(gulp.dest(paths.webroot))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task("copy:files", function () {
    gulp.src([paths.scripts + "css/**/*", "!" + paths.scripts + "css/**/*.less"])

        .pipe(gulp.dest(paths.webroot));
});

gulp.task("watch:less", ["browser-sync"], function () {
    gulp.watch(paths.scripts + "css/**/*.less", ["compile:less"]);
});
