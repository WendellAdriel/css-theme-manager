/**
 * Checks if the given config is valid
 *
 * @param {Object} config
 * @returns {Boolean}
 */
export function isConfigValid (config) {
  return !(typeof config !== 'object' || config === undefined || config === null)
}

/**
 * Builds the CSS variables for the given config
 *
 * @param {Object} config
 * @returns {String}
 */
export function buildThemeConfig (config) {
  let themeConfig = ''
  for (const varName in config) {
    themeConfig += `    --csstm-${varName}: ${config[varName]};\n`
  }

  themeConfig += '    transition: all .5s;\n'
  return themeConfig
}
