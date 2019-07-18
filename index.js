import cron from "node-cron";
import fetchImage from "./fetch";
import wallpaper from "wallpaper";

// pm2 start index.js --node-args="--require esm"


cron.schedule("* * * * *", () => {
  // console.log("yo");
  fetchImage();
  (async () => {
    await wallpaper.set("image.jpg");
  })();
  // console.log("..done");
});
