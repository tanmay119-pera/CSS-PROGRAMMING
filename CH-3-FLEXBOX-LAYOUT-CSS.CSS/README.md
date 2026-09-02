<div align="center">

# 🤸‍♂️ Cascading Style Sheets (CSS) - CHAPTER 3: FLEXBOX LAYOUT & RESPONSIVE DESIGN
### *A Visual, Masterclass Guide to 1D Layouts, Dynamic Alignment, Flex Items & Media Queries*

<br/>

<!-- ==================== BADGES / BANNERS ==================== -->
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://github.com/tanmay119-pera/HTML-PROGRAMMING.git)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![VS Code](https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![Antigravity](https://img.shields.io/badge/Google_Antigravity-4285F4?style=for-the-badge&logo=google&logoColor=white)](#)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tanmay119-pera)

<br/>

[![Beginner to Intermediate](https://img.shields.io/badge/Level-Intermediate-blue?style=flat-square)](#)
[![Chapter](https://img.shields.io/badge/Chapter-3_Flexbox-purple?style=flat-square)](#)
[![Author](https://img.shields.io/badge/Author-Adesh_Srivastava-orange?style=flat-square)](https://github.com/tanmay119-pera)

<p align="center">
  <b>Say goodbye to hacky floats and clearing fixes. Build seamless, modern, responsive web layouts with CSS Flexbox.</b>
</p>

---

</div>

<br/>

> [!IMPORTANT]
> ### 🛑 Prerequisite Checklist
> Before mastering Flexbox, ensure you are comfortable with earlier chapters:
> - 📄 **HTML Foundations Repo:** [https://github.com/tanmay119-pera/HTML-PROGRAMMING.git](https://github.com/tanmay119-pera/HTML-PROGRAMMING.git)
> - 🎨 **CSS Chapter 1:** Selectors, Color Systems & Typography.
> - 📦 **CSS Chapter 2:** The CSS Box Model, Display (`block`, `inline`, `inline-block`), and Units.
>
> In this chapter, you will master the **Flexible Box Layout Module (Flexbox)** and write **Responsive Media Queries** for mobile, tablet, and desktop screens! 🚀

<br/>

---

## 📑 Table of Contents
1. [🌟 What is Flexbox?](#-what-is-flexbox)
2. [🧭 The Flexbox Model: Axes & Architecture](#-the-flexbox-model-axes--architecture)
3. [📦 Flex Container Properties (Parent)](#-flex-container-properties-parent)
   - [`flex-direction`](#1-flex-direction-defining-the-flow)
   - [`justify-content` (Main Axis Alignment)](#2-justify-content-main-axis-alignment)
   - [`flex-wrap`](#3-flex-wrap-multi-line-flow)
   - [`align-items` (Cross Axis Alignment)](#4-align-items-cross-axis-alignment)
   - [`align-content` (Multi-line Cross Axis Alignment)](#5-align-content-multi-line-cross-axis)
4. [🧩 Flex Item Properties (Children)](#-flex-item-properties-children)
   - [`flex-grow`](#1-flex-grow-absorbing-free-space)
   - [`flex-shrink`](#2-flex-shrink-preventing-overflow)
   - [`flex-basis`](#3-flex-basis-initial-size)
   - [`flex` Shorthand](#4-the-flex-shorthand)
5. [📱 Responsive Web Design with Media Queries](#-responsive-web-design-with-media-queries)
   - [Breakpoints & Syntax](#media-query-breakpoints)
   - [Mobile-First & Tablet Strategies](#real-world-responsive-flexbox-pattern)
6. [💻 Project Code Structure](#-project-code-structure)
7. [🚀 How to Run & Practice](#-how-to-run--practice)
8. [💬 Quote of the Chapter](#-quote-of-the-chapter)
9. [💖 Author & Credits](#-author--credits)

---

<br/>

## 🌟 What is Flexbox?

**Flexbox** (short for *Flexible Box Layout Module*) is a **one-dimensional layout model** designed to distribute space along a single row or column and align items efficiently within a container, even when their sizes are unknown or dynamic.

### 💡 Why Flexbox is a Game Changer:
* ✅ Easily centers elements vertically and horizontally (`margin: auto` or `justify-content: center; align-items: center;`).
* ✅ Automatically expands items to fill available free space or shrinks them to prevent overflow.
* ✅ Enables effortless reordering without touching HTML source code.
* ✅ Direction-agnostic — seamless switching between rows (horizontal) and columns (vertical).

---

<br/>

## 🧭 The Flexbox Model: Axes & Architecture

Flexbox revolves around two primary concepts: **The Flex Container (Parent)** and **Flex Items (Direct Children)** along **Two Axes**.

```
                MAIN AXIS (when flex-direction: row)
    ========================================================>
    +------------------------------------------------------+
    |  FLEX CONTAINER                                      |
|   |  +----------+  +----------+  +----------+            |
| C |  |  Flex    |  |  Flex    |  |  Flex    |            |
| R |  |  Item 1  |  |  Item 2  |  |  Item 3  |            |
| O |  +----------+  +----------+  +----------+            |
| S |                                                      |
| S |                                                      |
v   |                                                      |
    +------------------------------------------------------+
    CROSS AXIS (Perpendicular to Main Axis)
```

| Term | Definition |
| :--- | :--- |
| **Flex Container** | The parent element with `display: flex;` or `display: inline-flex;`. |
| **Flex Items** | The immediate children directly inside the flex container. |
| **Main Axis** | The primary axis along which items flow. Determined by `flex-direction`. |
| **Cross Axis** | The axis perpendicular ($90^\circ$) to the main axis. |

---

<br/>

## 📦 Flex Container Properties (Parent)

To start using flexbox, define a container:
```css
#container {
    display: flex; /* Activates the flex formatting context */
}
```

---

### 1. `flex-direction`: Defining the Flow
Controls the direction of the **Main Axis**:

```css
#container {
    flex-direction: row;            /* Default: Left to Right (Horizontal) */
    flex-direction: row-reverse;    /* Right to Left */
    flex-direction: column;         /* Top to Bottom (Vertical) */
    flex-direction: column-reverse; /* Bottom to Top */
}
```

---

### 2. `justify-content`: Main Axis Alignment
Aligns items along the **Main Axis** (Horizontal in `row` mode, Vertical in `column` mode):

```
1. flex-start     [ 1 ][ 2 ][ 3 ]                     
2. flex-end                           [ 1 ][ 2 ][ 3 ] 
3. center                     [ 1 ][ 2 ][ 3 ]         
4. space-between  [ 1 ]            [ 2 ]            [ 3 ]
5. space-around     [ 1 ]        [ 2 ]        [ 3 ]   
6. space-evenly     [ 1 ]       [ 2 ]       [ 3 ]     
```

```css
#container {
    justify-content: flex-start;    /* Packed at start of container */
    justify-content: flex-end;      /* Packed at end of container */
    justify-content: center;        /* Centered on the main axis */
    justify-content: space-between; /* First item at start, last at end, equal gaps */
    justify-content: space-around;  /* Equal space on both sides of each item */
    justify-content: space-evenly;  /* Equal spacing between items and outer edges */
}
```

---

### 3. `flex-wrap`: Multi-Line Flow
Controls whether items are forced into a single line or wrapped onto multiple lines:

```css
#container {
    flex-wrap: nowrap;        /* Default: All items squeezed onto one single line */
    flex-wrap: wrap;          /* Items wrap onto multiple lines if container is full */
    flex-wrap: wrap-reverse;  /* Items wrap onto multiple lines in reverse order */
}
```

---

### 4. `align-items`: Cross Axis Alignment
Aligns items along the **Cross Axis** across the current line:

| Value | Behavior |
| :--- | :--- |
| **`stretch`** | *(Default)* Stretches items to fill the container height (if height isn't fixed). |
| **`flex-start`** | Aligns items to the top (or start) of the cross axis. |
| **`flex-end`** | Aligns items to the bottom (or end) of the cross axis. |
| **`center`** | Centers items vertically on the cross axis. |
| **`baseline`** | Aligns items such that their text baselines match up. |

```css
#container {
    align-items: center; /* Perfect vertical centering across the cross axis */
}
```

---

### 5. `align-content`: Multi-Line Cross Axis
Aligns entire flex lines along the cross axis when there is extra space and `flex-wrap: wrap` is enabled:

```css
#container {
    align-content: flex-start;    /* Lines packed at container top */
    align-content: flex-end;      /* Lines packed at container bottom */
    align-content: center;        /* Lines grouped in the center */
    align-content: space-between; /* Equal space between lines */
    align-content: space-around;  /* Equal space around lines */
    align-content: stretch;       /* Lines stretch to fill extra space */
}
```

> [!TIP]
> **Super Trick: The Ultimate Perfect Centering in CSS**
> ```css
> .center-box {
>     display: flex;
>     justify-content: center; /* Horizontal centering */
>     align-items: center;     /* Vertical centering */
> }
> ```

---

<br/>

## 🧩 Flex Item Properties (Children)

These properties apply directly to the **child elements** within a flex container.

```css
#box1 {
    background-color: lightcoral;
    flex-shrink: 1;
}

#box2 {
    background-color: lightblue;
    flex-grow: 1;
}

#box3 {
    background-color: lightgreen;
    flex-basis: 100px;
}
```

### 1. `flex-grow`: Absorbing Free Space
Specifies how much a flex item will grow relative to the rest of the flex items if free space is available.
* `flex-grow: 0;` (Default: Does not grow)
* `flex-grow: 1;` (Grows equally to take up remaining space)
* If `box2` has `flex-grow: 2` and other boxes have `1`, `box2` takes twice as much remaining space.

---

### 2. `flex-shrink`: Preventing Overflow
Specifies how much a flex item will shrink relative to neighboring items when container space is insufficient.
* `flex-shrink: 1;` (Default: Shrinks to prevent overflow)
* `flex-shrink: 0;` (Never shrinks — preserves full size)

---

### 3. `flex-basis`: Initial Size
Defines the default size of an item before remaining space is distributed.
* `flex-basis: auto;` (Default: Looks at item's `width` or `height`)
* `flex-basis: 150px;` (Sets base size along main axis to 150px)

---

### 4. The `flex` Shorthand
Combine `flex-grow`, `flex-shrink`, and `flex-basis` in a single line:
```css
/* flex: [flex-grow] [flex-shrink] [flex-basis] */
.item {
    flex: 1 1 100px;
}

/* Common flex shortcuts */
.item-fill {
    flex: 1; /* Equivalent to: flex: 1 1 0%; (Fills available space) */
}
```

---

<br/>

## 📱 Responsive Web Design with Media Queries

**Media Queries** allow you to apply CSS styling rules conditionally based on device screen characteristics (such as viewport width).

### Media Query Breakpoints

```
[ Mobile Screens ] --------> [ Tablet / Laptops ] --------> [ Desktop Screens ]
  (<= 600px)                    (601px - 1024px)                 (>= 1025px)
  flex-direction: column        flex-direction: row              flex-direction: row
```

```css
/* 1. Mobile Devices (<= 600px): Stack items into a single column */
@media (max-width: 600px) {
    #container {
        flex-direction: column;
        width: 100%;
        height: auto;
    }
}

/* 2. Tablets & Small Laptops (601px to 1024px): Horizontal row with spaced items */
@media (min-width: 601px) and (max-width: 1024px) {
    #container {
        flex-direction: row;
        justify-content: space-between;
    }
}

/* 3. Desktops (>= 1025px): Fixed width, centered */
@media (min-width: 1025px) {
    #container {
        flex-direction: row;
        width: 800px;
    }
}
```

### 🎯 Real-World Responsive Flexbox Pattern
```css
/* Responsive Navigation Bar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}

/* Stack into vertical menu on Mobile */
@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        gap: 10px;
    }
}
```

---

<br/>

## 💻 Project Code Structure

```
css-chapter-3-flexbox/
│
├── index.html     # Semantic HTML5 file containing the Flexbox Playground
├── style.css      # Flex container rules, flex item growth, and media queries
└── README.md      # Chapter 3 visual guide & documentation
```

---

<br/>

## 🚀 How to Run & Practice

1. Open this chapter folder in **Visual Studio Code**.
2. Run `index.html` using the **Live Server** extension.
3. Open your browser's Developer Tools (`F12`).
4. Toggle device mode (`Ctrl+Shift+M` or `Cmd+Shift+M`) and resize the screen from **320px (Mobile)** to **1200px (Desktop)** to watch the layout transform dynamically!

---

<br/>

## 💬 Quote of the Chapter

<div align="center">

> *"Flexibility is the key to resilience. In web design, Flexbox is the art of making layouts adapt effortlessly to any screen in the world."*  
> — **Happy Responsive Coding!** 🤸‍♂️✨

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

⭐ **If you found Chapter 3 helpful, please leave a star on GitHub!** ⭐

</div>
