"use client";
import React from 'react';
import Lottie from 'react-lottie';

const LottieWrapper = ({ options, width, height }: any) => {
  return <Lottie options={options} width={width} height={height} />;
};

export default LottieWrapper;
