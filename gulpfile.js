const project_folder = require("path").basename(__dirname);
const source_folder = "src";
const fs = require("fs");

const path = {
  build: {
    html: project_folder + "/",
    css: project_folder + "/css/",
    js: project_folder + "/js/",
    img: project_folder + "/img/",
    fonts: project_folder + "/fonts/",
    swiper: project_folder + "/swiper/",
    videos: project_folder + "/videos/",
  },
  src: {
    html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
    css: source_folder + "/scss/styles.scss",
    js: source_folder + "/js/*.js",
    img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    fonts: source_folder + "/fonts/*.ttf",
    swiper: source_folder + "/swiper/**/*",
    videos: source_folder + "/videos/*.mp4",
  },
  watch: {
    html: source_folder + "/**/*.html",
    css: source_folder + "/scss/**/*.scss",
    js: source_folder + "/js/**/*.js",
    img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    swiper: source_folder + "/swiper/**/*",
    videos: source_folder + "/videos/**/*.mp4",
  },
  clean: "./" + project_folder + "/"
}

let {src, dest} = require("gulp");
let gulp = require("gulp");
let browsersync = require("browser-sync").create();
let fileinclude = require("gulp-file-include");
let del = require("del");
let scss = require("gulp-sass")(require('sass'));
let autoprefixer = require("gulp-autoprefixer");
let group_media = require("gulp-group-css-media-queries");
let clean_css = require("gulp-clean-css");
let rename = require("gulp-rename");
let uglify = require("gulp-uglify-es").default;
let imagemin = require("gulp-imagemin");
let ttf2woff = require("gulp-ttf2woff");
let ttf2woff2 = require("gulp-ttf2woff2");
let fonter = require("gulp-fonter");
let babel = require('gulp-babel');


function browserSync(params) {
  browsersync.init({
    server: {
      baseDir: "./" + project_folder + "/"
    },
    port: 3000,
    notify: false
  })
}

function html() {
  return src(path.src.html)
  .pipe(fileinclude())
  .pipe(dest(path.build.html))
  .pipe(browsersync.stream());
}

function swiper() {
  return src(path.src.swiper)
  .pipe(dest(path.build.swiper))
  .pipe(browsersync.stream());
}

function videos() {
  return src(path.src.videos)
  .pipe(dest(path.build.videos))
  .pipe(browsersync.stream());
}

function css() {
  return src(path.src.css)
  .pipe(scss({
    outputStyle: "expanded"
  }).on('error', scss.logError))
  .pipe(group_media())
  .pipe(autoprefixer({
    overrideBrowserslist: ["last 5 versions"],
    cascade: true
  }))
  .pipe(dest(path.build.css))
  .pipe(clean_css())
  .pipe(rename({
    extname: ".min.css"
  }))
  .pipe(dest(path.build.css))
  .pipe(browsersync.stream());
}

function js() {
  return src(path.src.js)
  .pipe(fileinclude())
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(dest(path.build.js))
  .pipe(uglify())
  .pipe(rename({
    extname: ".min.js"
  }))
  .pipe(dest(path.build.js))
  .pipe(browsersync.stream());
}


function images() {
  return src(path.src.img)
  .pipe(imagemin([
     imagemin.gifsicle({interlaced: true}),
     imagemin.mozjpeg({quality: 75, progressive: true}),
     imagemin.optipng({optimizationLevel: 3}),
     imagemin.svgo({
         plugins: [
             {removeViewBox: true},
             {cleanupIDs: false}
         ]
       })
   ]))
  .pipe(dest(path.build.img))
  .pipe(browsersync.stream());
}


function fonts() {
  src([source_folder + "/fonts/*.ttf"])
  .pipe(ttf2woff())
  .pipe(dest(path.build.fonts));
 return src([source_folder + "/fonts/*.ttf"])
  .pipe(ttf2woff2())
  .pipe(dest(path.build.fonts));
}

gulp.task("otf2ttf", function() {
  return src([source_folder + "/fonts/*.otf"])
  .pipe(fonter({
    formats: ["ttf"]
  }))
  .pipe(dest(source_folder + "/fonts/"))
})

function fontsStyle() {

  let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
  if (file_content == '') {
    console.log("yes");
  fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
  return fs.readdir(path.build.fonts, function (err, items) {
  if (items) {
  let c_fontname;
  for (var i = 0; i < items.length; i++) {
  let fontname = items[i].split('.');
  fontname = fontname[0];
  if (c_fontname != fontname) {
  fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
  }
  c_fontname = fontname;
  }
  }
  })
  }
  }
  
  function cb() { }

function watchFiles() {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], images);
}

function deleteDist () {
return del(path.clean);
}

const build = gulp.series(deleteDist, gulp.parallel(js, css, html, images, fonts, swiper, videos), gulp.parallel(fontsStyle, browserSync));
const watch = gulp.parallel(build, watchFiles);

exports.fontsStyle = fontsStyle;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.swiper = swiper;
exports.videos = videos;
exports.build = build;
exports.watch = watch;
exports.default = watch;
