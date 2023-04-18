---
title: "CSS Tricks and Tips for make dialy life easier"
date: "March 5, 2021"
excerpt: "To create a cool website with vertical text, you can use the writing-mode property. Here's how you can add a vertical text to your website"
---

**Trick 1: Vertical Line**

To create a cool website with vertical text, you can use the writing-mode property. Here's how you can add a vertical text to your website:

```css
.box h2 {
  writing-mode: vertical-lr;
}
```

If you want to place the text side-by-side, you can use the display: flex property on the container:

```css
.box {
  display: flex;
}
```

**Trick 2: Gap**

If you want to add spacing between items in a container, you can use the gap property. Here's an example:
    ![Link Name](https://media.istockphoto.com/id/664975134/photo/sticky-note-post-it-board-office.jpg?s=612x612&w=0&k=20&c=jovP61sbit5hNkMVumu3g6ErvEKDxfIAEJPlU_aiuoQ=)  

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: tomato;
  gap: 24px;
}
```

**Trick 3: Flip on Image**

You can flip an image horizontally or vertically using the transform property. Here's how to flip an image horizontally:

```css
.box img {
  width: 100%;
  transform: scaleX(-1);
}
```

**Trick 4: Truncate**

To show only a preview of your text, you can use the line-clamp property. Here's an example:

```css
p {
  max-width: 20rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

**Trick 5: Scroll-Snapping**
To create a card carousel with snap cards, you can use the scroll-snap-type and scroll-snap-align properties. Here's an example:

```html
<div class="container">
  <div class="box-1"></div>
  <div class="box-2"></div>
  <div class="box-3"></div>
  <div class="box-4"></div>
  <div class="box-5"></div>
</div>
```

```css
.container {
  width: 20rem;
  height: 20rem;
  background: white;
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}

.container div {
  min-width: 20rem;
  justify-content: center;
  align-items: center;
  font-size: 10rem;
  color: white;
  scroll-snap-align: center;
}
```
