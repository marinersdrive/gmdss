const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5005;
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.pkfgwas.mongodb.net/test_series`, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
});

const QuestionSchema = new mongoose.Schema({
    _id: Object,
    category: String,
    question: String,
    imageData: String,
    options: [String],
    correctOption: Number,
});

const DetailsSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  indosNumber: String
});

const Question1 = mongoose.model("imucet", QuestionSchema, "imucet");
const Question2 = mongoose.model("dgexit", QuestionSchema, "dgexit");
const Question3 = mongoose.model("gmdss", QuestionSchema, "gmdss");
const Details = mongoose.model("userDetails", DetailsSchema, "userDetails");

// API endpoint to get questions
app.get("/api/questions1", async (req, res) => {
  try {
    const questions1 = await Question1.find();
    res.json(questions1);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/questions2", async (req, res) => {
    try {
      const questions2 = await Question2.find();
      res.json(questions2);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/questions3", async (req, res) => {
    try {
      const questions3 = await Question3.find();
      res.json(questions3);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

app.post('/api/storeUserData', async (req, res) => {
  try {
    const { firstName, lastName, email, indosNumber } = req.body;

    // Create a new user instance
    const newUser = new Details({
      firstName,
      lastName,
      email,
      indosNumber
    });

    // Save the user to the database
    await newUser.save();

    res.status(200).json({ success: true, message: 'User data stored successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.pkfgwas.mongodb.net/test_series`);
});
