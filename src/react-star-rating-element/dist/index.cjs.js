'use strict';

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var RatingIcon = function RatingIcon(_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? "#ff8039" : _ref$fill,
      _ref$starStroke = _ref.starStroke,
      starStroke = _ref$starStroke === void 0 ? "none" : _ref$starStroke,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 13 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 13 : _ref$height,
      _ref$svgIconPath = _ref.svgIconPath,
      svgIconPath = _ref$svgIconPath === void 0 ? "M6.5 1.61803L7.48381 4.6459L7.59607 4.99139H7.95934H11.143L8.56737 6.86271L8.27348 7.07624L8.38573 7.42173L9.36955 10.4496L6.79389 8.57827L6.5 8.36475L6.20611 8.57827L3.63045 10.4496L4.61426 7.42173L4.72652 7.07624L4.43263 6.86271L1.85697 4.99139H5.04066H5.40393L5.51619 4.6459L6.5 1.61803Z" : _ref$svgIconPath;
  return /*#__PURE__*/React__namespace.createElement("svg", {
    width: width,
    height: height,
    fill: "none",
    viewBox: "0 0 13 13",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: svgIconPath,
    fill: fill,
    stroke: starStroke
  }));
};

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = ".widget-container {\r\n  display: flex;\r\n}\r\n\r\n.widget-label {\r\n}\r\n\r\n.widget-label svg {\r\n  cursor: pointer;\r\n  transition: fill 200ms;\r\n}\r\n\r\n.widget-input {\r\n  display: none;\r\n}\r\n";
n(css,{});

var StarRating = function StarRating(_ref) {
  var _ref$numberOfStars = _ref.numberOfStars,
      numberOfStars = _ref$numberOfStars === void 0 ? 5 : _ref$numberOfStars,
      starRatedColor = _ref.starRatedColor,
      _ref$starEmptyColor = _ref.starEmptyColor,
      starEmptyColor = _ref$starEmptyColor === void 0 ? "#000" : _ref$starEmptyColor,
      starStroke = _ref.starStroke,
      svgIconPath = _ref.svgIconPath,
      starDimension = _ref.starDimension,
      starSpacing = _ref.starSpacing,
      rating = _ref.rating,
      changeRating = _ref.changeRating;

  var _useState = React.useState(null),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      hover = _useState2[0],
      setHover = _useState2[1];

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "widget-container"
  }, Array.from({
    length: numberOfStars
  }).map(function (_, i) {
    var ratingValue = i + 1;
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "widget-label",
      style: {
        padding: "0 ".concat(starSpacing)
      },
      key: i + Math.random(),
      onClick: function onClick() {
        return changeRating(ratingValue);
      },
      onMouseEnter: function onMouseEnter() {
        return setHover(ratingValue);
      },
      onMouseLeave: function onMouseLeave() {
        return setHover(null);
      }
    }, /*#__PURE__*/React__default["default"].createElement("input", {
      className: "widget-input",
      type: "radio",
      name: "rating",
      value: ratingValue
    }), /*#__PURE__*/React__default["default"].createElement(RatingIcon, {
      fill: ratingValue <= (hover || rating) ? starRatedColor : starEmptyColor,
      stroke: starStroke,
      width: starDimension,
      height: starDimension,
      svgIconPath: svgIconPath
    }));
  }));
};

var returnLibrary = function returnLibrary() {
  return {
    StarRating: StarRating // you can add here other components that you want to export

  };
};

var index = returnLibrary();

module.exports = index;
