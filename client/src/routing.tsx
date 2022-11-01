import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages";
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
      {/* <span>routing</span> */}
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
