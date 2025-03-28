
import React from 'react';
import Lottie from 'lottie-react';
import myAnimation from '../../assets/animation.json';

const Banner = () => {
  return (
    <div>
      <Lottie animationData={myAnimation} style={{ height: 300, width: 300 }} />
    </div>
  );
};

export default Banner;
