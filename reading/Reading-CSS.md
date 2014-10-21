Color - sets foreground of element's text.
```
color: red;                     // A CSS Level 1 color.
color: orange;                  // The only color added in CSS Level 2 (Revision 1).
color: antiquewhite;            // A CSS Level 3 color, sometimes called a SVG or X11 color.
```

background-color - CSS property sets the background color of an element, either through a color value or the keyword transparent.
```
background-color: red
background-color: rgb(255, 255, 128)
background-color: hsla(50, 33%, 25%, 0.75)
background-color: currentColor
background-color: transparent
```

border-bottom-color - CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties border-color or border-bottom are more convenient and preferable.
```
.mybox {
    border: solid 0.3em gold;
    border-bottom-color: red;
    width: auto;
}
.redtext {
    color: red;
}
```

outline-color - CSS property sets the color of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out.
```
outline-color: invert
outline-color: red
outline-color: inherit
```

text-decoration-color - CSS property sets the color used when drawing underlines, overlines, or strike-throughs specified by text-decoration-line. This is the preferred way to color these text decorations, rather than using combinations of other HTML elements.
```
text-decoration-color: currentColor
text-decoration-color: red
text-decoration-color: #00ff00
text-decoration-color: rgba(255, 128, 128, 0.5)
text-decoration-color: transparent
text-decoration-color: inherit
```

border-color - CSS property is a shorthand for setting the color of the four sides of an element's border: border-top-color, border-right-color, border-bottom-color, border-left-color
```
border-color:  color                  /* one-value syntax */ 
border-color:  horizontal vertical    /* two-value syntax */
border-color:  top vertical bottom    /* three-value syntax */
border-color:  top right bottom left  /* four-value syntax */
border-color:  inherit
```

border-left-color - CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties border-color or border-left are more convenient and preferable.
```
border-left-color: red
border-left-color: rgb(255, 255, 0)
border-left-color: hsla(100%, 50%, 25%, 0.75)
border-left-color: transparent
border-left-color: #ffbb00
border-left-color: currentColor
```

border-right-color - CSS property sets the color of the right border of an element. Note that in many cases the shorthand CSS properties  border-color or border-right are more convenient and preferable.
```
mybox {
    border: solid 0.3em gold;
    border-right-color: red;
    width: auto;
}
.redtext {
    color: red;
}
```

border-top-color - CSS property sets the color of the top border of an element. Note that in many cases the shorthand CSS properties border-color or border-top are more convenient and preferable.
```
.mybox {
    border: solid 0.3em gold;
    border-top-color: red;
    width: auto;
}
.redtext {
    color: red;
}
```

text-align - CSS property describes how inline content like text is aligned in its parent block element. text-align does not control the alignment of block elements itself, only their inline content.
```
text-align: left
text-align: right
text-align: center
text-align: justify
text-align: start
text-align: end
text-align: match-parent
text-align: start end
text-align: "."
text-align: start "."
text-align: "." end

div { text-align: center; border:solid; }
```

font - CSS property is either a shorthand property for setting font-style, font-variant, font-weight, font-size, line-height and font-family, or a way to set the element's font to a system font, using specific keywords.
```
Formal syntax: [ [ <‘font-style’> || <font-variant-css21> || <‘font-weight’> || <‘font-stretch’> ]? <‘font-size’> [ / <‘line-height’> ]? <‘font-family’> ] | caption | icon | menu | message-box | small-caption | status-bar

/* Set the font weight to bold, the font-style to italic, the font size to large, 
and the font family to serif. */
p { font: bold italic large serif }
```

font-size - CSS property specifies the size of the font – specifically the desired height of glyphs from the font. Setting the font size may, in turn, change the size of other items, since it is used to compute the value of em and ex length units.
```
font-size: 12px      /* <length> values */
font-size: 0.8em
font-size: 80%       /* <percentage> values */
font-size: inherit

body {
  font-size: 62.5%; /* font-size 1em = 10px */
}
p {
  font-size: 1.6em; /* 1.6em = 16px */
}
```

font-style - CSS property allows italic or oblique faces to be selected within a font-family.
```
font-style: normal
font-style: italic
font-style: oblique
font-style: inherit

p.normal { font-style:normal } 
p.italic { font-style:italic } 
p.oblique { font-style: oblique }

<p class="normal">This paragraph is normal.</p>
<p class="italic">This paragraph is italic.</p>
<p class="oblique">This paragraph is oblique.</p>
```

