import React from 'react';
import cx from 'classnames';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from './Carousel.scss';

function CarouselComp(props) {
    return (
      <div className={styles.Carousel}>
        <Carousel
          containerClass={cx("carousel-container", styles.CarouselContainer)}
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={props.responsive}
          infinite={true}
          keyBoardControl={true}
          dotListClass="custom-dot-list-style"
        >
        { props.children}
      </Carousel>
    </div>
    );
}

export default CarouselComp;