import React from "react";


import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import CustomHeaderButton from "../components/HeaderButton";
import SupList from "../components/SupList";



const FavoritesScreen = props => {
  const availableItems = useSelector(state => state.items.favoriteItems)
  return <SupList list={availableItems} navigation={props.navigation} />;
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
