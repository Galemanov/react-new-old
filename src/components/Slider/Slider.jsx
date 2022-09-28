import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";

import { data } from "./data";
import { settings } from "./settings";
import { generateColorHsl } from "./helper";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./slider.css";

export const ReviewsSlider = () => {
    const list = data.map((el) => {
        const name = `${el.name.toUpperCase()}`;
        const color = generateColorHsl(name);

        return (
            <div key={el.id} className="card" id="reviews">
                <div className="circle">
                    <FaQuoteLeft fill="#ffffff" />
                </div>
                <p className="card-top">{el.description}</p>
                <div className="card-bottom">
                    <span style={{ backgroundColor: color }}>
                        {el.name[0].toUpperCase()}
                    </span>
                    <div>
                        <h3>{el.name}</h3>
                        <h4>{el.source}</h4>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <section className="section">
            <h3 className="section__subtitle">New-Old</h3>
            <h2 className="section__title">Отзывы</h2>
            <div className="container">
                <Slider {...settings}>{list}</Slider>
            </div>
        </section>
    );
};
