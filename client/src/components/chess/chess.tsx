import * as React from "react";
import { defineMessages, useIntl } from "react-intl";
import Concept from "@assets/img/concept.jpg";
import Building from "@assets/img/building.jpg";
import Cuisine from "@assets/img/macmuffin.jpg";
import Coffee from "@assets/img/coffee.jpg";
import Wine from "@assets/img/wine.jpg";
import ChessItem from "./chessItem";

const messages = defineMessages({
  chessConceptTitle: {
    id: "chessConceptTitle",
    defaultMessage: "Something about concept",
  },
  chessConceptDesc: {
    id: "chessConceptDesc",
    defaultMessage:
      "Some description concept Some description concept Some description concept Some description concept Some description concept Some description concept",
  },
  chessBuildingTitle: {
    id: "chessBuildingTitle",
    defaultMessage: "Something about building",
  },
  chessBuildingDesc: {
    id: "chessBuildingtDesc",
    defaultMessage:
      "Some description building Some description building Some description building Some description building Some description building Some description building",
  },
  chessCuisineTitle: {
    id: "chessCuisineTitle",
    defaultMessage: "Something about cuisine",
  },
  chessCuisineDesc: {
    id: "chessCuisineDesc",
    defaultMessage:
      "Some description cuisine Some description cuisine Some description cuisine Some description cuisine Some description cuisine Some description cuisine",
  },
  chessCoffeeTitle: {
    id: "chessCoffeeTitle",
    defaultMessage: "Something about coffee",
  },
  chessCoffeeDesc: {
    id: "chessCoffeeDesc",
    defaultMessage:
      "Some description coffee Some description coffee Some description coffee Some description coffee Some description coffee Some description coffee",
  },
  chessWineTitle: {
    id: "chessWineTitle",
    defaultMessage: "Something about wine",
  },
  chessWineDesc: {
    id: "chessWineDesc",
    defaultMessage:
      "Some description wine Some description wine  Some description wine Some description wine Some description wine ",
  },
});

const Chess: React.FC = () => {
  const intl = useIntl();

  const chessParams = [
    {
      title: messages.chessConceptTitle,
      desc: messages.chessConceptDesc,
      img: Concept,
    },
    {
      title: messages.chessBuildingTitle,
      desc: messages.chessBuildingDesc,
      img: Building,
    },
    {
      title: messages.chessCuisineTitle,
      desc: messages.chessCuisineDesc,
      img: Cuisine,
    },
    {
      title: messages.chessCoffeeTitle,
      desc: messages.chessCoffeeDesc,
      img: Coffee,
    },
    {
      title: messages.chessWineTitle,
      desc: messages.chessWineDesc,
      img: Wine,
    },
  ];

  return (
    <>
      {chessParams.map((item, i) => {
        let imageFirst: boolean;

        i % 2 !== 0 ? (imageFirst = true) : (imageFirst = false);

        return (
          <ChessItem
            key={i}
            title={intl.formatMessage(item.title)}
            description={intl.formatMessage(item.desc)}
            img={item.img}
            imageFirst={imageFirst}
          />
        );
      })}
    </>
  );
};

export default Chess;
