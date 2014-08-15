# jsgrid

Flexbox grid built with JavaScript and inspired by Jeet's fraction-based layouts

### Features
- Rapid development with attributes (never touch a line of CSS)
- Consistently sized nested gutters
- Flexible fractional widths

**[Demo](http://corysimmons.github.io/jsgrid)**

### Why?
The [benefits](http://philipwalton.github.io/solved-by-flexbox/) of FlexBox are huge and hopefully this grid will inspire someone to make a CSS spec polyfill so we can finally move away from old `float` and `inline-block` layouts, and move into the future.

### Is this laggy?
Depends on how huge and deeply nested your site is, but for most sites it's really fast and uses minimal JavaScript. Not only that, but in the future we'll look into porting this to Node so we can precompile on a dev machine. The resulting CSS rules are minimal.

### Didn't you make Jeet? Why make this?
[Jeet](http://jeet.gs) is a great grid system and in many ways much more mature than JSGrid, but there are some things that can't be done without Flexbox (full height elements for example). I'll continue using Jeet for the majority of my client work, but I'm really enjoying Flexbox so if I get a chance, I'm going to use it.

### Browser Support
All browsers *except IE9* and below. We're working on a new CSS spec polyfill so hang tight for that.
