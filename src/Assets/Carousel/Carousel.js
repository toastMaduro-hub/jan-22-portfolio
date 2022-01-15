import React, { useState } from "react";
import CarouselData from "./CarouselData";
import './Carousel.css';

const Carousel = () => {

    const [current, setCurrent] = useState(0);

    const length = CarouselData.length;

    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const prev = () => {
        setCurrent(current === 0 ? length - 1: current - 1)
    };

    return (
        <div className="container">
            <div className="carousel">

                <div>
                    <button className='left-button' id="btns" onClick={prev}>&lt;</button>
                    <button className='right-button' id="btns" onClick={next}>&gt;</button>
                </div>


                {CarouselData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<img src={slide.image} key={slide.id} alt={slide.text}/>)}
                            {index === current && <h1 className="text">{slide.text}</h1>}
                        </div>

                     )
                })}
            </div>
        </div>
    )
}

export default Carousel;

