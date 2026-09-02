<div align="center">

# 🚀 Cascading Style Sheets (CSS) - CHAPTER 4: ADVANCED CSS MASTERY
### *A Visual, Masterclass Guide to Transitions, Transforms, Keyframe Animations, 3D Perspective & Modern Visual Effects*

<br/>

<!-- ==================== BADGES / BANNERS ==================== -->
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://github.com/tanmay119-pera/HTML-PROGRAMMING.git)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![VS Code](https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![Antigravity](https://img.shields.io/badge/Google_Antigravity-4285F4?style=for-the-badge&logo=google&logoColor=white)](#)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tanmay119-pera)

<br/>

[![Advanced Level](https://img.shields.io/badge/Level-Advanced_CSS-red?style=flat-square)](#)
[![Chapter](https://img.shields.io/badge/Chapter-4_Advanced_Styles-purple?style=flat-square)](#)
[![Author](https://img.shields.io/badge/Author-Adesh_Srivastava-orange?style=flat-square)](https://github.com/tanmay119-pera)

<p align="center">
  <b>Stand out from the crowd. Transform static interfaces into dynamic, cinematic, interactive web experiences.</b>
</p>

---

</div>

<br/>

> [!IMPORTANT]
> ### 🛑 Prerequisite Checklist
> Before diving into Advanced CSS, ensure you have completed the earlier chapters:
> - 📄 **HTML Foundations Repo:** [https://github.com/tanmay119-pera/HTML-PROGRAMMING.git](https://github.com/tanmay119-pera/HTML-PROGRAMMING.git)
> - 🎨 **CSS Chapter 1:** Selectors, Color Formats (HEX/RGB/HSL), and Text Formatting.
> - 📦 **CSS Chapter 2:** The CSS Box Model, Display, Units, and Positioning.
> - 🤸‍♂️ **CSS Chapter 3:** Flexbox Layouts and Responsive Media Queries.
>
> In this chapter, you will master **Transitions, Transforms, Keyframe Animations, Pseudo-Elements, Custom Properties, Clip-Paths, Filters, and 3D Perspective!** 🚀

<br/>

---

## 📑 Table of Contents
1. [🪄 CSS Transitions](#-css-transitions)
2. [🔄 CSS Transforms (2D & 3D)](#-css-transforms-2d--3d)
3. [🎬 CSS Animations & Keyframes](#-css-animations--keyframes)
4. [👻 Pseudo-Elements](#-pseudo-elements)
5. [📦 CSS Custom Properties (Variables)](#-css-custom-properties-variables)
6. [✂️ CSS Clip-Path](#️-css-clip-path)
7. [🎭 CSS Masking](#-css-masking)
8. [🎨 CSS Filters & Visual FX](#-css-filters--visual-fx)
9. [🧊 3D Space, Perspective & Card Flipping](#-3d-space-perspective--card-flipping)
10. [💻 Project Code Structure](#-project-code-structure)
11. [🚀 How to Run & Practice](#-how-to-run--practice)
12. [💬 Quote of the Chapter](#-quote-of-the-chapter)
13. [💖 Author & Credits](#-author--credits)

---

<br/>

## 🪄 CSS Transitions

**Transitions** allow you to change CSS property values smoothly over a specified duration rather than having changes take effect instantly.

```
       [ Initial State ]  ────── (Duration + Timing Function) ──────>  [ Hover / Active State ]
        (e.g., color: red)                                               (e.g., color: blue)
```

### 🧠 The 4 Core Transition Sub-Properties

| Property | Description | Common Values |
| :--- | :--- | :--- |
| **`transition-property`** | Names the CSS properties to animate | `all`, `background-color`, `transform`, `opacity` |
| **`transition-duration`** | How long the transition takes | `0.3s`, `500ms`, `2s` |
| **`transition-timing-function`** | The speed curve / acceleration | `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, `cubic-bezier(...)` |
| **`transition-delay`** | Waiting time before animation begins | `0s` (Immediate), `0.5s` |

### ⚡ Shorthand Syntax
```css
/* transition: [property] [duration] [timing-function] [delay]; */

div {
    width: 100px;
    height: 100px;
    background-color: red;
    
    /* Smoothly transition background-color and transform over 0.4 seconds */
    transition: background-color 0.4s ease-in-out, transform 0.4s ease-in-out;
}

/* Triggered on Mouse Hover */
div:hover {
    background-color: blue;
    transform: scale(1.1);
}

/* Triggered on Click / Press */
div:active {
    background-color: green;
    transform: scale(0.95);
}
```

---

<br/>

## 🔄 CSS Transforms (2D & 3D)

The `transform` property modifies the coordinate space of the CSS visual formatting model, allowing you to move, rotate, scale, and skew elements.

```
       +-------------------------------------------------------------+
       |                     CSS TRANSFORM METHODS                   |
       +-------------------------------------------------------------+
        /              |                 |               \          \
    rotate()        scale()          translate()        skew()     matrix()
  (Spin around)  (Resize element)   (Move X & Y)     (Slant angle) (2D Matrix)
```

### 1. 2D Transformation Functions
```css
div {
    transform: rotate(45deg);            /* Rotates 45 degrees clockwise */
    transform: scale(1.5);               /* Grows by 150% in width & height */
    transform: scaleX(2) scaleY(0.5);   /* Non-uniform scaling */
    transform: translate(50px, 100px);   /* Moves 50px right (X) and 100px down (Y) */
    transform: skew(30deg, 10deg);       /* Skews 30deg horizontally, 10deg vertically */
}
```

### 2. `transform-origin`
Specifies the anchor point around which transformations occur:
```css
div {
    transform-origin: center;       /* Default (50% 50%) */
    transform-origin: top left;     /* Rotates around top-left corner */
    transform-origin: 20% 80%;      /* Custom coordinate anchor */
}
```

### 3. 3D Transformations
Transforms elements along the 3rd axis (**Z-Axis** = depth towards or away from the viewer):
```css
div {
    transform: rotateX(45deg);    /* Tilts backward / forward */
    transform: rotateY(45deg);    /* Spins left / right like a revolving door */
    transform: rotateZ(45deg);    /* Standard 2D circular rotation */
    transform: translateZ(100px); /* Brings element 100px closer to the viewer */
    transform: scaleZ(1.5);       /* Scales along Z-depth */
}
```

---

<br/>

## 🎬 CSS Animations & Keyframes

While transitions require a user trigger (like `:hover`), **CSS Animations** can run automatically, loop infinitely, reverse direction, and follow intricate multi-step timelines using `@keyframes`.

```
  0% (from)                  50% (midpoint)                100% (to)
 [ Red Box ]  ──────────>  [ Yellow Box / Scaled ]  ──────────>  [ Green Box ]
```

### 1. Defining `@keyframes`
```css
/* Simple Two-Step Animation */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to   { opacity: 1; transform: translateY(0); }
}

/* Multi-Step Percentage Animation */
@keyframes colorPulse {
    0% {
        background-color: red;
        transform: scale(1);
    }
    50% {
        background-color: yellow;
        transform: scale(1.15) rotate(10deg);
    }
    100% {
        background-color: green;
        transform: scale(1);
    }
}
```

---

### 2. Applying the Animation
```css
/* Longhand Properties */
div {
    animation-name: colorPulse;
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: infinite; /* or specific count: 3 */
    animation-direction: alternate;      /* normal | reverse | alternate | alternate-reverse */
    animation-fill-mode: forwards;       /* retains final keyframe styles */
}

/* Shorthand (Best Practice) */
div {
    /* animation: [name] [duration] [timing-function] [delay] [count] [direction] [fill-mode]; */
    animation: colorPulse 3s ease-in-out 0s infinite alternate forwards;
}
```

---

<br/>

## 👻 Pseudo-Elements

**Pseudo-elements** allow you to style specific fragments of an element or inject cosmetic decorative elements directly from CSS without adding extra HTML tags.

```
       +-------------------------------------------------------------+
       |                     CSS PSEUDO-ELEMENTS                     |
       +-------------------------------------------------------------+
        /            |                |             \               \
    ::before      ::after       ::first-letter   ::selection   ::placeholder
  (Inject first) (Inject last)   (Drop-cap font) (Text highlight) (Input hint)
```

```css
/* Injects cosmetic content BEFORE the element's HTML */
div::before {
    content: "🚀 ";
    font-size: 18px;
}

/* Injects cosmetic content AFTER the element's HTML */
div::after {
    content: " ✨";
    color: gold;
}

/* Styles only the first letter (Drop-Caps) */
p::first-letter {
    font-size: 2.5rem;
    font-weight: bold;
    color: #e74c3c;
    float: left;
    margin-right: 6px;
}

/* Styles only the first rendered line of text */
p::first-line {
    font-weight: bold;
    color: #2c3e50;
}

/* Custom user text selection color */
::selection {
    background-color: #f1c40f;
    color: #000;
}

/* Custom styling for input placeholder text */
input::placeholder {
    color: #95a5a6;
    font-style: italic;
}
```

---

<br/>

## 📦 CSS Custom Properties (Variables)

CSS Variables allow you to store values (colors, sizing, spacing) in one central place and reuse them across your entire stylesheet.

```css
/* 1. Global Scope (Accessible everywhere via :root) */
:root {
    --primary-color: #3498db;
    --accent-color: #e74c3c;
    --card-radius: 12px;
    --spacing-lg: 24px;
}

/* 2. Accessing Variables with var() */
.card {
    background-color: var(--primary-color);
    border-radius: var(--card-radius);
    padding: var(--spacing-lg);
}

/* 3. Fallback Values */
.badge {
    background-color: var(--custom-badge-color, #7f8c8d); /* Uses #7f8c8d if variable is undefined */
}
```

> [!TIP]
> **Why CSS Variables are Superior to Preprocessor Variables:**
> 1. They are live in the DOM and can be updated instantly with JavaScript.
> 2. They allow effortless **Dark Mode / Light Mode** theme toggling with zero duplicate code!

---

<br/>

## ✂️ CSS Clip-Path

The `clip-path` property cuts an element into custom geometric shapes by specifying a visible clipping region. Everything outside the region becomes transparent.

```
       Circle                  Polygon (Diamond)             Inset (Rounded)
     ╭──────╮                     ╱╲                     ╭──────────────╮
    │   ●    │                   ╱  ╲                    │              │
     ╰──────╯                   ╰────╯                   ╰──────────────╯
```

```css
/* 1. Perfect Circle */
.clip-circle {
    clip-path: circle(50% at 50% 50%); /* radius at (cx, cy) */
}

/* 2. Ellipse (Horizontal Oval) */
.clip-ellipse {
    clip-path: ellipse(50% 25% at 50% 50%);
}

/* 3. Diamond Polygon */
.clip-diamond {
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

/* 4. Rounded Inset Rectangle */
.clip-inset {
    clip-path: inset(10% 15% 10% 15% round 12px);
}

/* 5. Custom SVG Vector Path */
.clip-custom-path {
    clip-path: path('M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80');
}
```

---

<br/>

## 🎭 CSS Masking

While `clip-path` cuts hard geometric boundaries, **CSS Masking** uses an image or gradient's alpha channel to create smooth soft-edge transparency and fading.

```css
/* 1. Mask with an Image */
.masked-image {
    mask-image: url('mask.png');
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: cover;
}

/* 2. Soft Gradient Fade from Left to Right */
.fade-banner {
    mask-image: linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
    mask-repeat: no-repeat;
    mask-size: cover;
}
```

---

<br/>

## 🎨 CSS Filters & Visual FX

Apply graphic and Photoshop-like post-processing filters directly in the browser with hardware acceleration:

```css
.filtered-element {
    filter: blur(5px);                        /* Gaussian blur */
    filter: brightness(130%);                 /* 130% brightness */
    filter: contrast(150%);                   /* 150% contrast */
    filter: grayscale(100%);                  /* Black and white */
    filter: hue-rotate(90deg);                /* Rotates color wheel by 90 deg */
    filter: invert(100%);                     /* Inverts all colors */
    filter: opacity(70%);                     /* 70% opacity */
    filter: saturate(200%);                   /* Hyper-saturated colors */
    filter: sepia(80%);                       /* Retro warm sepia tone */
    filter: drop-shadow(4px 4px 8px #000);   /* Contour-aware drop shadow */
}

/* Compound Filter Pipeline */
.card-hero {
    filter: brightness(110%) contrast(120%) drop-shadow(0 10px 15px rgba(0,0,0,0.3));
}
```

---

<br/>

## 🧊 3D Space, Perspective & Card Flipping

By giving a parent container `perspective`, you unlock true 3D coordinate space for child elements.

```
       Viewer's Eye  ──(500px Distance)──>  [ 3D Object Rotating in Z-Space ]
```

### 1. Setting Up 3D Space
```css
.scene-container {
    perspective: 800px;           /* Distance of viewer from z=0 plane */
    perspective-origin: center;   /* Viewing angle */
}

.object-3d {
    transform-style: preserve-3d; /* Children live in real 3D space, not flattened */
}
```

---

### 2. Interactive 3D Flipping Card Component
```html
<div class="card-container">
    <div class="card-inner">
        <div class="card-front">Front Content</div>
        <div class="card-back">Back Content</div>
    </div>
</div>
```

```css
.card-container {
    perspective: 1000px;
    width: 200px;
    height: 280px;
}

.card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Flip on Hover */
.card-container:hover .card-inner {
    transform: rotateY(180deg);
}

.card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden; /* Hides back face when rotated away */
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-front {
    background-color: #3498db;
    color: white;
}

.card-back {
    background-color: #e74c3c;
    color: white;
    transform: rotateY(180deg); /* Pre-rotated back side */
}
```

---

<br/>

## 💻 Project Code Structure

```
css-chapter-4-advanced/
│
├── index.html     # Semantic HTML5 playground for testing advanced effects
├── style.css      # Transitions, transforms, keyframes, variables & 3D styling
└── README.md      # Chapter 4 visual documentation & complete cheat sheet
```

---

<br/>

## 🚀 How to Run & Practice

1. Open this directory in **Visual Studio Code**:
   ```bash
   code .
   ```
2. Launch `index.html` using the **Live Server** extension.
3. Hover and click on boxes to inspect transitions, scale animations, and 3D rotations in real time!
4. Try combining multiple filters or creating custom `@keyframes` paths!

---

<br/>

## 💬 Quote of the Chapter

<div align="center">

> *"Good design is obvious. Great design is transparent. Master transitions, animations, and depth, and your websites will feel alive."*  
> — **You are now an Advanced CSS Developer!** 🚀✨

</div>

---

<br/>

## 💖 Author & Credits

<div align="center">

Made with ❤️ by Author: **Adesh Srivastava** ([@tanmay-119pera](https://github.com/tanmay119-pera))

<br/>

<!-- ==================== FOOTER BADGES / BANNERS ==================== -->
[![GitHub Profile](https://img.shields.io/badge/GitHub-tanmay119--pera-black?style=for-the-badge&logo=github)](https://github.com/tanmay119-pera)
[![HTML Tutorial](https://img.shields.io/badge/HTML-Repository-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://github.com/tanmay119-pera/HTML-PROGRAMMING.git)
[![VS Code](https://img.shields.io/badge/Built_With-VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![Antigravity](https://img.shields.io/badge/Google-Antigravity-4285F4?style=for-the-badge&logo=google&logoColor=white)](#)

<br/>

⭐ **If you enjoyed this Complete CSS Masterclass Series, don't forget to star the repository on GitHub!** ⭐

</div>
