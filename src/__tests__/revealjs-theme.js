const css = require('../../dist/revealjs-theme.css');

test('it inlines SVG', () => {
  expect(css).toMatch(/data:image\/svg/);
});

test('it autoprefixes properties', () => {
  expect(css).toMatch('-webkit-linear-gradient');
});

test('it includes reveal.js default theme', () => {
  expect(css).toMatch(/\.reveal\s*\{/);
});
