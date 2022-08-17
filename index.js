import { useState, useEffect } from 'react';


function useGetWindowSize() {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
      function handleResize() {
        setWindowSize(getWindowSize());
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


    return windowSize;

}

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

export default useGetWindowSize;
