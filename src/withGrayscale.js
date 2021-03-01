import React, { Component } from "react";

export default function (src, width = 300, height = 200, value = 0.5) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isHovered: false,
      };
    }

    onMouseEnter() {
      this.setState({
        isHovered: true,
      });
    }

    onMouseLeave() {
      this.setState({
        isHovered: false,
      });
    }

    render() {
      return (
        <div
          style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundImage: `url(${src})`,
            filter: this.state.isHovered
              ? `grayscale(${value})`
              : `grayscale(0)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
          }}
          onMouseEnter={this.onMouseEnter.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)}
        ></div>
      );
    }
  };
}
