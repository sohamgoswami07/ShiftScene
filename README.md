#  ShiftScene
An immersive **hover-based video background slider** with custom cursor, smooth transitions, and text reveal animations.  
Each section displays a looping background video that shifts on hover, revealing descriptive content and a "Learn More" button.

---

## 🚀 Features
- **Custom cursor** for a minimal, modern UI.
- **Video background transitions** controlled by [GSAP](https://greensock.com/gsap/).
- **Hover-triggered content reveal** with smooth fade + slide-in effects.
- **Numbered sections** with unique headings and descriptive text.
- Responsive full-screen layout using modern CSS and Google Fonts.

---

## 📸 Preview

<img width="1912" height="942" alt="Screenshot 2025-09-24 170826" src="https://github.com/user-attachments/assets/5542262e-432d-4dec-88ab-b8f0acebf3a4" />

---

## 🌐 Live Demo
👉 [Live Demo Link](https://sohamgoswami07.github.io/ShiftScene/)

---

## 🛠️ Tech Stack
- **HTML5**
- **CSS3**
  - Fonts: [Radio Canada Big](https://fonts.google.com/specimen/Radio+Canada+Big),  
    [Hedvig Letters Sans](https://fonts.google.com/specimen/Hedvig+Letters+Sans),  
    [Major Mono Display](https://fonts.google.com/specimen/Major+Mono+Display)
- **JavaScript (ES6+)**
- **GSAP** for smooth animations & transitions

---

## 📦 Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

---

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run locally**

   ```bash
   npm run dev
   ```

4. Open in your browser at:

   ```
   http://localhost:5173
   ```

---

## ⚙️ How It Works

* **Custom Cursor**: follows mouse movement, replacing the default pointer.
* **Video Slider**: background videos are arranged in a row and translated horizontally on hover using GSAP.
* **Hover Text Interaction**:

  * Hovering a heading (`.hover-text`) shifts to the corresponding video.
  * The heading becomes active, and its related description + button text fade into view.
* **Overlay Layer**: provides a subtle dark tint to improve text visibility.

---

## 🙌 Acknowledgements

* [GSAP](https://greensock.com/gsap/) for animations
* [Google Fonts](https://fonts.google.com/) for elegant typography

