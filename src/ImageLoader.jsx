import React, { useState } from "react";

const ImageLoader = ({ images, children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // Attach load event listeners to each image
  images.forEach((image) => {
    const img = new Image();
    img.src = image;
    img.onload = handleImageLoad;
  });

  return isLoading ? null : children;
};

export default ImageLoader;
