import * as React from "react";
import classNames from "classnames";
import "./carousel.scss";

interface Props {
  children: JSX.Element[];
  currentSlide?: number;
}

const Carousel: React.FC<Props> = ({ children, currentSlide = 0 }) => {
  const activeSlide = children.map((slide, i) => (
    <div
      className={classNames("carousel-slide", currentSlide !== i && "disabled")}
    >
      {slide}
    </div>
  ));

  return <div className="carousel">{activeSlide}</div>;
};

export default Carousel;
