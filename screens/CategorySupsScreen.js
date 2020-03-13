import React from "react";
// alows to select a global management state and use it in this component
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import SupList from "../components/SupList";

const CategorySupsScreen = props => {
  const catId = props.navigation.getParam("categoryId");
  const availableItems = useSelector(state => state.items.filteredItems)
  const displayedItems = availableItems.filter(meal =>
    meal.categoryIds.includes(catId)
  );
  return <SupList list={displayedItems} navigation={props.navigation} />;
};

CategorySupsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title
  };
};

export default CategorySupsScreen;
