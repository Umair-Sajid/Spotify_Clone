import cors from "cors";
import express from "express";
import { dbConfig } from "./db/config.js";
import dbSync from "./db/init.js";
import sequelize from "./db/config.js";
import userModel from "./models/user/index.js";
import allRoutes from "./routes/index.js";
import Session from "express-session";
import SequelizeStore from "connect-session-sequelize";

export const app = express();

// Use cors middleware directly
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT", // Fix: Use uppercase for HTTP methods
  })
);

app.use(express.json());
app.listen(3300, (err) => {
  if (err) {
    console.log("server is not started");
  } else {
    console.log("server is started");
  }
});

const mySequelizeStore = SequelizeStore(Session.Store);
const mySequelizeStore1 = new mySequelizeStore({
  db: sequelize,
});

app.use(
  Session({
    secret: "secret",
    store: mySequelizeStore1,
    saveUninitialized: true,
    resave: false,
    proxy: false,
  })
);

mySequelizeStore1.sync({});
dbConfig();
dbSync();
app.use("/", allRoutes);
