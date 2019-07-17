import cron from "node-cron";
import fetchingData from "./fetch";
import wallpaper from "wallpaper";

cron.schedule("* * * * *", () => {
  console.log("yo");
  fetchingData();
  (async () => {
    await wallpaper.set("image.jpg");
  })();
  console.log("..done");
});
// pm2 start index.js --node-args="--require esm"