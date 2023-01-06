import * as React from "react";
import { defineMessages, useIntl } from "react-intl";
import Concept from "@assets/img/concept.jpg";
import Building from "@assets/img/building.jpg";
import Cuisine from "@assets/img/cuisine.jpg";
import Coffee from "@assets/img/coffee.jpg";
import Wine from "@assets/img/wine.jpg";
import ChessItem from "./chessItem";

const messages = defineMessages({
  chessConceptTitle: {
    id: "chessConceptTitle",
    defaultMessage: "Our Concept",
  },
  chessConceptDesc: {
    id: "chessConceptDesc",
    defaultMessage:
      "Bistro 9/18 is about breakfast, specialty coffee and author's wine list. The bar and the kitchen are open, so you can enjoy watching how your favorite dishes and drinks Thanks to the open kitchen and bar, you can watch the preparation of food and drinks - this is not only a fascinating process, but also an opportunity to learn about the terroir features of products and the intricacies of cooking.",
  },
  chessBuildingTitle: {
    id: "chessBuildingTitle",
    defaultMessage: "The Building",
  },
  chessBuildingDesc: {
    id: "chessBuildingtDesc",
    defaultMessage:
      "We settled in a historic building built in 1917. It used to be a police station, then — residential apartments. We tried to preserve the historical appearance of the facade, ceiling and walls, so now you can enjoy the entourage and originality of the interior.",
  },
  chessCuisineTitle: {
    id: "chessCuisineTitle",
    defaultMessage: "The Cuisine",
  },
  chessCuisineDesc: {
    id: "chessCuisineDesc",
    defaultMessage:
      "We love to amaze you with completely new dishes every season. In the menu, we combine clear and simple ingredients with unusual rare finds, maintaining a balance of interesting flavor combinations and different textures to create a vibrant gastronomic impression. We are not afraid to experiment and surprise. By the way, some breakfasts have already become legendary!",
  },
  chessCoffeeTitle: {
    id: "chessCoffeeTitle",
    defaultMessage: "About Coffee",
  },
  chessCoffeeDesc: {
    id: "chessCoffeeDesc",
    defaultMessage:
      "Have you noticed that morning really begins only when you have your first cup of coffee? In the bistro we make specialty coffee — only the best lots, the best baristas and equipment. Our task is to make your day a little more perfect with new gastronomic impressions, and it's up to you to choose a drink: balanced classics or dessert positions. Be sure to check out our alternative brew positions — baristas will be pleased to tell you about our coffee and the taste sensations you get when you try it.",
  },
  chessWineTitle: {
    id: "chessWineTitle",
    defaultMessage: "About Wine",
  },
  chessWineDesc: {
    id: "chessWineDesc",
    defaultMessage:
      "We love wine! And you? For you, we have selected both classic understandable wines and rarer collection bottles. Just tell the waiters about your preferences so that they can advise something especially for you.",
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
