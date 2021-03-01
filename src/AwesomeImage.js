import React from "react";

export default function ({ src, width = 300, height = 200, value }) {
  return (
    <div
      className="AwesomeImage"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        filter: `grayscale(${value})`,
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "8px",
      }}
    />
  );
}
