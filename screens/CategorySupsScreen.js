import React from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import SupList from "../components/SupList";

const CategorySupsScreen = props => {
  const catId = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(catId));
  return <SupList list={displayedMeals} navigation={props.navigation} />;
};

CategorySupsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title
  };
};

export default CategorySupsScreen;
