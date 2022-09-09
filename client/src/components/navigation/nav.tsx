import * as React from "react";
import { routes, Navigation } from "@app/routing";
import "./nav.scss";
import NavItem from "./navItem";

const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <ul className="nav__content">
        <NavItem title={Navigation.MAIN} to={routes.root}>
          {Navigation.MAIN}
        </NavItem>

        <NavItem title={Navigation.MENU} to={routes.menu}>
          {Navigation.MENU}
        </NavItem>

        <NavItem title={Navigation.TEAM} to={routes.team}>
          {Navigation.TEAM}
        </NavItem>

        <NavItem title={Navigation.RESERVE} to={routes.reserve}>
          {Navigation.RESERVE}
        </NavItem>

        <NavItem title={Navigation.CONTACTS} to={routes.contacts}>
          {Navigation.CONTACTS}
        </NavItem>
      </ul>
    </nav>
  );
};

export default Nav;
