---
title: "How to Create a Responsive Layout Without Media Queries"
date: "March 5, 2021"
excerpt: "When designing a responsive layout, it can be challenging to maintain fixed pixel values for margins and paddings."
---

When designing a responsive layout, it can be challenging to maintain fixed pixel values for margins and paddings. This is where relative units like em and rem come in handy. In this blog post, we will discuss how to create a responsive layout without media queries using relative units.

Instead of using fixed pixel values, we can use relative units like em and rem. Em calculates the size based on the font size of its nearest parent, while rem is relative to the root font size.<br><br> For example:

```css
h1 {
  font-size: 2em;
}
h2 {
  font-size: 1.7em;
}
article {
  padding: 1rem;
  margin: 0.5rem;
}
```

By using relative units, we can avoid the need for media queries and make our layout responsive across all devices.



<br><br>**Other Relative Units:**<br><br>
Apart from em and rem, we also have other relative units like ch, which stands for character width. We can use the clamp function to enforce this rule, for example:

```css
.card {
  width: clamp(45ch, 50%, 75ch);
  display: flex;
  background: green;
  padding: 1rem;
}
```

<br><br> **Conclusion:**<br><br> 

Creating a responsive layout without media queries is possible by using relative units like em and rem. By following this approach, we can ensure that our layout is responsive across all devices without having to maintain multiple stylesheets for different screen sizes.




<br><br> **Thank you for reading!**<br><br> 
