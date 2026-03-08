require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://sakha-spices.vercel.app"],
  }),
);

const { connectToDB } = require("./Config/db");

connectToDB();

const userRoute = require("./Routes/userRoute");
const contactMessageRoute = require("./routes/contactMessageRoute");
const adminRoute = require("./routes/adminRoute");

app.use("/api", userRoute);
app.use("/api/message", contactMessageRoute);
app.use("/api/admin", adminRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}`);
});
