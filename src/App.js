import React from 'react';

import "./index.css";
import AwesomeImage from "./AwesomeImage";

// import HoverOpacity from "./HoverOpacity"

import withHoverOpacity from './withHoverOpacity';
import withGrayscale from './withGrayscale';

const src="https://picsum.photos/200/300"
const HoverOpacityAwesomeImage = withHoverOpacity(AwesomeImage, 0.9);
const GrayscaleAwesomeImage = withGrayscale(src, 300, 200, 0.5);

function App() {
  return (
    <div className="App">
        {/* <HoverOpacity>
          <AwesomeImage src="https://picsum.photos/200/300"></AwesomeImage>
        </HoverOpacity> */}
        <HoverOpacityAwesomeImage src="https://picsum.photos/200/300"/>
        <br></br>
        <GrayscaleAwesomeImage src="https://picsum.photos/200/300"/>
    </div>
  );
}

export default App;
