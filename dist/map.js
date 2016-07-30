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

var _deepEqual = require("deep-equal");

var _deepEqual2 = _interopRequireDefault(_deepEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactMapboxGl = (_temp2 = _class = function (_Component) {
  _inherits(ReactMapboxGl, _Component);

  function ReactMapboxGl() {
    var _temp, _this, _ret;

    _classCallCheck(this, ReactMapboxGl);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.getChildContext = function () {
      return {
        map: _this.state.map
      };
    }, _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ReactMapboxGl.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var _props = this.props;
    var style = _props.style;
    var hash = _props.hash;
    var preserveDrawingBuffer = _props.preserveDrawingBuffer;
    var accessToken = _props.accessToken;
    var center = _props.center;
    var zoom = _props.zoom;
    var minZoom = _props.minZoom;
    var maxZoom = _props.maxZoom;
    var maxBounds = _props.maxBounds;
    var bearing = _props.bearing;
    var onStyleLoad = _props.onStyleLoad;
    var onClick = _props.onClick;
    var onMouseMove = _props.onMouseMove;
    var onDragStart = _props.onDragStart;
    var onDrag = _props.onDrag;
    var onMouseUp = _props.onMouseUp;
    var onMove = _props.onMove;
    var onMoveStart = _props.onMoveStart;
    var onMoveEnd = _props.onMoveEnd;
    var onZoom = _props.onZoom;
    var scrollZoom = _props.scrollZoom;


    _mapboxGl2.default.accessToken = accessToken;

    var map = new _mapboxGl2.default.Map({
      preserveDrawingBuffer: preserveDrawingBuffer,
      hash: hash,
      zoom: zoom[0],
      minZoom: minZoom,
      maxZoom: maxZoom,
      maxBounds: maxBounds,
      bearing: bearing,
      container: this.refs.mapboxContainer,
      center: center,
      style: style,
      scrollZoom: scrollZoom
    });

    map.on("style.load", function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (onStyleLoad) {
        onStyleLoad.apply(undefined, [map].concat(args));
      }

      _this2.setState({ map: map });
    });

    map.on("click", function () {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      if (onClick) {
        onClick.apply(undefined, [map].concat(args));
      }
    });

    map.on("mousemove", function () {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      if (onMouseMove) {
        onMouseMove.apply(undefined, [map].concat(args));
      }
    });

    map.on("dragstart", function () {
      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      if (onDragStart) {
        onDragStart.apply(undefined, [map].concat(args));
      }
    });

    map.on("drag", function () {
      for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      if (onDrag) {
        onDrag.apply(undefined, [map].concat(args));
      }
    });

    map.on("mouseup", function () {
      for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      if (onMouseUp) {
        onMouseUp.apply(undefined, [map].concat(args));
      }
    });

    map.on("movestart", function () {
      for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }

      if (onMoveStart) {
        onMoveStart.apply(undefined, [map].concat(args));
      }
    });

    map.on("move", function () {
      for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }

      if (onMove) {
        onMove.apply(undefined, [map].concat(args));
      }
    });

    map.on("moveend", function () {
      for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        args[_key10] = arguments[_key10];
      }

      if (onMoveEnd) {
        onMoveEnd.apply(undefined, [map].concat(args));
      }
    });

    map.on("zoom", function () {
      for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        args[_key11] = arguments[_key11];
      }

      if (onZoom) {
        onZoom.apply(undefined, [map].concat(args));
      }
    });
  };

  ReactMapboxGl.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.state.map) {
      this.state.map.off();
    }
  };

  ReactMapboxGl.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return nextProps.children !== this.props.children || nextProps.containerStyle !== this.props.containerStyle || nextState.map !== this.state.map || nextProps.style !== this.props.style;
  };

  ReactMapboxGl.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var map = this.state.map;

    if (!map) {
      return null;
    }

    var center = map.getCenter();
    var zoom = map.getZoom();
    var bearing = map.getBearing();

    var didZoomUpdate = this.props.zoom[0] !== nextProps.zoom[0];

    var didCenterUpdate = this.props.center[0] !== nextProps.center[0] && this.props.center[1] !== nextProps.center[1];

    var didBearingUpdate = this.props.bearing !== nextProps.bearing;

    if (didZoomUpdate || didCenterUpdate || didBearingUpdate) {
      map[this.props.movingMethod]({
        zoom: didZoomUpdate ? nextProps.zoom[0] : zoom,
        center: didCenterUpdate ? nextProps.center : center,
        bearing: didBearingUpdate ? nextProps.bearing : bearing
      });
    }

    if (!(0, _deepEqual2.default)(this.props.style, nextProps.style)) {
      map.setStyle(nextProps.style);
    }
  };

  ReactMapboxGl.prototype.render = function render() {
    var _props2 = this.props;
    var containerStyle = _props2.containerStyle;
    var children = _props2.children;
    var map = this.state.map;


    return _react2.default.createElement(
      "div",
      { ref: "mapboxContainer", style: containerStyle },
      map && children
    );
  };

  return ReactMapboxGl;
}(_react.Component), _class.propTypes = {
  style: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]).isRequired,
  accessToken: _react.PropTypes.string.isRequired,
  center: _react.PropTypes.arrayOf(_react.PropTypes.number),
  zoom: _react.PropTypes.arrayOf(_react.PropTypes.number),
  minZoom: _react.PropTypes.number,
  maxZoom: _react.PropTypes.number,
  maxBounds: _react.PropTypes.array,
  bearing: _react.PropTypes.number,
  containerStyle: _react.PropTypes.object,
  hash: _react.PropTypes.bool,
  preserveDrawingBuffer: _react.PropTypes.bool,
  onClick: _react.PropTypes.func,
  onStyleLoad: _react.PropTypes.func,
  onMouseMove: _react.PropTypes.func,
  onMoveStart: _react.PropTypes.func,
  onMove: _react.PropTypes.func,
  onMoveEnd: _react.PropTypes.func,
  onMouseUp: _react.PropTypes.func,
  onDragStart: _react.PropTypes.func,
  onDrag: _react.PropTypes.func,
  onZoom: _react.PropTypes.func,
  scrollZoom: _react.PropTypes.bool,
  movingMethod: _react.PropTypes.oneOf(["jumpTo", "easeTo", "flyTo"])
}, _class.defaultProps = {
  hash: false,
  preserveDrawingBuffer: false,
  center: [-0.2416815, 51.5285582],
  zoom: [11],
  minZoom: 0,
  maxZoom: 20,
  bearing: 0,
  scrollZoom: true,
  movingMethod: "flyTo"
}, _class.childContextTypes = {
  map: _react2.default.PropTypes.object
}, _temp2);
exports.default = ReactMapboxGl;