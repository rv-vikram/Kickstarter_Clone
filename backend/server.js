const app = require("./app");
const connectDb = require("./configs/db");

require("dotenv").config();

app.listen(process.env.PORT, async () => {
  await connectDb();
  console.log("Server is running...");
});
