import React from 'react';

// Styled
import styled from 'styled-components';
import { About} from '../style';
import Toggle from './Toggle';
import {LayoutGroup} from 'framer-motion';
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq variants={scrollReveal} initial='hidden' animate={controls} ref={element}>
        <h2>Any questions? <span>FAQ</span></h2>  
        <LayoutGroup>
            <Toggle title='How Do I Start?'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, magnam!</p>
                </div>
            </Toggle>
            <Toggle title='Daily Schedule'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, magnam!</p>
                </div>
            </Toggle>
            <Toggle title='Difirrent Payment Methods'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, magnam!</p>
                </div>
            </Toggle>
            <Toggle title='What Products Do You Offer'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, magnam!</p>
                </div>
            </Toggle>
        </LayoutGroup>
    </Faq>
  )
}

const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }

    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line {
        background-color: #cccccc;
        height: .2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;
