import React, { FC, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import "./navItem.scss";

interface NavItemProps extends React.HTMLAttributes<HTMLLIElement> {
  to: string;
  icon?: string;
}

const NavItem: FC<NavItemProps> = ({
  className,
  children,
  to,
  icon,
  ...props
}) => {
  const location = useLocation();

  const isActive = useCallback(() => {
    return location.pathname.startsWith(String(to));
  }, [location]);

  return (
    <li
      className={classNames("nav-item", className, {
        "nav-item--active": isActive(),
      })}
      {...props}
    >
      <Link className="nav-item__link" to={to}>
        <span className="nav-item__text">{children}</span>
      </Link>
    </li>
  );
};

export default NavItem;
