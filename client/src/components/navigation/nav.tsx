import * as React from "react";
import { routes } from "@app/routing";
import "./nav.scss";
import NavItem from "./navItem";
import { defineMessages, useIntl } from "react-intl";
import classNames from "classnames";

const messages = defineMessages({
  navMain: {
    id: "navMain",
    defaultMessage: "Main",
  },
  navMenu: {
    id: "navMenu",
    defaultMessage: "Menu",
  },
  navTeam: {
    id: "navTeam",
    defaultMessage: "Team",
  },
  navReserve: {
    id: "navReserve",
    defaultMessage: "Reserve",
  },
  navContacts: {
    id: "navContacts",
    defaultMessage: "Contacts",
  },
});

interface Props {
  isMenuActive: boolean;
  handleMenu: any;
}

const Nav: React.FC<Props> = ({ isMenuActive, handleMenu }) => {
  const intl = useIntl();

  return (
    <nav className={classNames("nav", { nav__active: isMenuActive })}>
      <ul className={classNames("nav__content")}>
        <NavItem
          title={intl.formatMessage(messages.navMain)}
          to={routes.root}
          onClick={handleMenu}
        >
          {intl.formatMessage(messages.navMain)}
        </NavItem>

        <NavItem
          title={intl.formatMessage(messages.navMenu)}
          to={routes.menu}
          onClick={handleMenu}
        >
          {intl.formatMessage(messages.navMenu)}
        </NavItem>

        {/* <NavItem
          title={intl.formatMessage(messages.navTeam)}
          to={routes.team}
          onClick={handleMenu}
        >
          {intl.formatMessage(messages.navTeam)}
        </NavItem> */}

        {/* <NavItem
          title={intl.formatMessage(messages.navReserve)}
          to={routes.reserve}
          onClick={handleMenu}
        >
          {intl.formatMessage(messages.navReserve)}
        </NavItem> */}

        <NavItem
          title={intl.formatMessage(messages.navContacts)}
          to={routes.contacts}
          onClick={handleMenu}
        >
          {intl.formatMessage(messages.navContacts)}
        </NavItem>
      </ul>
    </nav>
  );
};

export default Nav;
