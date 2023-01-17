There are several ways to center a div horizontally and vertically in CSS. Here are two common methods:

## 1. Using Flexbox
One way to center a div of unknown size horizontally and vertically is to use flexbox. This method involves setting the parent container as a flex container and the child as a flex item. You can use the `align-items `and `justify-content` properties to center the child element both horizontally and vertically.

<br>

Example for CSS:

```CSS
parent {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* or any other value */
}
.child {
  /* styles for child element */
}
```

Example for HTML:

```html
<div class="parent">
  <div class="child">
    <!-- content -->
  </div>
</div>
```


## 2. Using Grid Layout
Another way to center a div of unknown size horizontally and vertically is to use grid layout. This method involves setting the parent container as a grid container and the child as a grid item. You can use the `place-items` property to center the child element both horizontally and vertically.

<br>

Example for CSS:

```css
.parent {
  display: grid;
  place-items: center;
  height: 100vh; /* or any other value */
}
.child {
  /* styles for child element */
}
```

Example forHTML:

```html
<div class="parent">
  <div class="child">
    <!-- content -->
  </div>
</div>
```