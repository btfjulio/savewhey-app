import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategorySupsScreen from "../screens/CategorySupsScreen";
import SupDetailsScreen from "../screens/SupDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/Colors";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "bold",
    fontFamily: "open-sans-bold",
    fontSize: 25
  },
  headerTitleAlign: "center"
};

const SupsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Categorias"
      }
    },
    CategorySups: {
      screen: CategorySupsScreen
    },
    SupDetails: SupDetailsScreen
  },
  { defaultNavigationOptions: defaultStackNavOptions }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    SupDetail: SupDetailsScreen
  },
  { defaultNavigationOptions: defaultStackNavOptions }
);

const tabConfigNavigator = {
  //setup an identifier and point somewhere
  Sups: {
    screen: SupsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={30} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={30} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor
    }
  }
};

const SupsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabConfigNavigator, {
        shifting: true
      })
    : createBottomTabNavigator(tabConfigNavigator, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor
        }
      });

export default createAppContainer(SupsFavTabNavigator);
