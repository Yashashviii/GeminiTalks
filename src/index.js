import express from "express";
import { GoogleGenAI } from "@google/genai";
import bodyParser from "body-parser";
import env from "dotenv";
import session from "express-session";

env.config();

const app = express();
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
  })
);
const port = process.env.PORT;
const ai = new GoogleGenAI({
  apiKey: process.env.API_KEY,
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const greetings = [
  "What are you working on? ",
  "Good to see you again!",
  "What's on your mind today? ",
  "Where should we begin? ",
  "What's on the agenda today? ",
  "Hey, Ready to dive in? ",
  "Ready when you are! ",
  "What can I help you with today? ",
  "Let's get started! ",
  "What would you like to explore? ",
  "How can I assist you today? ",
  "What would you like to know? ",
  "What are you curious about? ",
  "What can I do for you today? ",
  "What topic interests you today? ",
  "What would you like to discuss?",
  "What are you thinking about?",
  "What would you like to learn about?",
  "What are you interested in today?",
  "What can I help you discover?"
];

function random() {
  const randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

//GET login page
app.get("/login", (req, res) => {
  const randomSentence = random();
  res.render("login.ejs", {
    content: "",
    input: "",
    username: "",
    random: randomSentence,
  });
});

//POST login page
app.post("/", (req, res) => {
  req.session.username = req.body.name;
  const randomSentence = random();
  random();
  res.render("index.ejs", {
    content: "",
    input: "",
    username: req.session.username,
    random: randomSentence,
  });
});

//GET home page
app.get("/", (req, res) => {
  const randomSentence = random();
  res.render("index.ejs", {
    content: "",
    input: "",
    username: req.session.username || "Guest",
    random: randomSentence,
  });
});

//POST Method
app.post("/submit", async (req, res) => {
  const input = req.body.userInput;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: input, // use dynamic input
    });
    const randomSentence = random();
    const html = await response.candidates[0].content.parts[0].text;

    res.render("index.ejs", {
      content: html,
      input: null,
      username: req.session.username || "Guest",
      random: randomSentence,
    });
  } catch (error) {
    console.log(`⚠️ Error!! ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
