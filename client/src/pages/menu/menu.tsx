import * as React from "react";
import { Carousel } from "@app/components";
import Menu1 from "@assets/img/menu-1.jpg";
import Menu2 from "@assets/img/menu-2.jpg";
import Menu3 from "@assets/img/menu-3.jpg";
import Menu4 from "@assets/img/menu-4.jpg";
import Menu5 from "@assets/img/menu-5.jpg";
import Menu6 from "@assets/img/menu-6.jpg";
import Menu7 from "@assets/img/menu-7.jpg";
import Menu8 from "@assets/img/menu-8.jpg";
import Menu9 from "@assets/img/menu-9.jpg";
import Menu10 from "@assets/img/menu-10.jpg";

import "./menu.scss";

const Menu: React.FC = () => {
  const [pageNumber, setPageNumber] = React.useState<number>(0);

  // const [containerHeight, setContainerHeight] = React.useState<number>(0);
  // const MenuRef = React.useRef<HTMLDivElement>(null);

  // React.useEffect(() => {
  //   const containerHeight = MenuRef.current?.clientHeight;

  //   if (!containerHeight) {
  //     return;
  //   }
  //   setContainerHeight(containerHeight);
  // }, []);

  const previousPage = () => {
    if (pageNumber === 0) {
      return;
    } else {
      setPageNumber(pageNumber - 1);
    }
  };

  const nextPage = () => {
    if (pageNumber >= 9) {
      return;
    }
    setPageNumber(pageNumber + 1);
  };

  return (
    <section className="menu">
      <div className="menu-bcg" />

      <div className="menu-btns left" onClick={previousPage}></div>
      <div className="menu-slides">
        <Carousel currentSlide={pageNumber}>
          <img src={Menu1} alt="Page 1" />
          <img src={Menu2} alt="Page 2" />
          <img src={Menu3} alt="Page 3" />
          <img src={Menu4} alt="Page 4" />
          <img src={Menu5} alt="Page 5" />
          <img src={Menu6} alt="Page 6" />
          <img src={Menu7} alt="Page 7" />
          <img src={Menu8} alt="Page 8" />
          <img src={Menu9} alt="Page 9" />
          <img src={Menu10} alt="Page 10" />
        </Carousel>
      </div>
      <div className="menu-btns right" onClick={nextPage}></div>
    </section>
  );
};

export default Menu;
