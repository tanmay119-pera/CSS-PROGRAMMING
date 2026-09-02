<div align="center">

# 🎨 Cascading Style Sheets (CSS) - CHAPTER 1: FOUNDATION
### *A Beginner-Friendly, Complete Visual & Practical Guide to CSS*

<br/>

<!-- ==================== BADGES / BANNERS ==================== -->
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://github.com/tanmay119-pera/HTML-PROGRAMMING.git)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![VS Code](https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![Antigravity](https://img.shields.io/badge/Google_Antigravity-4285F4?style=for-the-badge&logo=google&logoColor=white)](#)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tanmay119-pera)

<br/>

[![Beginner Friendly](https://img.shields.io/badge/Level-Absolute_Beginner-green?style=flat-square)](#)
[![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=flat-square)](#)
[![Author](https://img.shields.io/badge/Author-Adesh_Srivastava-orange?style=flat-square)](https://github.com/tanmay119-pera)

<p align="center">
  <b>Transform plain HTML into visually stunning, colorful, and responsive web pages.</b>
</p>

---

</div>

<br/>

> [!IMPORTANT]
> ### 🛑 Prerequisite Notice: Learn HTML First!
> We have built a sample website to show you how **CSS** actually works behind the scenes.
> If you are completely new to web development and don't know how HTML works yet, please visit our **HTML Tutorial Series** first:
>
> 🔗 **Official HTML Repository:** [https://github.com/tanmay119-pera/HTML-PROGRAMMING.git](https://github.com/tanmay119-pera/HTML-PROGRAMMING.git)
>
> Once you understand basic HTML tags and structure, jump right back here to master styling with CSS! **#HappyCoding** 🚀

<br/>

---

## 📑 Table of Contents
1. [🌟 What is CSS?](#-what-is-css)
2. [📂 3 Ways to Apply CSS](#-3-ways-to-apply-css)
3. [🎯 CSS Selectors](#-css-selectors)
4. [🌈 Mastering Color Systems in CSS](#-mastering-color-systems-in-css)
   - [Practice Question & Solution](#-practice-question-1)
5. [🔤 Typography & Font Properties](#-typography--font-properties)
6. [📐 Text Formatting & Alignment](#-text-formatting--alignment)
7. [📏 CSS Units: Absolute vs Relative](#-css-units-pixels-vs-em)
8. [⚡ CSS Priority, Specificity & The Cascade](#-css-priority-specificity--the-cascade)
9. [💻 Project Code Structure](#-project-code-structure)
10. [🚀 How to Run & Practice](#-how-to-run--practice)
11. [💬 Inspiring Quote](#-quote-of-the-chapter)
12. [💖 Author & Acknowledgements](#-author--credits)

---

<br/>

## 🌟 What is CSS?

**CSS** stands for **C**ascading **S**tyle **S**heets.

While **HTML** provides the **skeleton and markup structure** of a web page, **CSS** acts as the **skin, clothes, colors, and layout**. It controls how HTML elements are presented on screens, paper, or other media.

```
       +-----------------------------------+
       |            Web Browser            |
       |                                   |
       |   [ HTML: Structure & Content ]   |
       |                 +                 |
       |   [ CSS: Colors, Fonts, Layout]   |
       |                 =                 |
       |   [ ✨ Beautiful Web Page ✨ ]    |
       +-----------------------------------+
```

### 🧠 Anatomy of a CSS Rule
```css
selector {
    property: value; /* Declaration */
}
```
* **Selector:** Points to the HTML element you want to style (e.g., `h1`, `p`, `.btn`).
* **Property:** The style attribute you want to change (e.g., `color`, `font-size`).
* **Value:** The setting you want to apply (e.g., `red`, `16px`).

---

<br/>

## 📂 3 Ways to Apply CSS

There are three ways of inserting styling into an HTML document:

| Method | Syntax / Location | Best Use Case | Recommendation |
| :--- | :--- | :--- | :--- |
| **1. External CSS** | `<link rel="stylesheet" href="style.css">` in `<head>` | Full websites & multi-page applications | 🏆 **Best Practice** (Clean, reusable, cacheable) |
| **2. Internal CSS** | Defined inside `<style>...</style>` tags in `<head>` | Single-page demos or email templates | ⚠️ Use only when necessary |
| **3. Inline CSS** | Written directly via `<h1 style="color: red;">` | Quick testing or one-off overrides | ❌ Avoid in production (Messy & hard to maintain) |

> [!TIP]
> **Why use an External Style Sheet?**
> Keeping CSS in a separate `.css` file keeps your HTML clean, allows multiple HTML files to share the same stylesheet, and enables browser caching for faster load times!

---

<br/>

## 🎯 CSS Selectors

Selectors are patterns used to select and style the HTML element(s) you target.

### 1️⃣ Core Selectors (Must-Know for Beginners)

#### 🔹 Element / Tag Selector
Targets elements directly by their HTML tag name:
```css
h1 {
    color: red; /* Styles all <h1> elements */
}

p {
    color: blue; /* Styles all <p> elements */
}

* {
    font-family: Arial, sans-serif; /* Universal selector: applies to ALL elements */
}
```

#### 🔹 Class Selector (`.`)
Targets elements with a specific `class` attribute. Classes can be used across multiple elements:
```html
<p class="my-class">Styled with a class</p>
```
```css
.my-class {
    color: blue;
    font-size: 14px;
}
```

#### 🔹 ID Selector (`#`)
Targets a single unique element with a specific `id` attribute:
```html
<h1 id="headingOne">Main Title</h1>
```
```css
#headingOne {
    color: yellow;
    font-size: 2em;
}
```

---

### 2️⃣ Advanced Selectors Preview *(For Upcoming Chapters)*
Here is a quick reference table of advanced selectors you will master as you progress:

| Selector Type | Example Syntax | What it Targets |
| :--- | :--- | :--- |
| **Attribute** | `input[type="text"]` | Targets `<input>` elements having `type="text"` |
| **Pseudo-class** | `button:hover` | Targets button only when the mouse hovers over it |
| **Pseudo-element** | `p::before` | Inserts cosmetic content before the `<p>` content |
| **Grouping** | `h1, h2, h3` | Applies the same styles to `<h1>`, `<h2>`, and `<h3>` simultaneously |
| **Descendant** | `div p` | Targets all `<p>` tags located anywhere inside a `<div>` |
| **Child** | `div > p` | Targets all `<p>` tags that are **direct** children of a `<div>` |
| **Adjacent Sibling**| `h1 + p` | Targets the first `<p>` placed immediately after `<h1>` |
| **General Sibling** | `h1 ~ p` | Targets all `<p>` siblings that share the same parent after `<h1>` |

---

<br/>

## 🌈 Mastering Color Systems in CSS

CSS provides four primary ways to specify color values:

```
                  +-----------------------------------+
                  |        CSS Color Systems          |
                  +-----------------------------------+
                   /         |             |        \
             Color Names    HEX           RGB       HSL
             "red"        #FF5733    rgb(255,0,0)  hsl(0,100%,50%)
```

### 1. Named Colors
Simple keywords like `red`, `blue`, `green`, `lightblue`, `lightgreen`.
```css
h3 {
    color: green;
}
body {
    background-color: lightblue;
}
```

### 2. Hexadecimal Values (`#RRGGBB`)
Hexadecimal notation uses a 6-digit hex code representing Red, Green, and Blue channels from `00` (no intensity) to `FF` (full intensity / 255):
```css
h2 {
    color: #FF5733; /* Vibrant Coral-Red */
}
```

### 3. RGB System (`rgb(red, green, blue)`)
Specifies color by mixing Red, Green, and Blue channels with numbers from `0` to `255`:
```css
h4 {
    color: rgb(191, 131, 138); /* Muted Dusty Rose */
}
```

### 4. HSL System (`hsl(hue, saturation, lightness)`)
Based on human visual perception:
* **Hue ($0^{\circ}$ to $360^{\circ}$):** Position on the color wheel ($0^{\circ}$ = Red, $120^{\circ}$ = Green, $240^{\circ}$ = Blue).
* **Saturation ($0\%$ to $100\%$):** Color purity / intensity ($0\%$ = grey, $100\%$ = vibrant color).
* **Lightness ($0\%$ to $100\%$):** Brightness ($0\%$ = black, $50\%$ = normal, $100\%$ = white).
```css
h5 {
    color: hsl(240, 100%, 50%); /* Pure Blue */
}
```

---

### 🧪 Practice Question 1
> **Question:** How do you make a **Yellow** color using Hexadecimal, RGB, and HSL color systems?

#### 💡 Solution:
1. **Hexadecimal:** `#FFFF00`
   * Red (`FF`), Green (`FF`), Blue (`00`). Mixing full Red + Green creates Yellow!
2. **RGB:** `rgb(255, 255, 0)`
   * Red ($255$), Green ($255$), Blue ($0$).
3. **HSL:** `hsl(60, 100%, 50%)`
   * Hue at $60^{\circ}$ (between Red $0^{\circ}$ and Green $120^{\circ}$), Saturation $100\%$, Lightness $50\%$.

---

<br/>

## 🔤 Typography & Font Properties

### 1. Font Family Categories
CSS defines 5 universal generic font families:

| Generic Family | Visual Characteristics | Popular Examples | Sample CSS |
| :--- | :--- | :--- | :--- |
| **Serif** | Small flourishes/strokes at the end of letters; traditional & formal. | Times New Roman, Georgia, Garamond | `font-family: "Times New Roman", Times, serif;` |
| **Sans-Serif** | Clean, modern lines without decorative strokes; great for digital screens. | Arial, Helvetica, Verdana | `font-family: Arial, Helvetica, sans-serif;` |
| **Monospace** | Every letter occupies equal horizontal width; ideal for code. | Courier New, Consolas, Monaco | `font-family: "Courier New", Courier, monospace;` |
| **Cursive** | Flowing, handwritten, elegant aesthetic. | Brush Script MT, Pacifico, Great Vibes | `font-family: "Brush Script MT", cursive;` |
| **Fantasy** | Decorative, playful, and stylized. | Papyrus, Impact, Jokerman | `font-family: "Papyrus", fantasy;` |

### 2. Font Weight (`font-weight`)
Controls how thin or thick characters appear:
* **Keywords:** `normal`, `bold`, `bolder`, `lighter`
* **Numeric Scale:** `100` (Thin) $\rightarrow$ `400` (Normal) $\rightarrow$ `700` (Bold) $\rightarrow$ `900` (Black/Heavy)
```css
p {
    font-weight: bold; /* Thicker, emphasized text */
}
```

### 3. Line Height (`line-height`)
Sets vertical space between lines of text to ensure optimal readability:
```css
p {
    line-height: 1.5; /* Recommended unitless multiplier (1.5x font size) */
}
```

---

<br/>

## 📐 Text Formatting & Alignment

### 1. Text Alignment (`text-align`)
* `left`: Aligns text to the left margin (default in LTR languages).
* `right`: Aligns text to the right margin.
* `center`: Centers text horizontally.
* `justify`: Stretches lines so that every line has equal width across left & right margins.

```css
p {
    text-align: justify;
}
```

### 2. Text Decoration (`text-decoration`)
Adds decorative accents to text:
```css
.underline   { text-decoration: underline; }
.overline    { text-decoration: overline; }
.strike      { text-decoration: line-through; }
.plain       { text-decoration: none; } /* Removes link underlines */
```

### 3. Text Transform (`text-transform`)
Controls letter casing without changing the HTML source text:
* `uppercase`: converts all letters to capital (`HELLO WORLD`).
* `lowercase`: converts all letters to small (`hello world`).
* `capitalize`: capitalizes the first letter of each word (`Hello World`).
* `none`: leaves original casing as written.

### 4. Text Indentation (`text-indent`)
Indents the very first line of a paragraph:
```css
p {
    text-indent: 50px;  /* Fixed 50px indentation */
    /* text-indent: 2em;   Relative indentation */
    /* text-indent: -20px; Hanging indentation */
}
```

---

<br/>

## 📏 CSS Units: Pixels vs Em

Understanding units is vital for responsive web design:

| Unit | Type | Definition & Behavior | Best Used For |
| :--- | :--- | :--- | :--- |
| **`px` (Pixels)** | **Absolute** | Fixed measurement (1px = 1 screen dot). Does not change when parent or viewport resizes. | Borders, precise shadows, fixed icons |
| **`em`** | **Relative** | Scales relative to the `font-size` of its **parent element** (e.g., `2em` = 2x parent font size). | Scalable components, buttons, typography |
| **`%`** | **Relative** | Scales relative to parent's dimension (e.g., `width: 50%`). | Flexible layouts, fluid widths |

```css
p {
    font-size: 16px; /* Absolute size */
}

#headingOne {
    font-size: 2em;  /* Scales to 2x parent's font size (32px if parent is 16px) */
}
```

---

<br/>

## ⚡ CSS Priority, Specificity & The Cascade

When multiple rules target the same element, CSS follows strict **Specificity and Cascading** rules to determine which style wins.

```
       +-------------------------------------------------------+
       |             SPECIFICITY HIERARCHY (HIGHEST TO LOWEST) |
       +-------------------------------------------------------+
       |  1. Inline Styles      (`style="..."`)                |
       |  2. ID Selectors       (`#headingOne`)                |
       |  3. Class Selectors    (`.my-class`, pseudo-classes)  |
       |  4. Element Selectors  (`h1`, `p`, pseudo-elements)   |
       |  5. Universal Selector (`*`)                          |
       +-------------------------------------------------------+
```

### 🏆 Cascade Tie-Breaking Rules
1. **Specificity:** The more specific selector always wins (e.g., `#id` beats `.class`, and `.class` beats `tag`).
2. **Order of Appearance:** If two selectors have equal specificity, the rule defined **last** in the stylesheet takes precedence.
3. **Inheritance:** Child elements inherit certain styles (like `font-family` and `color`) from parent elements unless explicitly overridden.

---

<br/>

## 💻 Project Code Structure

```
css-beginner-tutorial/
│
├── index.html     # Semantic HTML5 sample document
├── style.css      # Well-commented, modular CSS stylesheet
└── README.md      # Comprehensive beginner guide & documentation
```

---

<br/>

## 🚀 How to Run & Practice

1. **Clone or Download** the repository:
   ```bash
   git clone https://github.com/tanmay119-pera/CSS-PROGRAMMING.git
   ```
2. **Open in Visual Studio Code**:
   ```bash
   code .
   ```
3. **Run using Live Server** or double-click `index.html` to view it in your browser (Google Chrome, Firefox, Safari, or Edge).
4. **Experiment**: Change colors, edit font families, test text alignment, and inspect elements using Developer Tools (`F12` or `Right Click > Inspect`).

---

<br/>

## 💬 Quote of the Chapter

<div align="center">

> *"Websites without CSS are like paintings without color. With CSS, you hold the brush to design the modern web."*  
> — **Happy Coding Journey!** 🎨✨

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

⭐ **If you found this repository helpful, don't forget to star it on GitHub!** ⭐

</div>
