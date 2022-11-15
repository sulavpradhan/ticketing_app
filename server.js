const express = require("express");
const dontenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const colors = require("colors");
const connectDB = require("./config/db");
const PORT = process.env.PORT;

//connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to the support desk API" });
});

// Routes

// Users Routes

app.use("/api/users", require("./routes/userRoutes"));

// Tickets Routes

app.use("/api/tickets", require("./routes/ticketRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`server started at ${PORT}`));
