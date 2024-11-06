import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
export default function SimpleSlider() {
  const images = [
    {
      url: "https://entertainment.time.com/wp-content/uploads/sites/3/2012/09/warner_bros-_pictures_intro.jpg?w=720&h=480&crop=1",
      name1: "WARNER BROS",
    },
    {
      url: "https://entertainment.time.com/wp-content/uploads/sites/3/2012/09/warner_bros-_pictures_intro.jpg?w=720&h=480&crop=1",
      name1: "WARNER BROS",
    },
    {
      url: "https://entertainment.time.com/wp-content/uploads/sites/3/2012/09/warner_bros-_pictures_intro.jpg?w=720&h=480&crop=1",
      name1: "WARNER BROS",
    },
    {
      url: "https://entertainment.time.com/wp-content/uploads/sites/3/2012/09/warner_bros-_pictures_intro.jpg?w=720&h=480&crop=1",
      name1: "WARNER BROS",
    },
    {
      url: "https://entertainment.time.com/wp-content/uploads/sites/3/2012/09/warner_bros-_pictures_intro.jpg?w=720&h=480&crop=1",
      name1: "WARNER BROS",
    },
    {
      url: "https://entertainment.time.com/wp-content/uploads/sites/3/2012/09/warner_bros-_pictures_intro.jpg?w=720&h=480&crop=1",
      name1: "WARNER BROS",
    },
    {
      url: "https://entertainment.time.com/wp-content/uploads/sites/3/2012/09/warner_bros-_pictures_intro.jpg?w=720&h=480&crop=1",
      name1: "WARNER BROS",
    },
    {
      url: "https://entertainment.time.com/wp-content/uploads/sites/3/2012/09/warner_bros-_pictures_intro.jpg?w=720&h=480&crop=1",
      name1: "WARNER BROS",
    },
    {
      url: "https://entertainment.time.com/wp-content/uploads/sites/3/2012/09/warner_bros-_pictures_intro.jpg?w=720&h=480&crop=1",
      name1: "WARNER BROS",
    },
  ];

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    arrows: true,
  };
  return (
    <div className="">
      <Slider {...settings} className="">
        {images.map((obj) => (
          <div>
            <img src={obj.url} alt="" className=" w-[22.5rem]" />
            <h2 className=" text-lg font-bold">{obj.name1}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
}
