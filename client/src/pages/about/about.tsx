import { Avatar } from "@mui/material";
import Chip from "@mui/material/Chip";
import * as React from "react";
import img from "@assets/img/maiia.jpg";
import "./about.scss";
import { Box } from "@mui/system";
import JsImg from "@assets/img/js.png";
import TsImg from "@assets/img/ts.png";
import DockerImg from "@assets/img/docker.png";
import WebpackImg from "@assets/img/webpack.png";
import MuiImg from "@assets/img/material.png";
import ReactImg from "@assets/img/react.png";
import OrionImg from "@assets/img/orion.png";

const About: React.FC = () => {
  const [isChipActive, setIsChipActive] = React.useState(true);

  const handleClickStack = () => {
    setIsChipActive(true);
    console.log("isChipActive", isChipActive);
  };

  const handleClickExp = () => {
    setIsChipActive(false);
    console.log("isChipActive", isChipActive);
  };

  const Stack = () => {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "space-evenly" }}
        className="stack"
      >
        <img src={JsImg} alt="JS" />
        <img src={TsImg} alt="TS" />
        <img src={DockerImg} alt="Docker" />
        <img src={WebpackImg} alt="Webpack" />
        <img src={MuiImg} alt="Material" />
        <img src={ReactImg} alt="React" />
      </Box>
    );
  };

  const Expirience = () => {
    return (
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <img src={OrionImg} alt="Orion" />
        <Box></Box>
      </Box>
    );
  };

  return (
    <div className="container">
      <h1>About me</h1>
      <div className="about">
        <Avatar
          alt="Maiia Alexeeva"
          src={img}
          sx={{ width: 150, height: 150 }}
        />
        <p>
          This is the first project i made by myself. I tried to use modern
          technologies, such as React v18, React Router v6, Material UI v5 etc.
          Drop cap or dropped capital is a large capital letter used as a
          decorative element at the beginning of a paragraph or section. The
          size of a drop cap is usually two or more lines.
        </p>
      </div>

      <div className="chip">
        <Chip
          label="My Stack"
          variant={isChipActive ? "filled" : "outlined"}
          color="primary"
          onClick={handleClickStack}
        />
        <Chip
          label="My Experience"
          color="primary"
          variant={isChipActive ? "outlined" : "filled"}
          onClick={handleClickExp}
        />
      </div>
      {isChipActive ? <Stack /> : <Expirience />}
    </div>
  );
};

export default About;
