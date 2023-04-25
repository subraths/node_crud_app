import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import URI from "./db_uri.js";
import router from "./routes/router.js";

const app = express();

const PORT = 5000;

// Enable all cors requests
app.use(cors());

// application/json parser
app.use(bodyParser.json());

app.use("/", router);

mongoose
  .connect(URI)
  .then((res) => {
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
