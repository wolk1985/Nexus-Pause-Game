![image](https://github.com/user-attachments/assets/f1cf2d00-8df9-492f-8d60-0ecf6fcd1003)

# Nexus-Pause-Game

A neon-styled, precision-based 3D cube game for web browsers. Rotate the cube, test your accuracy, and earn points and rewards!

---

## 📦 Project Structure

```
NexusGame/
│
├── css/
│   └── style.css          # Main styles for the game (responsive, neon effects, cube layout)
│
├── js/
│   └── main.js            # Game logic, animation, scoring, localStorage, UI updates
│
├── index.html             # Main HTML file, includes all UI and game structure
│
└── README.md              # Project documentation (this file)
```

---

## 🎮 Game Description

**Nexus Game** is a browser-based mini-game where you interact with a glowing 3D cube:

- The cube rotates automatically.
- Your goal is to "pause" the cube as close as possible to its original orientation.
- The closer you are, the higher your **Precision** and **Points**.
- Points accumulate in your **Wallet**; every 100 points earns you a **Reward**.
- All progress is saved in your browser (localStorage).
- The UI is fully responsive and adapts to both desktop and mobile screens.

---

## 🚀 How to Run

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Play!

---

## 🗂️ Main Files

- **index.html**  
  The main entry point. Contains the game layout and links to CSS/JS.

- **css/style.css**  
  Handles all visual styles, including neon effects, cube 3D appearance, and responsive layout for mobile/desktop.

- **js/main.js**  
  Contains all game logic: cube animation, scoring, UI updates, localStorage management, and event handling.

---

## 📱 Responsive Design

- The game is centered and adapts to any screen size.
- On mobile, the cube and panels scale to fit the viewport with minimal side margins.
- On desktop, the game is centered with balanced spacing above and below.

---

## 📝 Controls

- **Pause Game**: Click or tap anywhere to "pause" the cube and check your precision.
- **Reset**: Click the "Pause Game" subtitle to reset your progress.

---

## 💡 Customization

- You can adjust cube speed, scoring, and UI colors in the CSS and JS files.
- All logic is in plain JavaScript and CSS, no frameworks required.

---

## 🛠️ Requirements

- Modern web browser (Chrome, Firefox, Edge, Safari)
- No build tools or dependencies required

---
## 🏆 Points System Explained

The **Nexus Game** uses a simple but motivating points and rewards system:

### 1. **Precision (%)**
- **What it is:**  
  Shows how close you stopped the cube to the "perfect" orientation (0° or 180° on both X and Y axes).
- **How it's calculated:**  
  - 100% = perfect alignment.
  - The further from perfect, the lower the percentage.
  - If your deviation is above the allowed tolerance, precision is 0%.

### 2. **Points**
- **What it is:**  
  The score you get for your current attempt.
- **How it's calculated:**  
  - Points are rounded to the nearest 20 (e.g., 100, 80, 60, 40, 20, 0).
  - 100% precision = 100 points.
  - 80–99% precision = 80 points.
  - 60–79% precision = 60 points.
  - 40–59% precision = 40 points.
  - 20–39% precision = 20 points.
  - <20% or outside tolerance = 0 points.

### 3. **Wallet**
- **What it is:**  
  The total sum of all points you have earned in the current session (saved in your browser).
- **How it works:**  
  - Every time you earn points, they are added to your wallet.
  - The wallet value is persistent until you reset the game.

### 4. **Rewards**
- **What it is:**  
  A bonus counter for your progress.
- **How it works:**  
  - For every 100 points in your wallet, you get 1 reward.
  - Rewards = `Math.floor(wallet / 100)`.
  - Rewards are also persistent until reset.

---

### **UI Mapping**

| UI Block         | Example Value | Meaning                                 |
|------------------|--------------|-----------------------------------------|
| **Precision**    | 95%          | Your accuracy for the last attempt      |
| **Points**       | 100          | Points earned for the last attempt      |
| **Wallet**       | 160          | Total points accumulated                |
| **Rewards**      | 1            | Number of 100-point milestones reached  |

---

**Summary:**  
- The better your timing, the higher your precision and points.
- Points accumulate in your wallet.
- Every 100 wallet points = 1 reward.
- All values are saved until you reset the game.

---

## 📃 License

MIT License (see LICENSE file if present)

---

Enjoy the game!
https://wolk1985.github.io/Nexus-Pause-Game/
![image](https://github.com/user-attachments/assets/bd63d126-3b45-418a-ac43-fdbca3048e5a)

