import cron from "node-cron";

cron.schedule("10 * * * * *", () => {
  console.log("yo");
});
