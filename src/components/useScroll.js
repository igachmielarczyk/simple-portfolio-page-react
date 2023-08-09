import { useInView } from 'react-intersection-observer';
import { useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

export const useScroll = () => {
  const controls = useAnimationControls();
  const [element, view] = useInView({ threshold: 0.1 });
  // if (view) {
  //   controls.start("show");
  // } 
  // else {
  //   controls.start("hidden");
  // }
  useEffect(() => {
    if (view) {
      controls.start("show");
    } 
    else {
      controls.start("hidden");
    }
  }, [view])
  return [element, controls];
};