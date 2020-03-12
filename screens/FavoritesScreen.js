import React from "react";


import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/HeaderButton";
import SupList from "../components/SupList";
import { MEALS } from "../data/dummy-data";


const FavoritesScreen = props => {
  const favSups = MEALS.filter(meal => meal.id === 'm2' || meal.id === "m1")
  return <SupList list={favSups} navigation={props.navigation} />;
};


FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};


export default FavoritesScreen;
