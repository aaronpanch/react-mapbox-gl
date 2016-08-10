import MapboxGl from "mapbox-gl/dist/mapbox-gl";
import React, { Component, PropTypes } from "react";
import { render, unmountComponentAtNode } from "react-dom";

export default class Popup extends Component {
  static contextTypes = {
    map: PropTypes.object
  };

  static propTypes = {
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
    dangerouslySetInnerHTML: PropTypes.string,
    text: PropTypes.string,
    closeButton: PropTypes.bool,
    closeOnClick: PropTypes.bool,
    anchor: PropTypes.oneOf([
      "top",
      "bottom",
      "left",
      "right",
      "top-left",
      "top-right",
      "bottom-left",
      "bottom-right"
    ])
  }

  div = document.createElement("div");
  popup = new MapboxGl.Popup({
    closeButton: this.props.closeButton,
    closeOnClick: this.props.closeOnClick,
    anchor: this.props.anchor
  });

  componentDidMount() {
    render(this.props.children, this.div, () => {
      this.popup.setDOMContent(this.div);
      this.popup.addTo(this.context.map);
    });
  }

  componentDidUpdate() {
    render(this.props.children, this.div);
  }

  componentWillUnmount() {
    const { popup, div } = this;
    popup.remove();
    unmountComponentAtNode(div);
  }

  render() {
    this.popup.setLngLat(this.props.coordinates);
    return null;
  }
}

