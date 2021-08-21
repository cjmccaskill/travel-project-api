require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("./db/connection");
const app = express();
const { PORT } = process.env || 3000;

// Import routers
const TripDetailsRouter = require("./controllers/tripDetails");
const UserRouter = require("./controllers/user");
const AgentRouter = require("./controllers/agent");

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// Test if server is working
app.get("/", (req, res) => res.send(`👍🏼  Server is working!`));

// Routes
app.use("/tripDetails", TripDetailsRouter);
app.use("/user", UserRouter);
app.use("/agent", AgentRouter);

app.listen(PORT, () => console.log(`👍🏼 Server is running on port: ${PORT}`));
