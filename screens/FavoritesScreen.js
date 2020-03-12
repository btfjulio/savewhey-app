import React from "react";
import SupList from "../components/SupList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = props => {
  const favSups = MEALS.filter(meal => meal.id === 'm2' || meal.id === "m1")
  return <SupList list={favSups} navigation={props.navigation} />;
};


FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites"
}


export default FavoritesScreen;
