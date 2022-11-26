const express = require("express");
const app = express();
const morgan = require('morgan')
const mongoose = require("mongoose");
const helmet = require('helmet')
const dotenv = require("dotenv");
const cors = require('cors')
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const castRoute =  require("./routes/casts");
const commentRoute = require("./routes/comments");
const castofMovieRoute = require("./routes/castsofMovie");
const director = require("./routes/directors");
const plan = require("./routes/plans");
const myMovieList = require("./routes/myMoviesList");


dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'))
app.use(express.json());
app.use(helmet())

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);
app.use("/api/casts", castRoute);
app.use("/api/comments", commentRoute);
app.use("/api/castsofMovie", castofMovieRoute);
app.use("/api/directors", director);
app.use("/api/plans", plan);
app.use("/api/myMoviesList", myMovieList);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
