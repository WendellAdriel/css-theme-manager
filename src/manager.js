import { isConfigValid, buildThemeConfig } from './helpers'

/**
 * Class that encapsulates all the CSS theme management actions
 */
export default class {
  /**
   * Creates a new instance of the ThemeManager with a default theme
   * @param {Object} config
   */
  constructor (config) {
    this._themes = {}

    if (!isConfigValid(config)) {
      console.error('You need to provide an object to init the Theme Manager!')
      return
    }

    this._themes.default = config
    const themeStyleTag = document.createElement('style')

    themeStyleTag.innerHTML = ':root {\n' + buildThemeConfig(config) + '}'
    document.head.append(themeStyleTag)
  }

  /**
   * Creates and registers a new theme with the given name and config
   *
   * @param {String} name
   * @param {Object} config
   */
  createTheme (name, config) {
    if (!isConfigValid(config)) {
      console.error('You need to provide an object to create a new theme!')
      return
    }

    this._themes[name] = config
    const themeStyleTag = document.createElement('style')

    themeStyleTag.innerHTML = `[data-theme="${name}"] {\n` + buildThemeConfig(config) + '}'
    document.head.append(themeStyleTag)
  }

  /**
   * Applies the given theme to all elements matching the given selector
   *
   * @param {String} selector
   * @param {String} theme
   */
  applyTheme (selector, theme) {
    if (!this._themes.hasOwnProperty(theme)) {
      console.error(`The theme ${theme} is not registered, make sure you registered it before using it!`)
      return
    }

    Array.from(document.querySelectorAll(selector)).map(element => {
      if (theme === 'default') {
        element.removeAttribute('data-theme')
        return
      }
      element.setAttribute('data-theme', theme)
    })
  }

  /**
   * Removes and unregisters the given theme
   *
   * @param {String} theme
   */
  removeTheme (theme) {
    if (theme === 'default') {
      console.error("You can't unregister the default theme!")
      return
    }

    if (!this._themes.hasOwnProperty(theme)) {
      console.error(`The theme ${theme} is not registered!`)
      return
    }

    delete this._themes[theme]
    const target = Array.from(document.querySelectorAll('style'))
      .find(item => item.innerHTML.includes(`[data-theme="${theme}"]`))

    target.remove()
  }
}
