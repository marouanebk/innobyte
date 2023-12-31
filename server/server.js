require("dotenv").config();
//express app

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
//import mongoose
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
//import routers
// exemple :const visitRoutes=require('./routes/visitsRoutes')
const authRoutes = require("./routes/authRoutes");
const accountRoutes = require("./routes/accountRoutes");

const workSpaceRoutes = require("./routes/workSpaceRoutes");
const projectsRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes

app.use("/api/auth", authRoutes);
app.use("/api/account", accountRoutes);
app.use("/api/workspace", workSpaceRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/tasks", taskRoutes);

// app.use('/api/workspace', workSpaceRoutes)

//connect to db
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    //listen for requests
    app.listen(port, () => {
      console.log("listening... ", port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
