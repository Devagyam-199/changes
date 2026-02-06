import app from "./app.js";
import dbConnection from "./db/dbConn.js";
import dotenv from "dotenv";

dotenv.config();

dbConnection()
  .then(() => {
    app.listen(process.env.PORT || 5000, (req, res) => {
      console.log(`Server is running on port ${process.env.PORT || 8080} `);
      console.log(`http://localhost:${process.env.PORT || 8080}`);
    });
  })
  .catch((err) => {
    console.log(`Some error occured while talking to the backend: ${err}`);
  });
