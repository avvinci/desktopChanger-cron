import cron from "node-cron";
import fetchingData from "./fetch";
import wallpaper from "wallpaper";

cron.schedule("10 * * * * *", () => {
  console.log("yo");
  fetchingData();
  (async () => {
    await wallpaper.set("image.jpg");
  })();
  //   setWallpaper();
  console.log("..done");
});

function setWallpaper() {}
