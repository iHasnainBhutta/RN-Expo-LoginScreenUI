import React, { Component } from "react";

import { NavigationContainer as Container } from "@react-navigation/native";
import AppStack from "./AppStack";

const NavigationContainer = (props) => {
  return (
    <Container>
      <AppStack />
    </Container>
  );
};

export default NavigationContainer;
