import React from "react";
import { Platform, Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategorySupsScreen from "../screens/CategorySupsScreen";
import SupDetailsScreen from "../screens/SupDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import Colors from "../constants/Colors";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTintColor: Platform.OS === 'android' ? "white" : Colors.primaryColor ,
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
    fontSize: 20
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans"
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
          <Ionicons name="ios-flash" size={30} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Suplementos</Text>
        ) : (
          "Suplementos"
        )
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={30} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Favoritos</Text>
        ) : (
          "Favorites"
        )
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
          labelStyle: {
            fontFamily: "open-sans"
          },
          activeTintColor: Colors.primaryColor
        }
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  { defaultNavigationOptions: defaultStackNavOptions }
);
const MainNavigator = createDrawerNavigator(
  {
    SupsFav: {
      screen: SupsFavTabNavigator,
      navigationOptions: { drawerLabel: "Suplementos" }
    },
    Filters: FiltersNavigator
  },
  {
    drawerBackgroundColor: Colors.primaryColor,
    contentOptions: {
      inactiveTintColor: "white",
      activeTintColor: "white",
      labelStyle: {
        fontFamily: "open-sans-bold",
        fontSize: 20
      }
    }
  }
);

export default createAppContainer(MainNavigator);
