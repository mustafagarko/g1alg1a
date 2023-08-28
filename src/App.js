import { Fragment } from "react";
import HeroSection from "./HeroSection";
import ImageLoader from "./ImageLoader"; // Adjust the import path
import img1 from "../src/assets/bg1.jpeg";
import img2 from "../src/assets/cloud1.png";
import img3 from "../src/assets/tower.png";
import img4 from "../src/assets/tower2.png";

function App() {
  const images = [img1, img2, img3, img4]; // Add image paths

  return (
    <ImageLoader images={images}>
      <Fragment>
        <HeroSection />
      </Fragment>
    </ImageLoader>
  );
}

export default App;
