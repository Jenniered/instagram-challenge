const express = require("express");
const hbs = require("hbs");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const path = require("path");

const indexRouter = require("./routes/index");

const app = express();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
// app.listen(3000, () => console.log("server is running"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// route setup
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;