import classNames from "classnames";
import * as React from "react";
import "./burgerMenu.scss";

interface BurgerProps {
  isMenuActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu: React.FC<BurgerProps> = ({ isMenuActive, setMenuActive }) => {
  return (
    <div className="burger" onClick={() => setMenuActive(!isMenuActive)}>
      <a
        className={classNames("burger__btn", {
          "burger--active": isMenuActive,
        })}
      >
        <span></span>
      </a>
    </div>
  );
};

export default BurgerMenu;
