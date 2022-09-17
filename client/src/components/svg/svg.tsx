import classnames from "classnames";
import * as React from "react";

import "./svg.scss";

interface SvgProps extends React.HTMLAttributes<HTMLInputElement> {
  content: string;
}

export const Svg: React.FC<SvgProps> = ({ content, className }) => (
  <i
    className={classnames("svg", className)}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

export default Svg;
