'use client'

import React, { useEffect, useState } from 'react';

interface LoadingDotsProps {
    interval?: number
}

export default function LoadingDots({interval = 500}: LoadingDotsProps) {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : ''));
    }, interval); // Adjust the interval time as needed

    return () => clearInterval(intervalId);
  }, [interval]);

  return (
    <span>{dots}</span>
  );
}
