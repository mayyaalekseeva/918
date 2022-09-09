import * as React from "react";
import "./main.scss";

const Main: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <main className="public-main">
        <span>main</span>
        <div className="public-content">{children}</div>
      </main>
    </>
  );
};

export default Main;
