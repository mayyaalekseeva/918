import * as React from "react";
import { routes } from "@app/routing";
import "./nav.scss";
import NavItem from "./navItem";
import { defineMessages, useIntl } from "react-intl";

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

const Nav: React.FC = () => {
  const intl = useIntl();

  return (
    <nav className="nav">
      <ul className="nav__content">
        <NavItem title={intl.formatMessage(messages.navMain)} to={routes.root}>
          {intl.formatMessage(messages.navMain)}
        </NavItem>

        <NavItem title={intl.formatMessage(messages.navMenu)} to={routes.menu}>
          {intl.formatMessage(messages.navMenu)}
        </NavItem>

        <NavItem title={intl.formatMessage(messages.navTeam)} to={routes.team}>
          {intl.formatMessage(messages.navTeam)}
        </NavItem>

        <NavItem
          title={intl.formatMessage(messages.navReserve)}
          to={routes.reserve}
        >
          {intl.formatMessage(messages.navReserve)}
        </NavItem>

        <NavItem
          title={intl.formatMessage(messages.navContacts)}
          to={routes.contacts}
        >
          {intl.formatMessage(messages.navContacts)}
        </NavItem>
      </ul>
    </nav>
  );
};

export default Nav;
