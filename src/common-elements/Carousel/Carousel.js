import React from 'react';

import ted from '../../assets2/logos/ted.png'
import forbes from '../../assets2/logos/Forbes-logo.png'
import entrepreneur from '../../assets2/logos/Entrepreneur_logo.png'
import globe from '../../assets2/logos/globe.png'
import nasdaq from '../../assets2/logos/nasdaq.png'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from './Carousel.scss';
const logos = [nasdaq, forbes, ted, entrepreneur, globe];

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const logosDimensions = [{ width: '16rem', height: '4rem', marginTop: '2.5rem', marginLeft: '11rem'}, { width: '14.7rem', height: '8.3rem', marginBottom: '4rem', marginLeft: '11rem'}, { width: '12.3rem', height: '4.5rem', marginTop: '2rem', marginLeft: '12rem'}, { width: '23.8rem', height: '9rem', marginBottom: '4rem', marginLeft: '8rem'}, { width: '11.2rem', height: '9.4rem', marginBottom:'4rem', marginLeft: '13rem'}];
function CarouselComp(props) {
    return (
        <Carousel 
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        containerClass={styles.carouselStyle}
        dotListClass="custom-dot-list-style"
    >
      { logos.map((logo, index) => (
      <div>
         <img src={logo} style={logosDimensions[index]} alt={logo} />
        </div>
      ))}
</Carousel>
    );
}

export default CarouselComp;