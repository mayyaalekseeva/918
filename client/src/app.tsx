import React from "react";
import Routing from "./routing";
import { IntlProvider } from "@app/provider";

const App: React.FC = () => {
  return (
    <IntlProvider>
      <Routing />
    </IntlProvider>
  );
};

export default App;
