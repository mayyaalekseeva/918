import * as React from "react";
import "./main.scss";

type MainProps = {
  children: React.ReactNode;
};

const Main: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      {/* <Header /> */}
      <main className="public-main">
        {/* <Navigation /> */}
        <span>main</span>
        <div className="public-content">{children}</div>
      </main>
    </>
  );
};

export default Main;
