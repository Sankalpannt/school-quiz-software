# School Quiz Software 🏆

An interactive, feature-rich school quiz competition software built with HTML, CSS, JavaScript, and Electron. Designed for staging high-energy quiz competitions with real-time house scoreboards, multiple round formats, countdown timers, sound effects, and celebration animations.

---

## ✨ Features

- **🏆 Real-Time House Scoreboard**: Track live scores dynamically for competing houses/teams with custom colors and names.
- **🎯 Multiple Competition Rounds**:
  - **General Round** (10 Pts)
  - **Rapid Fire Round** (Separate sets for House A, B, C, D - 5 Pts)
  - **🖼️ Picture Round** (Visual questions - 15 Pts)
  - **🔔 Buzzer Round** (Fastest finger / buzzer questions - 15 Pts)
  - **Estimation Round** (15 Pts)
- **⏱️ Interactive Countdown Timer**: Configurable question timers with audio warnings and buzzer alerts.
- **🎉 Winner Celebration**: Dedicated winner podium animations and celebrations with visual effects.
- **🔊 Sound Effects**: Immersive audio cues for correct answers, wrong answers, timers, and buzzer events.
- **📝 Question Bank Editor & Manager**: In-app interface to customize questions, answers, points, and house configurations.
- **📄 PDF & JSON Support**:
  - Export printable question sheets to PDF.
  - Export and import complete quiz datasets in JSON format.
- **🖥️ Desktop & Web Modes**: Run as a native desktop application using Electron or run locally in any modern web browser.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or newer recommended)
- `npm`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sankalpannt/school-quiz-software.git
   cd school-quiz-software
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

#### Option 1: Run as Desktop App (Electron)
```bash
npm start
```
*Or on Windows, simply double-click `Launch-Quiz.bat`.*

#### Option 2: Run in Web Browser
```bash
npm run dev
```
Then open `http://localhost:3000` in your web browser.

---

## 📁 Project Structure

```
├── pictures/               # Images and media assets for picture round
├── app.js                  # Core quiz logic, state management, timer & audio
├── styles.css              # Custom styling, glassmorphism UI & animations
├── index.html              # Main presentation and editor interface
├── main.js                 # Electron main process entry point
├── export-pdf.js           # PDF export utility script
├── Launch-Quiz.bat         # Windows batch launcher
├── Launch-Quiz-Silent.vbs  # Silent background launcher for Windows
├── package.json            # Project configuration & npm scripts
└── README.md               # Project documentation
```

---

## 📜 License

This project is open source and available under the ISC License.
