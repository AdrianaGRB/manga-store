import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import { InfoPopularText, PopularContainer } from "./PopularStyles";
import "./slider.css";
import { WitheText } from "../UI/StyledTexts";
import { StyledSpan } from "../Navbar/NavbarStyles";
import { useSelector } from "react-redux";
import Popup from "../Popup/Popup";

const Popular = () => {
  const settings = {
    infitine: true,
    lazyload: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
  };

  const [imageIndex, setImageIndex] = useState(0);
  const [togglePopup, setTogglePopup] = useState(false);
  const [findId, setFindId] = useState();
  const popularmanga = useSelector((state) => state.popular.popular);

  const handleTogglePopup = (id) => {
    setTogglePopup(!togglePopup);
    setFindId(id);
  };

  return (
    <>
      <PopularContainer>
        <WitheText style={{ padding: "10px" }}>
          Los <StyledSpan> más </StyledSpan> populares.
        </WitheText>
        <div className="slider-styles">
          <Slider className="sliders" {...settings}>
            {popularmanga.map((manga, idx) => (
              <div
                key={idx}
                className={idx === imageIndex ? "slide-active" : "slide"}
              >
                <img
                  className="imgSlider"
                  key={idx}
                  src={manga.img}
                  alt={manga}
                  id={idx}
                  onClick={() => handleTogglePopup(manga.id)}
                />
                <p className="sliderText"> {manga.name} </p>
              </div>
            ))}
          </Slider>

        </div>
        <Popup
          finId={findId}
          handleTogglePopup={handleTogglePopup}
          togglePopup={togglePopup}
        />
      </PopularContainer>
    </>
  );
};

export default Popular;
