var Jimp = require("jimp");

var fileName = "image.jpg";
var imageCaption = "A journey begins";
var loadedImage;

Jimp.read(fileName)
  .then(function(image) {
    loadedImage = image;
    return Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
  })
  .then(function(font) {
    loadedImage.print(font, 10, 10, imageCaption).write(fileName);
  })
  .catch(function(err) {
    console.error(err);
  });
