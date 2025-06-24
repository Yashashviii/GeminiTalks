<h1 align="center">🚀 GeminiTalks</h1>

<p align="center">
An intelligent and interactive chatbot built with Node.js and Google Gemini, allowing users to ask questions and receive real-time, conversational responses in a sleek web interface.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/EJS-ffc500?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
</p>

## 🚀 Features

- 🌐 Built with **Node.js** and **Express**
- ✨ Uses **Gemini 2.5 Flash** model via `@google/genai`
- 🎨 Clean UI built using **EJS templating**
- 🔒 Basic **session-based username persistence**
- 🎲 Dynamic greeting message on each load

---

## 🛠️ Tech Stack

| Technology     | Purpose                        |
|----------------|--------------------------------|
| Node.js        | Backend runtime                |
| Express.js     | Web framework                  |
| EJS            | Templating engine              |
| dotenv         | Environment variable handling  |
| body-parser    | Middleware to parse form data  |
| @google/genai  | Google Gemini model SDK        |

---

## 🧠 How it works

1. User types a question.
2. The input is sent to Gemini via Google GenAI SDK.
3. Gemini responds with plain text or basic HTML.
4. The response is shown on the webpage — formatting may vary.

---

## ❗ Known Limitations

- Gemini does **not** remember previous conversations (no persistent memory).
- Markdown formatting for responses is **not yet implemented**.

---

## 🧭 Roadmap

> Planned enhancements:

- 🔐 Add Login Page with OAuth  
- 🔒 Implement Authentication and Security  
- 🎨 Improved UI with markdown and rich formatting  
- 📜 Conversation History and Memory (when Gemini supports it)  
- 🌍 Multi-language support  
- 💾 Database integration for storing chats or user profiles  

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/geminitalks.git
cd geminitalks
npm install
```

---

## 🔑 Environment Setup

Create a `.env` file and add your Gemini API key and port:

```env
API_KEY=your_google_gemini_api_key
PORT=3000
```
---

## 🧪 Run the App

```bash
nodemon src/index.js
```

Then open http://localhost:3000 in your browser.

## 🤝 Contributing

Pull requests are welcome! Please fork the repo and submit your ideas or improvements.

<p align="center">
  ✨ Made with ❤️ using modern web technologies ✨
</p>

