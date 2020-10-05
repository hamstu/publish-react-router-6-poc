import React from "react";
import { Outlet } from "react-router-dom";
import { AppShell } from "@bufferapp/ui";

export default () => (
  <AppShell
    content={<Outlet />}
    displaySkipLink
    enabledProducts={["publish"]}
    featureFlips={[]}
    activeProduct="publish"
    user={{
      email: "hamstu@gmail.com",
      name: "Hamish Macpherson",
      menuItems: []
    }}
  />
);
