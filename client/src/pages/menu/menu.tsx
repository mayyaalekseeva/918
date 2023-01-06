import * as React from "react";
import { Carousel } from "@app/components";
import Menu1 from "@assets/img/menu-1.jpg";
import Menu2 from "@assets/img/menu-2.jpg";
import Menu3 from "@assets/img/menu-3.jpg";

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
    if (pageNumber >= 2) {
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
        </Carousel>
      </div>
      <div className="menu-btns right" onClick={nextPage}></div>
    </section>
  );
};

export default Menu;
