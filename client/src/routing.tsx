import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages";

const getRoutes = () => {
  const root = "";
  const about = `${root}/about`;

  return {
    root,
    about,
  };
};

export const routes = getRoutes();

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <span>routing</span>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
