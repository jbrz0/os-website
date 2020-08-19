export const cssOne = `
  :root {
    --main-bg-color: red;
  }
`

export const cssTwo = `
  .one {
    background-color: var(--main-bg-color);
  }
`

export const cssThree = `
  .one {
    background-color: red;
  }
`

export const cssFour = `
  body {
    /* Text Colour */
    color: red;

    /* Background Colour */
    background: red;
    background-color: red;

    /* Border */
    border: 1px solid red;
    border-color: red;
    border-top-color: red;
    border-right-color: red;
    border-bottom-color: red;
    border-left-color: red;

    /* Shadows */
    text-shadow: 1px 1px 8px red;
    box-shadow: 1px 1px 8px red;

    /* Outline */
    outline: 1px solid red;
    outline-color: red;

    /* Input Cursor */
    caret-color: red;

    /* Text Decoration */
    text-decoration: overline wavy red;
    text-decoration-color: red;

    /* Columns */
    column-rule: 1px solid red;
    column-rule-color: red;
  }
`

export const cssFive = `
  div {
    /* Multiple Filters */
    filter: contrast(175%) saturate(30%);

    /* Remove or No Filter */
    filter: none;

    /* Individual Filters */
    filter: contrast(200%);
    filter: hue-rotate(90deg);
    filter: grayscale(50%);
    filter: sepia(60%);
    filter: saturate(30%);
    filter: drop-shadow(16px 16px 20px red);
    filter: invert(75%);
    filter: opacity(25%);
    filter: blur(5px);
  }
`
