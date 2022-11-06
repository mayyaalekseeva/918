import * as React from "react";
import classNames from "classnames";
import "./chessItem.scss";

interface ChessItemProps {
  title?: string;
  description?: string;
  img: ImageData;
  imageFirst?: boolean;
}

const ChessItem: React.FC<ChessItemProps> = ({
  title,
  description,
  img,
  imageFirst = false,
}) => {
  return (
    <div className={classNames("chess-item", imageFirst && "image-first")}>
      <div className="chess-item_about">
        <h3 className="chess-item_about__title">{title}</h3>
        <span className="chess-item_about__desc">{description}</span>
      </div>

      <div
        className="chess-item_img"
        style={{ background: `url(${img}) no-repeat center top` }}
      ></div>
    </div>
  );
};

export default ChessItem;
