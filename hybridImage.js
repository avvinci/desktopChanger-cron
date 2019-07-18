var Jimp = require("jimp");

var fileName = "image.jpg";
var newFileName = "image1.jpg";
var imageCaption = "A journey for thousand miles begins with a single step";
var loadedImage;

// let captionWidth = Jimp.measureText(Jimp.FONT_SANS_32_BLACK, "Some string");
// Jimp.measureTextHeight(Jimp.FONT_SANS_32_BLACK, "Some string", 100); // height of text
// console.log(captionWidth, captionHeight);

Jimp.read(fileName)
  .then(function(image) {
    loadedImage = image;
    return Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
  })
  .then(function(font) {
    loadedImage
      .print(
        font,
        50,
        400,
        imageCaption,
        1000,
        (err, loadedImage, { x, y }) => {
          loadedImage.print(font, x, y + 20, "", 50);
        }
      )
      .write(newFileName);
  })
  .catch(function(err) {
    console.error(err);
  });
