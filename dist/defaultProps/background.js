"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backgroundProps = void 0;
var classSet = {
  primary: 'fq-bg-primary fq-text-white',
  secondary: 'fq-bg-secondary fq-text-white',
  success: 'fq-bg-success fq-text-white',
  danger: 'fq-bg-danger fq-text-white',
  warning: 'fq-bg-warning fq-text-black',
  info: 'fq-bg-info fq-text-black',
  light: 'fq-bg-light fq-text-black',
  dark: 'fq-bg-dark fq-text-white',
  transparent: 'fq-bg-transparent'
};
var defaultValue = 'primary';
/**
 * Default settings for backgroundColor props
 * PropTypes.oneOf([
 *         'primary',
 *         'secondary',
 *         'success',
 *         'danger',
 *         'warning',
 *         'info',
 *         'light',
 *         'dark',
 *         'transparent',
 *     ])
 */

var backgroundProps = {
  classSet: classSet,
  defaultValue: defaultValue,
  values: Object.keys(classSet)
};
exports.backgroundProps = backgroundProps;