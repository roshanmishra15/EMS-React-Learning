const dns = require("dns");

dns.setServers(["1.1.1.1"]);

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("../Backend/routes/authRoutes");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes)
connectDB();

app.get("/", (req, res) => {
    res.json({
        message: "EMS API is running"
    });
});

const PORT = process.env.PORT || 5000;
console.log(PORT)
// console.log(process.env.MONGODB_URI);
app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`);
});