import classNames from "classnames";
import * as React from "react";
import "./burgerMenu.scss";

const BurgerMenu: React.FC = () => {
  const [isBurgerActive, setBurgerActive] = React.useState<boolean>(false);

  React.useEffect(() => {
    setBurgerActive(false);
  }, []);

  const handleBurgerClick = () => {
    setBurgerActive(!isBurgerActive);
    console.log(isBurgerActive);
  };

  return (
    <div className="burger" onClick={handleBurgerClick}>
      <a
        href="#"
        className={classNames("burger__btn", {
          burger__active: isBurgerActive,
        })}
      >
        <span></span>
      </a>
    </div>
  );
};

export default BurgerMenu;
