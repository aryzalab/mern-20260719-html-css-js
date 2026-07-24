# HTML/CSS/JS

## World Wide Web (WWW)

It is a system of interlinked documents, system accessed through internet, using web browser.

Websites/Webapps are made up of HTML, CSS, JS.

## Client-Server Model

- **Client**: The browser or app that sends requests to the server.
- **Server**: The machine that hosts the website/webapp, process the request of the client and sends responses (HTML, CSS, data).

`<hr/>`

## HTML (Hypertext Markup Language)

HTML is the standard markup language for creating web pages.

### Text formatting elements/tags

1. Headings -> `<h1>` - `<h6>`
2. Paragraph -> `<p>`
3. Bold -> `<strong>`
4. Italics/Emphasize -> `<em>`
5. Superscript -> `<sup>`
6. Subscript -> `<sub>`
7. Line break -> `<br> (Not recommended, instead use CSS)`
8. Divider -> `<hr>`
9. `<pre>`

### List elements

1. Ordered list -> `<ol>`
2. Unordered list -> `<ul>`

List item -> `<li>`

### Links, media, iframe

Hyperlink -> `<a href="url">Click</a>`

Image -> `<img src="path of image" alt=""/>`

Video -> `<video src="path of video"></video>`

Iframe -> `<iframe/>`

### Table

```
<table>
<tr>
<td>
<thead>
<tbody>
```

rowspan
colspan

### Inline & Block elements

Inline: Covers only required width. `<a>, <img>, <span>, <video>, <input>`

Block: Covers full width. `<h1>, <p>, <div>, <section>, <ul>`

### Form & input

```
<form>
<input>
<label>
<textarea>
<select>
<option>
<datalist>
```

**Attributes**

- type, id, for, name, value, placeholder, required, disabled
- Number, Range: min, max
- Text, Password: minlength, maxlength
- Select: selected

#### Input types

1. text
2. email
3. number
4. password
5. date
6. time
7. date-time-local
8. range (min, max, step)
9. color
10. tel
11. radio (name)
12. checkbox
13. file (accept, multiple)
14. search

### Semantics

- Convention, best practice of using appropriate HTML elements

```
<header>
<nav>
</header>
<main>
<section> <aside>
<section>
</main>
<footer>
```

## CSS (Cascading style sheet)

- CSS is a style sheet used to style and layout web pages/HTML - colors, fonts, spacing, position, animation, view.

### Syntax

```
<selector> {
    property: value;
    ....
}
```

```
h1 {
    color:red;
    font-weight:bold;
}

```

### Selectors

1. Element: element name `h1, p, div` | Least priority
2. Class: `.class-name` | mid-priority (use for styling)
3. Id: `#id-name` | top-priority

```
// element
h1 {
    // your styles
}

// class
.myclass {
    // your styles
}

// id
#myid {
    // your styles
}

```

### Usage

1. Inline
2. Internal
3. External (Recommended)

### Properties

- color
- font
- text
- box-model: margin, padding, border, height, width
- gradient
- display
- flex (flexbox)

==============
- grid
- flex grow, shrink
- position
- units (px, rem, em)
- table
- form
- transformation - translate, rotate, skew, scale
- misc - overflow, transition, background image
- animation
- google-fonts

## JS (JavaScript)
