import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const VideoSlider = ({ videos }) => {
  const carouselStyle = {
    maxWidth: '500px', // You can also use '30rem' instead of '600px'
    margin: '0 auto', // Center the carousel horizontally
  };

  return (
    <div style={carouselStyle} className='video_res'>
      <Carousel showArrows={true} showThumbs={false}>
        {videos.map((videoUrl, index) => (
          <div key={index}>
            <iframe
              title={`Video ${index}`}
              src={videoUrl}
              width="100%"
              height="300px"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default VideoSlider;
