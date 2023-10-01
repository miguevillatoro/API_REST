import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Brands.css";

function Brands() {
    const settings = {
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: false,
        arrows: false,
        dots: false,
        responsive: [
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 4,
            },
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 3,
            },
        },
        {
            breakpoint: 576,
            settings: {
            slidesToShow: 2,
            },
        },
        {
            breakpoint: 300,
            settings: {
            slidesToShow: 1,
            },
        },
        ],
    };

    return (
        <div className="brand">
        <div className="container-fluid">
            <Slider {...settings}>
            <div className="brand-item">
                <img src="/src/img/brand-1.png" alt="" />
            </div>
            <div className="brand-item">
                <img src="/src/img/brand-2.png" alt="" />
            </div>
            <div className="brand-item">
                <img src="/src/img/brand-3.png" alt="" />
            </div>
            <div className="brand-item">
                <img src="/src/img/brand-4.png" alt="" />
            </div>
            <div className="brand-item">
                <img src="/src/img/brand-5.png" alt="" />
            </div>
            <div className="brand-item">
                <img src="/src/img/brand-6.png" alt="" />
            </div>
            </Slider>
        </div>
        </div>
    );
}

export default Brands;
