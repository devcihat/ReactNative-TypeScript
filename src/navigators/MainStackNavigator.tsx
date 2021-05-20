import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainTabNavigator from "./MainTabNavigator";


const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Tabs" component={MainTabNavigator} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
