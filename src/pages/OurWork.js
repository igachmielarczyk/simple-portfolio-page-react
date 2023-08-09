import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ScrollTop from "../components/ScrollTop";

// Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
import { useScroll } from '../components/useScroll';

// Animations
import {motion} from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer } from '../animation';

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
    exit='exit'
    variants={pageAnimation} 
    initial='hidden' 
    animate='show'
    style={{background: '#fff'}}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
        <Movie>
          <motion.h2 variants={fade}>The Athlete</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/the-athlete">
            <Hide>
              <motion.img variants={photoAnim} src={athlete} alt="athlete" />
            </Hide>
          </Link>
        </Movie>
        <Movie ref={element} variants={fade} initial='hidden' animate={controls}>
          <h2>The Racer</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/the-racer">
            <img src={theracer} alt="The Racer" />
          </Link>
        </Movie>
        <Movie ref={element2} variants={fade} initial='hidden' animate={controls2}>
          <h2>Good Times</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/good-times">
            <img src={goodtimes} alt="Good Times" />
          </Link>
        </Movie>
        <ScrollTop />
    </Work>
  )
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: .5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fffebf;
  z-index: 3;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;