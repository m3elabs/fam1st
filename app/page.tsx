'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function YourComponent() {
  const [imageBlob, setImageBlob] = useState(null);

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await axios.get(`http://${process.env.NEXT_PUBLIC_SOURCE}`, {
          responseType: 'blob', // Tell Axios to treat the response as a Blob
        });
        setImageBlob(response.data);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    }

    fetchImage();
  }, []);

  return (
    <div>
      {imageBlob && <img src={URL.createObjectURL(imageBlob)} alt="Smile" />}
    </div>
  );
}

export default YourComponent;