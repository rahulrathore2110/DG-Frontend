import { Outlet} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import React from "react";

const App = () => {
  return (
    <RootLayout >
      <Outlet />
    </RootLayout>
  );
};

export default App;
