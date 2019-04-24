import CSSThemeManager from './manager'

/**
 * CSSThemeManager Factory function to create a new CSSThemeManager
 *
 * @param {Object} config
 */
export default function (config) {
  return new CSSThemeManager(config)
}
