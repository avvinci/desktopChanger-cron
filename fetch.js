import fetch from "node-fetch";
import fs from "fs";

let collectionArray = [858095];
const imageWidth = 1080; //your desired image width in pixels
const imageHeight = 1080; //desired image height in pixels
let collectionID = 858095; //the collection ID from the unsplash
let randomNumber = 1;

let url = `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}`;

const fetchImage = async () => {
  const res = await fetch(url);
  let fileName = "image.jpg";
  const dest = fs.createWriteStream(`./${fileName}`);
  res.body.pipe(dest);
};

export default fetchImage;
