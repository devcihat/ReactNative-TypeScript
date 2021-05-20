import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListenNowScreen from "../components/listenNow/ListenNowScreen";

const MainTab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="listenNow" component={ListenNowScreen} />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
