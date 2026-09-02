<div align="center">

# 📦 Cascading Style Sheets (CSS) - Chapter 2: The CSS Box Model & Layouts
### *A Visual, Comprehensive Guide to the Box Model, Positioning, Display Modes & Responsive Units*

<br/>

<!-- ==================== BADGES / BANNERS ==================== -->
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://github.com/tanmay119-pera/HTML-PROGRAMMING.git)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![VS Code](https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![Antigravity](https://img.shields.io/badge/Google_Antigravity-4285F4?style=for-the-badge&logo=google&logoColor=white)](#)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tanmay119-pera)

<br/>

[![Beginner to Intermediate](https://img.shields.io/badge/Level-Beginner_to_Intermediate-blue?style=flat-square)](#)
[![Chapter](https://img.shields.io/badge/Chapter-2_Box_Model-purple?style=flat-square)](#)
[![Author](https://img.shields.io/badge/Author-Adesh_Srivastava-orange?style=flat-square)](https://github.com/tanmay119-pera)

<p align="center">
  <b>Master how web elements take up space, align, stack, and position themselves on modern web pages.</b>
</p>

---

</div>

<br/>

> [!IMPORTANT]
> ### 🛑 Prerequisite Checklist
> Before diving into Chapter 2, make sure you understand basic HTML tags and CSS Chapter 1 (Selectors, Colors & Typography):
> - 📄 **HTML Foundations Repo:** [https://github.com/tanmay119-pera/HTML-PROGRAMMING.git](https://github.com/tanmay119-pera/HTML-PROGRAMMING.git)
> - 🎨 **CSS Chapter 1:** Selectors, Color Formats (HEX/RGB/HSL), and Text Formatting.
>
> In this chapter, you will master the **core layout engine** of CSS — the **Box Model**! 🚀

<br/>

---

## 📑 Table of Contents
1. [📦 The CSS Box Model](#-the-css-box-model)
   - [Visual Anatomy](#-visual-anatomy-of-a-css-box)
   - [Content, Height & Width](#1-content-height--width)
   - [Padding (Inner Spacing)](#2-padding-inner-spacing)
   - [Border & Border Radius](#3-border--border-radius)
   - [Margin (Outer Spacing)](#4-margin-outer-spacing)
2. [🖥️ The `display` Property](#️-the-display-property)
   - [`inline` vs `block` vs `inline-block` vs `none`](#1-display-modes-compared)
   - [`visibility: hidden` vs `display: none`](#2-visibility-property-vs-display-none)
3. [💧 Alpha Channel & Opacity (`rgba`)](#-alpha-channel--transparency-rgba)
4. [📐 Responsive & Relative Units (`%`, `em`, `rem`, `vh`, `vw`)](#-relative--responsive-units)
5. [📍 CSS Positioning (`position`)](#-css-positioning-position)
   - [`static`, `relative`, `absolute`, `fixed`, `sticky`](#positioning-modes-explained)
6. [🥞 Stacking Order & Layering (`z-index`)](#-stacking-order--layering-z-index)
7. [🖼️ Background Images & Sizing](#️-background-images--sizing)
8. [💻 Code Walkthrough](#-code-walkthrough)
9. [💬 Quote of the Chapter](#-quote-of-the-chapter)
10. [💖 Author & Credits](#-author--credits)

---

<br/>

## 📦 The CSS Box Model

In CSS, **everything is a box**! Every HTML element rendered on the screen generates a rectangular box based on the CSS Box Model rules.

### 🖼️ Visual Anatomy of a CSS Box

```
+-------------------------------------------------------------+
|                           MARGIN                            |
|  (Clears an area outside the border. Transparent space)     |
|   +-----------------------------------------------------+   |
|   |                       BORDER                        |   |
|   |  (A visible boundary line around padding & content) |   |
|   |   +---------------------------------------------+   |   |
|   |   |                   PADDING                   |   |   |
|   |   |  (Clears an area around the content. Inner) |   |   |
|   |   |   +-------------------------------------+   |   |   |
|   |   |   |               CONTENT               |   |   |   |
|   |   |   |  (Where your text, images & media   |   |   |   |
|   |   |   |   actually appear. Width x Height)  |   |   |   |
|   |   |   +-------------------------------------+   |   |   |
|   |   +---------------------------------------------+   |   |
|   +-----------------------------------------------------+   |
+-------------------------------------------------------------+
```

---

### 1. Content, Height & Width
* **`width`**: Defines the horizontal width of the content area.
* **`height`**: Defines the vertical height of the content area.

```css
div {
    width: 200px;
    height: 100px;
    background-color: lightblue;
}
```

---

### 2. Padding (Inner Spacing)
**Padding** creates space **inside** the element's border, pushing content inward away from the edges.

```css
/* Individual sides */
div {
    padding-top: 20px;
    padding-right: 40px;
    padding-bottom: 20px;
    padding-left: 40px;
}

/* Shorthand Formats */
div {
    padding: 20px;               /* All 4 sides: 20px */
    padding: 20px 40px;          /* [Top & Bottom]  [Left & Right] */
    padding: 10px 20px 30px;     /* [Top]  [Left & Right]  [Bottom] */
    padding: 10px 20px 30px 40px;/* Clockwise: [Top] [Right] [Bottom] [Left] (TRBL) */
}
```

> [!TIP]
> **Remember the Clockwise Rule (TRBL):**
> When specifying 4 values for padding or margin, think of a clock: **T**op $\rightarrow$ **R**ight $\rightarrow$ **B**ottom $\rightarrow$ **L**eft!

---

### 3. Border & Border Radius
**Border** wraps around the padding and content.

#### Detailed vs Shorthand Syntax:
```css
/* Longhand (Detailed) */
h1 {
    border-width: 2px;
    border-style: solid; /* solid | dashed | dotted | double | groove | none */
    border-color: black;
}

/* Shorthand (Best Practice) */
h1 {
    border: 2px solid black; /* [width] [style] [color] */
}
```

#### Rounded Corners & Circles with `border-radius`:
```css
/* Rounded rectangle corners */
h1 {
    border-radius: 10px;
}

/* Perfect Circle or Pill Shape */
.circle-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%; /* 50% on a square element creates a perfect circle! */
}
```

---

### 4. Margin (Outer Spacing)
**Margin** creates transparent breathing room **outside** the border, separating the element from neighboring elements.

```css
div {
    margin: 20px;                /* 20px outer margin on all 4 sides */
    margin: 20px auto;           /* 20px vertical margin, auto horizontal (Centers block element) */
    margin-top: 15px;
    margin-bottom: 30px;
}
```

> [!NOTE]
> **Browser Inspector Tip 🔍:**
> You can inspect any element's live Box Model dimensions by right-clicking it in your browser and choosing **Inspect** (or pressing `F12`). Look at the **Computed** tab to see the color-coded Margin, Border, Padding, and Content box!

---

<br/>

## 🖥️ The `display` Property

The `display` property specifies how an element behaves in the document flow and how it renders rectangular boxes.

### 1. Display Modes Compared

| Display Value | Takes Up Full Width? | Starts on New Line? | Respects `width` & `height`? | Common Default Tags |
| :--- | :---: | :---: | :---: | :--- |
| **`block`** | ✅ Yes ($100\%$ parent width) | ✅ Yes | ✅ Yes | `<div>`, `<h1>`-`<h6>`, `<p>`, `<section>` |
| **`inline`** | ❌ No (only content width) | ❌ No | ❌ No | `<span>`, `<a>`, `<strong>`, `<em>` |
| **`inline-block`** | ❌ No (flows inline with text) | ❌ No | ✅ **Yes!** (Can set custom width & height) | `<button>`, `<input>`, `<img>` |
| **`none`** | ❌ None (Completely removed) | ❌ N/A | ❌ N/A | Hidden elements |

```css
/* Turn an inline element into a block */
span {
    display: block;
    width: 200px;
}

/* Turn block elements into side-by-side boxes */
div {
    display: inline-block;
    width: 150px;
    height: 100px;
}
```

---

### 2. `visibility` Property vs `display: none`

| Property & Value | Visible on Screen? | Occupies Space in Layout? | Affects Surrounding Elements? |
| :--- | :---: | :---: | :--- |
| **`display: none;`** | ❌ No | ❌ **No** (Collapses space) | Yes (Surrounding elements shift to fill gap) |
| **`visibility: hidden;`** | ❌ No | ✅ **Yes** (Preserves blank space) | No (Page layout stays completely intact) |
| **`visibility: visible;`** | ✅ Yes | ✅ Yes | Default visible state |

---

<br/>

## 💧 Alpha Channel & Transparency (`rgba`)

The **Alpha Channel** controls the opacity (transparency) of a color without making child text elements faded.
* Value ranges from **`0.0`** (*100% Fully Transparent*) to **`1.0`** (*100% Fully Opaque*).

```css
/* Red with 50% transparency */
.box1 {
    background-color: rgba(255, 0, 0, 0.5);
}

/* Green with 100% opacity (solid) */
.box2 {
    background-color: rgba(0, 255, 0, 1.0);
}

/* Blue with 20% subtle tint */
.box3 {
    background-color: rgba(0, 0, 255, 0.2);
}

/* Yellow with 75% opacity */
.box4 {
    background-color: rgba(255, 255, 0, 0.75);
}
```

---

<br/>

## 📐 Relative & Responsive Units

Moving beyond static pixels (`px`) allows your web pages to adapt smoothly across mobile phones, tablets, and large desktop screens.

| Unit | Type | Relative To | Example & Calculation |
| :--- | :--- | :--- | :--- |
| **`%` (Percentage)** | Relative | Parent element's width or height | `width: 50%;` (Takes up half of parent's width) |
| **`em`** | Relative | Current element's (or parent's) `font-size` | If font is `16px`, `2em = 32px` |
| **`rem`** *(Root em)* | Relative | Root `<html>` element's `font-size` | If `<html>` is `16px`, `2rem = 32px` everywhere |
| **`vh`** | Viewport | $1\%$ of the browser window's total height | `height: 100vh;` (Fills the entire screen height) |
| **`vw`** | Viewport | $1\%$ of the browser window's total width | `width: 50vw;` (Fills half the screen width) |

```css
/* Viewport based hero section */
.hero-section {
    width: 100vw;
    height: 80vh;
}

/* Accessible typography with rem */
body {
    font-size: 16px; /* Base size */
}

h1 {
    font-size: 2.5rem; /* Exactly 40px (2.5 * 16px) across all nested components */
}
```

---

<br/>

## 📍 CSS Positioning (`position`)

The `position` property determines how an element is placed on the page and how offset properties (`top`, `right`, `bottom`, `left`) interact with it.

### Positioning Modes Explained

```
           +-------------------------------------------------------------+
           |                      CSS POSITION MODES                     |
           +-------------------------------------------------------------+
            /            |                 |               \            \
        static       relative          absolute          fixed        sticky
       (Normal)     (Offset from     (Relative to       (Locked to   (Scrolls then
                     normal spot)     nearest parent)    viewport)    sticks)
```

```css
/* 1. STATIC (Default document flow) */
#box-static {
    position: static; /* top, left, z-index have NO effect */
}

/* 2. RELATIVE (Offset relative to its own natural position) */
#box-relative {
    position: relative;
    top: 20px;  /* Shifts 20px down from where it would normally sit */
    left: 20px; /* Shifts 20px right from where it would normally sit */
}

/* 3. ABSOLUTE (Positioned relative to nearest ancestor with position != static) */
#box-absolute {
    position: absolute;
    top: 0;
    right: 0;   /* Glues element to the top-right corner of positioned container */
}

/* 4. FIXED (Locked relative to browser viewport - stays in place while scrolling) */
#navbar-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}

/* 5. STICKY (Hybrid: scrolls naturally until reaching a threshold, then sticks) */
#header-sticky {
    position: sticky;
    top: 0; /* Sticks to top once user scrolls down to it */
}
```

---

<br/>

## 🥞 Stacking Order & Layering (`z-index`)

The `z-index` property specifies the 3D stacking order along the Z-axis (depth towards/away from the viewer) when elements overlap.

```
       [ z-index: 3 ]  (Topmost Layer - In Front)
             │
       [ z-index: 2 ]  (Middle Layer)
             │
       [ z-index: 1 ]  (Bottom Layer)
             │
       [ z-index: -1]  (Behind Normal Flow Background)
```

> [!WARNING]
> **Important Rule for `z-index`:**
> `z-index` **only works** on elements that have a `position` value other than `static` (`relative`, `absolute`, `fixed`, or `sticky`)!

```css
#box1 {
    position: absolute;
    z-index: 2; /* Sits in front of box3 */
    background-color: lightgreen;
}

#box2 {
    position: absolute;
    z-index: 3; /* Highest z-index: appears in front of all other boxes */
    background-color: lightcoral;
}

#box3 {
    position: absolute;
    z-index: -1; /* Lowest z-index: pushed behind regular elements */
    background-color: lightgoldenrodyellow;
}
```

---

<br/>

## 🖼️ Background Images & Sizing

Set background images for any container using `background-image` and control image scaling with `background-size`.

```css
.card {
    background-image: url('image.jpg');
    width: 300px;
    height: 200px;
}
```

### `background-size` Comparison

| Value | Behavior | Aspect Ratio Preserved? | Will it Crop? | Best Used For |
| :--- | :--- | :---: | :---: | :--- |
| **`auto`** | Keeps image in its original natural dimensions | ✅ Yes | ❌ No (May repeat or clip) | Small icons or patterns |
| **`cover`** | Scales image to completely cover the container | ✅ Yes | ⚠️ Yes (Crops edges if needed) | Full-screen hero banners, card backgrounds |
| **`contain`** | Scales image so the whole image fits inside box | ✅ Yes | ❌ No (May leave letterboxing gaps) | Product photos, logos |
| **`150px 100px`** | Explicit custom width and height | ❌ No (Stretches) | ❌ No | Exact pixel sizing needs |

```css
/* Cover: Best for full backgrounds */
#box-cover {
    background-image: url('hero.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

/* Contain: Best for fitting logos without cropping */
#box-contain {
    background-image: url('logo.png');
    background-size: contain;
    background-repeat: no-repeat;
}
```

---

<br/>

## 💻 Code Walkthrough

### 📁 Project Structure
```
css-chapter-2-box-model/
│
├── index.html     # HTML5 document with structured boxes, headings, and buttons
├── style.css      # Comprehensive box model, position, unit, and background styles
└── README.md      # Chapter 2 reference and documentation
```

### 🏃 How to Run & Experiment
1. Open this chapter in **Visual Studio Code**.
2. Launch `index.html` with **Live Server** (or open in any browser).
3. Open your browser's Developer Tools (`Right click -> Inspect` or `F12`).
4. Inspect elements to view their padding, border, margin, and position in real time!

---

<br/>

## 💬 Quote of the Chapter

<div align="center">

> *"Understanding the Box Model is the moment you stop fighting CSS and start commanding it."*  
> — **Level up your layouts!** 📦✨

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

⭐ **If you found Chapter 2 helpful, don't forget to star the repository on GitHub!** ⭐

</div>
