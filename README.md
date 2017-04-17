# object-partners-revealjs-theme

A Reveal.js theme to get a jump-start on a sweet looking OPi presentation

## Install

```bash
npm install ObjectPartners/object-partners-revealjs-theme --save
```

This will create `node_modules/object-partners-revealjs-theme` with the CSS file inside of `node_modules/object-partners-revealjs-theme/dist/object-partners-revealjs-theme.css`.

This file can be imported using webpack (`import 'object-partners-revealjs-theme'`), or can be referenced using a regular old `<link rel="stylesheet">`

## Usage

The theme should _just work_ upon injection into the page. However, some additional tweaking can lead to a better user experience and increased functionality, specifically:

### Adding a title slide

Add any of the following attributes to a `section` tag in order to get "title slide" theming:

`data-state="title"`, `date-state="title-slide"`, `data-state="heading"`, `data-state="heading-slide"`

### Tweaking Reveal.js settings

As this project includes a custom header that takes up some space, the margins until a slide overflows/wraps should be increased in order to accomodate for the space the header takes up. To do this, please use the following code snippet (along with any other custom settings)

```javascript
Reveal.initialize({
  margin: 0.25
});
```

[config]: https://github.com/objectpartners/object-partners-presentation-config
