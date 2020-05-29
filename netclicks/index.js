const browserSync = require("browser-sync");

browserSync({
  server: "app",
  files: ["index.html", "css/*.css", "script/*.js"]
});