import fetch from "node-fetch";
import fs from "fs";

// create a function that grabs a random image

const fetchingData = async () => {
  const res = await fetch("https://picsum.photos/200?random");
  const date = Date.now();
  console.log(date);
  const dest = fs.createWriteStream(`./image-${date}.png`);
  res.body.pipe(dest);
};

// export the function so it can be used in the index.js file

export default fetchingData;
