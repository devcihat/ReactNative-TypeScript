import React from "react";
import { Button } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListenNowScreen from "../components/listenNow/ListenNowScreen";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../components/search/SearchScreen";
import LibraryScreen from "../components/library/LibraryScreen";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import PodcastDetailScreen from "../components/podcastDetails/PodcastDetailScreen";

const ListenNowStack = createStackNavigator();

const ListenNowStackNavigator = () => {
  return (
    <ListenNowStack.Navigator>
      <ListenNowStack.Screen
        name="ListenNow"
        component={ListenNowScreen}
      />
    </ListenNowStack.Navigator>
  );
};

const SearchStack = createStackNavigator();

const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator screenOptions={{
      headerTintColor:'#0BB5FF'
    }}>
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
      />
      <SearchStack.Screen
        name="PodcastDetails"
        component={PodcastDetailScreen}
        options = {
          {headerTitle:''}
        }
      />
    </SearchStack.Navigator>
  );
};

const LibraryStack = createStackNavigator();

const LibraryStackNavigator = () => {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        name="LibraryScreen"
        component={LibraryScreen}
      />
    </LibraryStack.Navigator>
  );
};

const MainTab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
    >
      <MainTab.Screen
        options={{
          title: "Listen Now",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name="listenNow"
        component={ListenNowStackNavigator}
      />
      <MainTab.Screen
        options={{
          title: "Search Screen",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="search" color={color} size={size} />
          ),
        }}
        name="Search"
        component={SearchStackNavigator}
      />
      <MainTab.Screen
        options={{
          title: "LibraryScreen",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="library" color={color} size={size} />
          ),
        }}
        name="Library"
        component={LibraryStackNavigator}
      />
      
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
