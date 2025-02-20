# Week 4 Assignment: HTML Canvas with Interactive Shapes

## Project Overview
This project demonstrates the use of HTML5 Canvas and JavaScript to create an interactive web application where users can draw and manipulate shapes. It fulfills the requirements for the Week 4 assignment, including bonus functionality for enhanced interactivity.

## Features
### 1. Shape Drawing (On Page Load)
- **Rectangle:** A pastel pink rectangle (150px x 100px).
- **Circle:** A pastel purple circle with a radius of 50px.
- **Triangle:** A pastel purple triangle formed by three vertices.
- **Line:** A diagonal line from the top-left to bottom-right of the canvas.

### 2. User Interaction
- **Random Shape Drawing:** Clicking anywhere on the canvas draws a random shape (rectangle, circle, or triangle) in a random pastel color.
- **Shape Removal:** Clicking on an existing shape removes it from the canvas.
- **Clear Canvas:** A "Clear Canvas" button removes all shapes from the canvas.

### 3. Bonus Challenge
- Implemented an advanced interaction system where the user can:
  - Click to add random shapes.
  - Click existing shapes to remove them.
- Efficient shape detection using coordinate checks and hit detection.

## Technology Stack
- **HTML5:** Structure of the webpage.
- **CSS3:** Styling for a pastel-themed user interface.
- **JavaScript:** Core functionality for canvas drawing, shape management, and interactivity.

## How It Works
1. **Shape Storage:** Shapes are stored in an array with details like type, position, and size.
2. **Drawing Logic:** The `drawShapes` function draws the initial shapes on page load.
3. **User Clicks:**
   - If the user clicks an empty space, a random shape appears.
   - If the user clicks an existing shape, it gets removed.
4. **Canvas Reset:** The "Clear Canvas" button erases all shapes.

## Installation & Usage
1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/week4-canvas-assignment.git
```

2. **Open `index.html` in your browser:**
- No server required—just open the file directly.

## Bonus Challenge Implementation
- **Shape Detection:** Used coordinate checks to identify if a click falls within an existing shape.
- **Shape Removal:** Filtered the shapes array to remove the clicked shape and redrew the canvas.
- **Random Shape Generation:** Selected shape types and colors randomly when users click the canvas.

## Project Structure
```
📦 Week4-Canvas-Assignment
├─ 📄 index.html        # Main HTML file with canvas and controls
├─ 📄 script.js         # JavaScript for shape logic and interaction
├─ 📄 style.css         # CSS for styling the UI
└─ 📄 README.md         # Project documentation
```

---

This assignment showcases how JavaScript can enhance user interaction through creative canvas-based functionality.
