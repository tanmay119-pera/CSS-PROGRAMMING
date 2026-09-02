<div align="center">

# 🏋️‍♂️ CSS Complete Masterclass — PRACTICE SETS (A TO G)
### *Handcrafted Practical Challenges & Solutions for Web Developers*

<br/>

<!-- ==================== BADGES / BANNERS ==================== -->
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://github.com/tanmay119-pera/HTML-PROGRAMMING.git)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![VS Code](https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![Antigravity](https://img.shields.io/badge/Google_Antigravity-4285F4?style=for-the-badge&logo=google&logoColor=white)](#)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tanmay119-pera)

<br/>

[![Exercises](https://img.shields.io/badge/Practice_Sets-A_to_G-success?style=flat-square)](#)
[![Difficulty](https://img.shields.io/badge/Difficulty-Beginner_to_Advanced-purple?style=flat-square)](#)
[![Author](https://img.shields.io/badge/Author-Adesh_Srivastava-orange?style=flat-square)](https://github.com/tanmay119-pera)

<p align="center">
  <b>Test your knowledge, build real-world components, and solidify your CSS styling skills with hands-on practice.</b>
</p>

---

</div>

<br/>

> [!IMPORTANT]
> ### 💡 A Personal Note from the Author
> **Welcome to your hands-on CSS Practice Arena!**
> 
> Theory is great, but true mastery comes from writing code with your own hands. These questions are specially crafted to help you grasp core-to-advanced CSS concepts step-by-step.
> 
> **🎯 How to get the most out of these exercises:**
> 1. **Try it on your own first!** Create a test HTML and CSS file and attempt the problem before reading the solution.
> 2. **Inspect and experiment!** Change values, test edge cases, and inspect elements in your browser's Developer Tools (`F12`).
> 3. **Verify with the solution!** Compare your approach with the clean, annotated reference code below.
> 
> *— Happy Coding by Author: **Adesh Srivastava (Tanmay)** ([@tanmay119-pera](https://github.com/tanmay119-pera))* 🚀

<br/>

---

## 📑 Table of Contents
- [🎯 Practice Set A — CSS Basics & Priority](#-practice-set-a--css-basics--priority)
  - [Problem 1: Simple Blue Box](#problem-a1-simple-blue-box)
  - [Problem 2: Grouped Heading Colors](#problem-a2-grouped-heading-colors)
  - [Problem 3: CSS Specificity & Cascade Hierarchy](#problem-a3-css-specificity--cascade-hierarchy)
- [🎯 Practice Set B — Typography & Sizing](#-practice-set-b--typography--sizing)
  - [Problem 1: Centered Capitalized Heading](#problem-b1-centered-capitalized-heading)
  - [Problem 2: Universal Font Family](#problem-b2-universal-font-family)
  - [Problem 3: Nested Divs with Custom Font Sizes](#problem-b3-nested-divs-with-custom-font-sizes)
- [🎯 Practice Set C — Shapes & Real-World Navbars](#-practice-set-c--shapes--real-world-navbars)
  - [Problem 1: Pure CSS Circle with Border Radius](#problem-c1-pure-css-circle-with-border-radius)
  - [Problem 2: Amazon.in Header Navbar Component](#problem-c2-amazonin-header-navbar-component)
- [🎯 Practice Set D — Page Layouts & Transparency](#-practice-set-d--page-layouts--transparency)
  - [Problem 1 to 4: Complete Header-Content-Footer Layout with RGBA](#problem-d-complete-webpage-layout-with-rgba-boxes)
- [🎯 Practice Set E — Positioning, Stacking & Flexbox](#-practice-set-e--positioning-stacking--flexbox)
  - [Problem 1: Sticky Fixed Badge with `z-index`](#problem-e1-fixed-badge-with-z-index-and-background-image)
  - [Problem 2: Evenly Spaced Flexbox Navigation](#problem-e2-evenly-spaced-flexbox-navigation)
  - [Problem 3: Ultimate Div Centering with Flexbox](#problem-e3-perfect-centering-with-flexbox)
  - [Problem 4: Priority Battle — `align-items` vs `align-self`](#problem-e4-priority-battle--align-items-vs-align-self)
- [🎯 Practice Set F — Responsive Media Queries](#-practice-set-f--responsive-media-queries)
  - [Problem 1: 4-Stage Adaptive Color-Changing Box](#problem-f1-4-stage-adaptive-color-changing-box)
- [🎯 Practice Set G — CSS Keyframe Animations](#-practice-set-g--css-keyframe-animations)
  - [Problem 1: Infinite Animated Spinner / Loader](#problem-g1-infinite-animated-spinner--loader)
- [💬 Quote of the Practice Set](#-quote-of-the-practice-set)
- [💖 Author & Credits](#-author--credits)

---

<br/>

## 🎯 Practice Set A — CSS Basics & Priority

### Problem A1: Simple Blue Box
> **Task:** Create a simple `<div>` with an `id="box"`, add some text content inside it, and set its background color to blue.

#### 📄 HTML Solution
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice Set A - Q1</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="box">
        this is simple text
    </div>
</body>
</html>
```

#### 🎨 CSS Solution
```css
#box {
    background-color: blue;
    color: white;
    padding: 15px;
}
```

---

### Problem A2: Grouped Heading Colors
> **Task:** Create 3 headings using `<h1>`, `<h2>`, and `<h3>`. Give them all a class `class="heading"` and set their text color to red.

#### 📄 HTML Solution
```html
<h1 class="heading">heading 1</h1>
<h2 class="heading">heading 2</h2>
<h3 class="heading">heading 3</h3>
```

#### 🎨 CSS Solution
```css
.heading {
    color: red; /* Targets all 3 headings via class */
}
```

---

### Problem A3: CSS Specificity & Cascade Hierarchy
> **Task:** Create a button and set its background color to:
> - **Green** using an external CSS stylesheet
> - **Blue** using internal `<style>` tag
> - **Pink/Red** using inline `style="..."`
> *Observe which style takes priority!*

#### 📄 HTML Solution
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Practice Set A - Q3</title>
    <!-- External stylesheet: button background = green -->
    <link rel="stylesheet" href="style.css">
    <style>
        /* Internal stylesheet: button background = blue */
        button {
            background-color: blue;
        }
    </style>
</head>
<body>
    <!-- Inline style: button background = red/pink -->
    <button style="background-color: red;">Click Me</button>
</body>
</html>
```

#### 🎨 CSS Solution (`style.css`)
```css
button {
    background-color: green;
    color: white;
}
```

> [!NOTE]
> **Priority Verdict:**  
> The button will render with **Red (Inline Style)** because **Inline Styles > Internal Styles > External Styles** in the CSS specificity hierarchy!

---

<br/>

## 🎯 Practice Set B — Typography & Sizing

### Problem B1: Centered Capitalized Heading
> **Task:** Create a heading centered on the page with all of its letters uppercase/capitalized by default.

#### 📄 HTML Solution
```html
<h1>welcome to my website</h1>
```

#### 🎨 CSS Solution
```css
h1 {
    text-align: center;
    text-transform: uppercase; /* Converts all letters to uppercase */
}
```

---

### Problem B2: Universal Font Family
> **Task:** Set the font family of all content in the document to `"Times New Roman"`.

#### 🎨 CSS Solution
```css
* {
    font-family: "Times New Roman", Times, serif;
}

/* Or targeting the root body: */
body {
    font-family: "Times New Roman", Times, serif;
}
```

---

### Problem B3: Nested Divs with Custom Font Sizes
> **Task:** Create one `div` inside another `div`. Give the outer div `id="outer"` with font size `25px`, and the inner div `id="inner"` with font size `10px`.

#### 📄 HTML Solution
```html
<div id="outer">
    Outer Content (25px)
    <div id="inner">
        Inner Content (10px)
    </div>
</div>
```

#### 🎨 CSS Solution
```css
#outer {
    font-size: 25px;
    background-color: #f0f4f8;
    padding: 20px;
    border: 2px solid #333;
}

#inner {
    font-size: 10px;
    background-color: #d1e7dd;
    padding: 10px;
    margin-top: 10px;
    border: 1px dashed #0f5132;
}
```

---

<br/>

## 🎯 Practice Set C — Shapes & Real-World Navbars

### Problem C1: Pure CSS Circle with Border Radius
> **Task:** Create a `div` with a height and width of `100px`. Set its background color to green and border-radius to `50%`.

```html
<div id="circle-box"></div>
```
```css
#circle-box {
    height: 100px;
    width: 100px;
    background-color: green;
    border-radius: 50%; /* 50% turns any equal square into a perfect circle */
}
```

---

### Problem C2: Amazon.in Header Navbar Component
> **Task:** Replicate the top navigation bar of Amazon.in with a logo, navigation links (Account, Cart, Contact), and a search input with a button.

#### 📄 HTML Solution
```html
<header>
    <nav class="navbar">
        <a href="#" class="nav-logo">amazon<span class="logo-in">.in</span></a>
        <a href="#" class="nav-link">Account</a>
        <a href="#" class="nav-link">My Cart</a>
        <a href="#" class="nav-link">Contact Us</a>
        <div class="nav-search">
            <input type="text" placeholder="Search Amazon.in">
            <button type="submit">Search</button>
        </div>
    </nav>
</header>
```

#### 🎨 CSS Solution
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

.navbar {
    height: 60px;
    background-color: #0f1111;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: white;
}

.nav-logo {
    color: #f08804;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
}

.logo-in {
    color: white;
    font-size: 14px;
}

.nav-link {
    color: white;
    text-decoration: none;
    font-size: 15px;
    transition: color 0.2s ease;
}

.nav-link:hover {
    color: #f08804;
}

.nav-search {
    display: flex;
    align-items: center;
}

.nav-search input {
    height: 36px;
    width: 250px;
    padding: 0 10px;
    border: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    outline: none;
}

.nav-search button {
    height: 36px;
    padding: 0 15px;
    background-color: #febd69;
    color: #111;
    border: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: pointer;
    font-weight: bold;
}

.nav-search button:hover {
    background-color: #f3a847;
}
```

---

<br/>

## 🎯 Practice Set D — Page Layouts & Transparency

### Problem D: Complete Webpage Layout with RGBA Boxes
> **Task:** Build a complete page layout containing:
> 1. The Amazon header navbar from Set C.
> 2. A content area with an appropriate calculated minimum height.
> 3. 3 boxes ($100\text{px} \times 100\text{px}$) with solid borders and unique $0.5$ opacity background colors (`rgba`).
> 4. A clean footer pinned to the bottom.

#### 📄 HTML Solution
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice Set D - Full Layout</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <a href="#" class="nav-logo">amazon.in</a>
            <a href="#" class="nav-link">Account</a>
            <a href="#" class="nav-link">My Cart</a>
            <a href="#" class="nav-link">Contact Us</a>
            <div class="nav-search">
                <input type="text" placeholder="Search Amazon.in">
                <button type="submit">Search</button>
            </div>
        </nav>
    </header>

    <main class="content-area">
        <div class="box box1">Box 1</div>
        <div class="box box2">Box 2</div>
        <div class="box box3">Box 3</div>
    </main>

    <footer>
        <p>&copy; 2026 Amazon Layout Replica — CSS Practice</p>
    </footer>
</body>
</html>
```

#### 🎨 CSS Solution
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

.navbar {
    height: 60px;
    background-color: #0f1111;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: white;
}

.nav-logo {
    color: #f08804;
    font-weight: bold;
    text-decoration: none;
}

.nav-link {
    color: white;
    text-decoration: none;
}

.nav-search input {
    height: 32px;
    padding: 0 8px;
}

.nav-search button {
    height: 32px;
    background-color: #febd69;
    border: none;
    padding: 0 12px;
    cursor: pointer;
}

/* Full view dynamic height calculation */
.content-area {
    min-height: calc(100vh - 120px);
    padding: 30px;
    background-color: #f3f3f3;
}

.box {
    height: 100px;
    width: 100px;
    margin: 10px;
    display: inline-block;
    border: 2px solid black;
    text-align: center;
    line-height: 100px;
    font-weight: bold;
    border-radius: 6px;
}

/* Opacity with RGBA colors */
.box1 {
    background-color: rgba(255, 0, 0, 0.5); /* Semi-transparent Red */
}

.box2 {
    background-color: rgba(0, 128, 0, 0.5); /* Semi-transparent Green */
}

.box3 {
    background-color: rgba(0, 0, 255, 0.5); /* Semi-transparent Blue */
}

footer {
    height: 60px;
    background-color: #232f3e;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

---

<br/>

## 🎯 Practice Set E — Positioning, Stacking & Flexbox

### Problem E1: Fixed Badge with `z-index` and Background Image
> **Task:** Create a `"Love Nature"` badge placed at the right side of the screen that remains fixed in place while scrolling, uses a background image with `cover` sizing, and stays on top using `z-index: 999`.

```css
.fixed-box {
    height: 150px;
    width: 150px;
    background-image: url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=300');
    background-size: cover;
    background-position: center;
    background-color: #2e7d32;
    
    color: white;
    font-weight: bold;
    text-shadow: 1px 1px 4px black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;

    /* Stays pinned to the right edge during scroll */
    position: fixed;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 999;
}
```

---

### Problem E2: Evenly Spaced Flexbox Navigation
> **Task:** Create a navigation bar with 4 list items inside a `<ul>`. Use Flexbox to align them horizontally with equal spacing.

```html
<nav class="navbar">
    <ul class="nav-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact Us</a></li>
    </ul>
</nav>
```
```css
.navbar {
    background-color: #333;
    padding: 15px 0;
}

.nav-list {
    display: flex;
    justify-content: space-evenly; /* Equal gaps */
    align-items: center;
    list-style: none;
}

.nav-list li a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    padding: 8px 16px;
    transition: background-color 0.3s;
}

.nav-list li a:hover {
    background-color: #555;
    border-radius: 4px;
}
```

---

### Problem E3: Perfect Centering with Flexbox
> **Task:** Center an inner div perfectly both horizontally and vertically inside an outer container div.

```css
.outer-container {
    height: 400px;
    width: 500px;
    background-color: #2b3a42;
    margin: 40px auto;
    
    /* Ultimate Centering Recipe */
    display: flex;
    justify-content: center; /* Center horizontally along main axis */
    align-items: center;     /* Center vertically along cross axis */
}

.inner-box {
    height: 120px;
    width: 150px;
    background-color: #4fba6f;
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
}
```

---

### Problem E4: Priority Battle — `align-items` vs `align-self`
> **Question:** Which property has higher priority — `align-items` or `align-self`?

#### 💡 The Answer:
* **`align-self` has the HIGHER priority!**
* **Reason:** `align-items` is defined on the **parent flex container** to set default alignment for all children, whereas `align-self` is set directly on an **individual flex item** to override the container rule.

```css
/* Parent sets default alignment to top */
.flex-container {
    display: flex;
    height: 250px;
    align-items: flex-start;
}

/* Child overrides container and aligns to center! */
.custom-child {
    align-self: center; /* WINS over container's align-items! */
}
```

---

<br/>

## 🎯 Practice Set F — Responsive Media Queries

### Problem F1: 4-Stage Adaptive Color-Changing Box
> **Task:** Write media queries to change a box's background color dynamically based on viewport width:
> - **$< 300\text{px}$:** 🟩 Green
> - **$300\text{px} - 400\text{px}$:** 🌸 Pink
> - **$400\text{px} - 600\text{px}$:** 🟥 Red
> - **$> 600\text{px}$:** 🟦 Blue

```html
<div class="responsive-box">Responsive Box</div>
```

```css
/* 1. Base Default (< 300px) */
.responsive-box {
    width: 150px;
    height: 150px;
    background-color: green; /* Green for smallest screens */
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    transition: background-color 0.3s ease;
}

/* 2. Between 300px and 400px (Pink) */
@media (min-width: 300px) and (max-width: 400px) {
    .responsive-box {
        background-color: pink;
        color: #333;
    }
}

/* 3. Between 401px and 600px (Red) */
@media (min-width: 401px) and (max-width: 600px) {
    .responsive-box {
        background-color: red;
        color: white;
    }
}

/* 4. Above 600px (Blue) */
@media (min-width: 601px) {
    .responsive-box {
        background-color: blue;
        color: white;
    }
}
```

---

<br/>

## 🎯 Practice Set G — CSS Keyframe Animations

### Problem G1: Infinite Animated Spinner / Loader
> **Task:** Create a modern, spinning CSS loader in 3 simple steps:
> 1. Create a circular div with a faint border and one colored thick border on the top edge.
> 2. Create a `@keyframes` animation rotating from $0^\circ$ to $360^\circ$.
> 3. Apply the animation with infinite duration.

```html
<div class="loader"></div>
```

```css
/* Step 1: Circular Box with Accent Top Border */
.loader {
    width: 70px;
    height: 70px;
    border: 8px solid rgba(255, 255, 255, 0.2); /* Faint base ring */
    border-top: 8px solid #38bdf8;             /* Bright blue active edge */
    border-radius: 50%;                         /* Perfect circle */

    /* Step 3: Apply infinite smooth animation */
    animation: spin 1s linear infinite;
}

/* Step 2: 360-Degree Continuous Rotation */
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
```

---

<br/>

## 💬 Quote of the Practice Set

<div align="center">

> *"Code is like humor. When you have to explain it, it’s bad. Practice until your CSS is so clean it speaks for itself."*  
> — **Keep building & keep leveling up!** 🚀✨

</div>

---

<br/>

## 💖 Author & Credits

<div align="center">

Made with ❤️ by Author: **Adesh Srivastava (Tanmay)** ([@tanmay119-pera](https://github.com/tanmay119-pera))

<br/>

<!-- ==================== FOOTER BADGES / BANNERS ==================== -->
[![GitHub Profile](https://img.shields.io/badge/GitHub-tanmay119--pera-black?style=for-the-badge&logo=github)](https://github.com/tanmay119-pera)
[![HTML Tutorial](https://img.shields.io/badge/HTML-Repository-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://github.com/tanmay119-pera/HTML-PROGRAMMING.git)
[![VS Code](https://img.shields.io/badge/Built_With-VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![Antigravity](https://img.shields.io/badge/Google-Antigravity-4285F4?style=for-the-badge&logo=google&logoColor=white)](#)

<br/>

⭐ **If you enjoyed these Practice Sets, please drop a Star on GitHub!** ⭐

</div>
