import express from "express";
import cookbookRoutes from "./routes/cookbookRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import cors from "cors";
import { passportConfig } from "./middleware/passport.js";
import passport from "passport";
import * as dotenv from "dotenv";
// import { passportConfig } from "./middleware/passport.js";
// import passport from "passport";
dotenv.config();

// create express  app
const app = express();

// instantiate router feature and add it to the express app
const router = express.Router();
app.use(router);
app.use(cors()); //allowing backend to communicate with frontend
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(passport.initialize());
passportConfig(passport);

// write first GET route for testing
// router.get("/test", (req, res) => {
//   res.send({ msg: "Test route is working!" });
// });

// app.use(passport.initialize());
// passportConfig(passport);

//define the port of our server
app.listen(5001, () => {
  console.log("Sever is now listening at port 5001");
});

app.use("", cookbookRoutes);
app.use("", usersRoutes);

export default app;
