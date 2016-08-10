"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class, _temp2;

var _mapboxGl = require("mapbox-gl/dist/mapbox-gl");

var _mapboxGl2 = _interopRequireDefault(_mapboxGl);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popup = (_temp2 = _class = function (_Component) {
  _inherits(Popup, _Component);

  function Popup() {
    var _temp, _this, _ret;

    _classCallCheck(this, Popup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.div = document.createElement("div"), _this.popup = new _mapboxGl2.default.Popup({
      closeButton: _this.props.closeButton,
      closeOnClick: _this.props.closeOnClick,
      anchor: _this.props.anchor
    }), _temp), _possibleConstructorReturn(_this, _ret);
  }

  Popup.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    (0, _reactDom.render)(this.props.children, this.div, function () {
      _this2.popup.setDOMContent(_this2.div);
      _this2.popup.addTo(_this2.context.map);
    });
  };

  Popup.prototype.componentDidUpdate = function componentDidUpdate() {
    (0, _reactDom.render)(this.props.children, this.div);
  };

  Popup.prototype.componentWillUnmount = function componentWillUnmount() {
    var popup = this.popup;
    var div = this.div;

    popup.remove();
    (0, _reactDom.unmountComponentAtNode)(div);
  };

  Popup.prototype.render = function render() {
    this.popup.setLngLat(this.props.coordinates);
    return null;
  };

  return Popup;
}(_react.Component), _class.contextTypes = {
  map: _react.PropTypes.object
}, _class.propTypes = {
  coordinates: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,
  dangerouslySetInnerHTML: _react.PropTypes.string,
  text: _react.PropTypes.string,
  closeButton: _react.PropTypes.bool,
  closeOnClick: _react.PropTypes.bool,
  anchor: _react.PropTypes.oneOf(["top", "bottom", "left", "right", "top-left", "top-right", "bottom-left", "bottom-right"])
}, _temp2);
exports.default = Popup;