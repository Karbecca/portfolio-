import { useState, useRef, useEffect } from 'react';
import '../../styles/css/aniText.css';

const titles = ['Web Engineer', 'FrontEnd Developer', 'Backend Engineer', 'Rails Developer', 'Api Engineer', 'Rails Enthusiast', 'FullStack Developer'];

const AnimatedText = () => {
  const textHolderRef = useRef();
  const textRef = useRef();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const locations = ['top', 'right', 'bottom', 'left'];
    const currentLocation = locations[Math.floor(Math.random() * 4)];
    const textHolder = textHolderRef.current;
    const textEl = textRef.current;

    textHolder.classList.add(`style-border-${currentLocation}`);
    textEl.classList.add(`drop-text-from-${currentLocation}`);

    const timeoutId = setTimeout(() => {
      textHolder.classList.remove(`style-border-${currentLocation}`);
      textEl.classList.remove(`drop-text-from-${currentLocation}`);
    }, 3500);

    return () => {
      textHolder.classList.remove(`style-border-${currentLocation}`);
      textEl.classList.remove(`drop-text-from-${currentLocation}`);
      clearTimeout(timeoutId);
    };
  }, [index]);

  useEffect(() => {
    const delayId = setTimeout(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3500);

    return () => {
      clearTimeout(delayId);
    };
  }, [index]);

  return (
    <div className="animatedTextHolder" ref={textHolderRef}>
      <span className="textFirst" ref={textRef}>
        {titles[index]}
      </span>
    </div>
  );
};

export default AnimatedText;
