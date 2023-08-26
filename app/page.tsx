import React, { useEffect, useState } from 'react';

  async function fetchImage() {
    try {
      const response = await fetch(process.env.SOURCE!);
      const blob = await response.blob();  // Get the image data as a Blob
      return blob;
    } catch (error) {
      console.error('Error fetching image:', error);
      return null;
    }
  }
  function ImageComponent() {
    const [imageData, setImageData] = useState<Blob | null>(null);
  
    useEffect(() => {
      async function loadImage() {
        const blob = await fetchImage();
        setImageData(blob);
      }
  
      loadImage();
    }, []);
  
    return (
      <div>
        {imageData && (
          <img
            src={URL.createObjectURL(imageData)}  // Create a temporary URL for the Blob
            alt="Smile"
          />
        )}
      </div>
    );
  }
  export default ImageComponent