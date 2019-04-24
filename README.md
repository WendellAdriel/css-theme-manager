# CSS Theme Manager

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/WendellAdriel/css-theme-manager/blob/master/LICENSE)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

[![version][version-badge]][package]
[![downloads][downloads-badge]][npmcharts]
[![size][size-badge]][unpkg-dist] [![gzip size][gzip-badge]][unpkg-dist]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

Zero dependency lib to manage CSS themes easily for your app

## How to use

Install the package

```
npm install css-theme-manager --save
// or with yarn
yarn add css-theme-manager
```

Import it and init the **CSS Theme Manager** with a default theme.
A `theme` is an object with the name of your variables as keys and the value of the variables as the value.

```js
import CSSThemeManager from './manager'

const themeManager = new CSSThemeManager({
  'bg-color': '#fff',
  'text-color': 'darkblue',
  'featured-font': 'Verdana, sans-serif'
})
```

This will create and insert the given variables in the `:root` selector.
All the variables created with this **CSS Theme Manager** will have a `csstm-` prefix.
The code above will result in:

```css
:root {
    --csstm-bg-color: '#fff';
    --csstm-text-color: 'darkblue';
    --csstm-featured-font: 'Verdana, sans-serif';
}
```

Check the **API Reference** below to check all that you can do with this package.

## API Reference

### createTheme(name: String, config: Object)

Creates and registers a new theme with the given name and config.

```js
// import and init the themeManager
// ...
themeManager.createTheme('dark', {
  'bg-color': '#222',
  'text-color': '#ddd'
})
```

### applyTheme(selector: String, theme: String)

Applies the given theme to all elements matching the given selector. You can pass any selector you would pass to the **[document.querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)** function.

```js
// import and init the themeManager
// ...
themeManager.createTheme('dark', {
  'bg-color': '#222',
  'text-color': '#ddd'
})

themeManager.applyTheme('html', 'dark')
```

### removeTheme(theme: String)

Removes and unregisters the given theme.

```js
// import and init the themeManager
// ...
themeManager.createTheme('dark', {
  'bg-color': '#222',
  'text-color': '#ddd'
})

themeManager.applyTheme('html', 'dark')
themeManager.removeTheme('dark')
```

## Example

You can find an example on how to work with this lib in this **[Codepen](https://codesandbox.io/s/p70jv0l2vj).**

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/11641518?v=4" width="100px;"/><br /><sub><b>Wendell Adriel</b></sub>](https://wendelladriel.com)<br />[💻](https://github.com/WendellAdriel/jodit-vue/commits?author=WendellAdriel "Code") [📖](https://github.com/WendellAdriel/jodit-vue/commits?author=WendellAdriel "Documentation") [💡](#example-WendellAdriel "Examples") [🤔](#ideas-WendellAdriel "Ideas, Planning, & Feedback") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

[downloads-badge]: https://img.shields.io/npm/dm/css-theme-manager.svg?style=flat-square
[npmcharts]: http://npmcharts.com/compare/css-theme-manager
[version-badge]: https://img.shields.io/npm/v/css-theme-manager.svg?style=flat-square
[package]: https://www.npmjs.com/package/css-theme-manager
[size-badge]: http://img.badgesize.io/https://unpkg.com/css-theme-manager/dist/css-theme-manager.js?style=flat-square&label=size
[unpkg-dist]: https://unpkg.com/css-theme-manager/dist/css-theme-manager.js
[gzip-badge]: http://img.badgesize.io/https://unpkg.com/css-theme-manager/dist/css-theme-manager.js?label=gzip%20size&style=flat-square&compression=gzip
[github-watch-badge]: https://img.shields.io/github/watchers/WendellAdriel/css-theme-manager.svg?style=social
[github-watch]: https://github.com/WendellAdriel/css-theme-manager/watchers
[github-star-badge]: https://img.shields.io/github/stars/WendellAdriel/css-theme-manager.svg?style=social
[github-star]: https://github.com/WendellAdriel/css-theme-manager/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20css-theme-manager!%20https://github.com/WendellAdriel/css-theme-manager%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/WendellAdriel/css-theme-manager.svg?style=social
