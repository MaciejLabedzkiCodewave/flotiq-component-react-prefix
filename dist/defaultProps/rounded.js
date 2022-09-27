"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roundedProps = void 0;
var classSet = {
  none: 'fq-rounded-none',
  sm: 'fq-rounded-sm',
  md: 'fq-rounded-md',
  lg: 'fq-rounded-lg',
  xl: 'fq-rounded-xl',
  '2xl': 'fq-rounded-2xl',
  '3xl': 'fq-rounded-3xl',
  '4xl': 'fq-rounded-4xl',
  full: 'fq-rounded-full'
};
var defaultValue = 'full';
/**
 * Default settings for rounded props
 * PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full'])
 */

var roundedProps = {
  classSet: classSet,
  defaultValue: defaultValue,
  values: Object.keys(classSet)
};
exports.roundedProps = roundedProps;