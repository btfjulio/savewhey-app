import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategorySupsScreen from '../screens/CategorySupsScreen';
import SupDetailsScreen from "../screens/SupDetailsScreen";

const SupsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategorySups: {
    screen: CategorySupsScreen
  },
  SupDetails: SupDetailsScreen
});

export default createAppContainer(SupsNavigator);