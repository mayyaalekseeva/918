import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contacts, Main, Menu, Team } from "./pages";
import { Header } from "@app/components";
import Footer from "@app/components/footer";

const getRoutes = () => {
  const root = "";
  const menu = `${root}/menu`;
  const team = `${root}/team`;
  const reserve = `${root}/reserve`;
  const contacts = `${root}/contacts`;

  return {
    root,
    menu,
    team,
    reserve,
    contacts,
  };
};

export const routes = getRoutes();

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={routes.root} element={<Main />} />
        <Route path={routes.menu} element={<Menu />} />
        {/* <Route path={routes.team} element={<Team />} /> */}
        <Route path={routes.contacts} element={<Contacts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
