import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

// CORS middleware FIRST and ONLY ONCE
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
// Add this above your POST route
app.get("/", (req, res) => {
  res.send("Server is running!");
});
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "poonamthite6@gmail.com",
    pass: "umuq krpu acyx kiny",
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: "poonamthite6@gmail.com",
      subject: `Contact from ${name}`,
      text: message,
      replyTo: email,
    });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
