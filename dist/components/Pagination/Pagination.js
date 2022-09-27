"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rounded = require("../../defaultProps/rounded");

var _border = require("../../defaultProps/border");

var _background = require("../../defaultProps/background");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Component for pagination navigation
 */
var Pagination = function Pagination(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
      borderVariant = _ref.borderVariant,
      size = _ref.size,
      rounded = _ref.rounded,
      additionalClasses = _ref.additionalClasses,
      activeAdditionalClasses = _ref.activeAdditionalClasses,
      prevNextAdditionalClasses = _ref.prevNextAdditionalClasses,
      containerAdditionalClasses = _ref.containerAdditionalClasses,
      prev = _ref.prev,
      next = _ref.next,
      baseUrl = _ref.baseUrl,
      page = _ref.page,
      numOfPages = _ref.numOfPages;
  var sizeClass = {
    sm: 'fq-w-6 fq-h-6 md:fq-w-8 md:fq-h-8 fq-text-sm',
    md: 'fq-w-8 fq-h-8 md:fq-w-10 md:fq-h-10 fq-text-sm md:fq-text-base',
    lg: 'fq-w-10 fq-h-10 md:fq-w-12 md:fq-h-12 fq-text-md md:fq-text-lg'
  };
  var sizeClassPrevNext = {
    sm: 'fq-w-16 fq-h-6 md:fq-w-20 md:fq-h-8 fq-text-sm',
    md: 'fq-w-20 fq-h-8 md:fq-w-24 md:fq-h-10 fq-text-sm md:fq-text-base',
    lg: 'fq-w-24 fq-h-10 md:fq-w-28 md:fq-h-12 fq-text-md md:fq-text-lg'
  };
  var bgClasses = {
    primary: 'fq-bg-white hover:fq-bg-primary fq-text-black hover:fq-text-white',
    secondary: 'fq-bg-white hover:fq-bg-secondary fq-text-black hover:fq-text-white',
    info: 'fq-bg-white hover:fq-bg-info fq-text-black',
    light: 'fq-bg-white hover:fq-bg-light fq-text-black',
    dark: 'fq-bg-white hover:fq-bg-dark fq-text-black hover:fq-text-white',
    transparent: 'fq-bg-transparent fq-text-black'
  };
  var borderClasses = {
    primary: ['fq-border', _border.borderProps.classSet[borderVariant], 'hover:fq-border-primary'].join(' '),
    secondary: ['fq-border', _border.borderProps.classSet[borderVariant], 'hover:fq-border-secondary'].join(' '),
    info: ['fq-border', _border.borderProps.classSet[borderVariant], 'hover:fq-border-info'].join(' '),
    light: ['fq-border', _border.borderProps.classSet[borderVariant], 'hover:fq-border-light'].join(' '),
    dark: ['fq-border', _border.borderProps.classSet[borderVariant], 'hover:fq-border-dark'].join(' '),
    transparent: ['fq-border', _border.borderProps.classSet[borderVariant], 'hover:fq-border-transparent'].join(' ')
  };
  var activeBorderClasses = {
    primary: 'fq-border fq-border-primary',
    secondary: 'fq-border fq-border-secondary',
    info: 'fq-border fq-border-info',
    light: 'fq-border fq-border-light',
    dark: 'fq-border fq-border-dark',
    transparent: 'fq-border fq-border-transparent'
  };
  var safePage = Math.min(Math.max(page, 1), numOfPages);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: ['fq-base', 'fq-px-1', 'fq-py-3', 'fq-flex', 'fq-items-center', 'fq-justify-between', 'sm:fq-px-6', 'fq-mt-10'].concat(_toConsumableArray(containerAdditionalClasses)).join(' ')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fq-flex-1 fq-flex fq-items-center fq-justify-center"
  }, /*#__PURE__*/_react.default.createElement("nav", {
    className: "fq-relative fq-z-0 fq-inline-flex fq-space-x-2",
    "aria-label": "Pagination"
  }, safePage > 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("a", {
    href: safePage > 2 ? "".concat(baseUrl).concat(safePage - 1) : baseUrl,
    className: ['fq-relative', 'fq-inline-flex', 'fq-items-center', 'fq-justify-center', sizeClassPrevNext[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'fq-leading-6', 'fq-font-medium'].concat(_toConsumableArray(prevNextAdditionalClasses)).join(' ')
  }, prev), /*#__PURE__*/_react.default.createElement("a", {
    href: baseUrl,
    className: ['fq-relative', 'fq-items-center', 'fq-justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'fq-leading-6', 'fq-font-medium', safePage <= 2 ? 'fq-inline-flex' : 'fq-hidden', 'md:fq-inline-flex'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, "1"), safePage > 4 && /*#__PURE__*/_react.default.createElement("span", {
    className: ['fq-relative', 'fq-items-center', 'fq-justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'fq-leading-6', 'fq-font-medium', 'fq-hidden', 'md:fq-inline-flex'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, "...")), safePage > 3 && /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(baseUrl).concat(safePage - 2),
    className: ['fq-relative', 'fq-items-center', 'fq-justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'fq-leading-6', 'fq-font-medium', 'fq-hidden', 'md:fq-inline-flex'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, safePage - 2), safePage > 2 && /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(baseUrl).concat(safePage - 1),
    className: ['fq-relative', 'fq-inline-flex', 'fq-items-center', 'fq-justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'fq-leading-6', 'fq-font-medium'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, safePage - 1), /*#__PURE__*/_react.default.createElement("span", {
    "aria-current": "page",
    className: ['fq-relative', 'fq-inline-flex', 'fq-items-center', 'fq-justify-center', sizeClass[size], _background.backgroundProps.classSet[variant], activeBorderClasses[variant], _rounded.roundedProps.classSet[rounded], 'fq-leading-6', 'fq-font-medium'].concat(_toConsumableArray(activeAdditionalClasses)).join(' ')
  }, safePage), safePage < numOfPages - 1 && /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(baseUrl).concat(safePage + 1),
    className: ['fq-relative', 'fq-inline-flex', 'fq-items-center', 'fq-justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'fq-leading-6', 'fq-font-medium'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, safePage + 1), page < numOfPages - 2 && /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(baseUrl).concat(safePage + 2),
    className: ['fq-relative', 'fq-items-center', 'fq-justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'fq-leading-6', 'fq-font-medium', 'fq-hidden', 'md:fq-inline-flex'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, safePage + 2), safePage < numOfPages && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, safePage < numOfPages - 3 && /*#__PURE__*/_react.default.createElement("span", {
    className: ['fq-relative', 'fq-items-center', 'fq-justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'fq-leading-6', 'fq-font-medium', 'fq-hidden', 'md:fq-inline-flex'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, "..."), /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(baseUrl).concat(numOfPages),
    className: ['fq-relative', 'fq-items-center', 'fq-justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'fq-leading-6', 'fq-font-medium', safePage >= numOfPages - 1 ? 'fq-inline-flex' : 'fq-hidden', 'md:fq-inline-flex'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, numOfPages), /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(baseUrl).concat(safePage + 1),
    className: ['fq-relative', 'fq-inline-flex', 'fq-items-center', 'fq-justify-center', sizeClassPrevNext[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'fq-leading-6', 'fq-font-medium'].concat(_toConsumableArray(prevNextAdditionalClasses)).join(' ')
  }, next)))));
};

Pagination.propTypes = {
  /**
   * Color variant
   */
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'info', 'light', 'dark', 'transparent']),

  /**
   * Color variant for border
   */
  borderVariant: _propTypes.default.oneOf(['primary', 'secondary', 'info', 'light', 'dark', 'transparent', 'black', 'white']),

  /**
   * How large should the button be?
   */
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),

  /**
   * Active page number
   */
  page: _propTypes.default.number.isRequired,

  /**
   * Number of pages
   */
  numOfPages: _propTypes.default.number.isRequired,

  /**
   * Is this the rounded button?
   */
  rounded: _propTypes.default.oneOf(['none', 'sm', 'md', 'lg', 'full']),

  /**
   * Text or component for previous button
   */
  prev: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),

  /**
   * Text or component for next button
   */
  next: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),

  /**
   * Base url of pagination
   */
  baseUrl: _propTypes.default.string,

  /**
   * Additional classes for pagination box
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for active pagination box
   */
  activeAdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for prev and next pagination box
   */
  prevNextAdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for pagination container
   */
  containerAdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Pagination.defaultProps = {
  size: 'md',
  variant: 'primary',
  borderVariant: 'primary',
  rounded: _rounded.roundedProps.defaultValue,
  prev: 'Previous',
  next: 'Next',
  baseUrl: '/',
  additionalClasses: [],
  activeAdditionalClasses: [],
  prevNextAdditionalClasses: [],
  containerAdditionalClasses: []
};
var _default = Pagination;
exports.default = _default;