import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import Colors from "../constants/Colors";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.label}>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = props => {
  const { navigation } = props;

  const [isGlutenFree, SetIsGlutenFree] = useState(false);
  const [isLactoseFree, SetIsLactoseFree] = useState(false);
  const [isVegan, SetIsVegan] = useState(false);
  const [isVegetarian, SetIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const apliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    };
    console.log(apliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({
      save: saveFilters
    });
  }, [saveFilters]);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <View style={styles.filtersContainer}>
        <FilterSwitch
          label="Gluten Free"
          state={isGlutenFree}
          onChange={newValue => SetIsGlutenFree(newValue)}
        />
        <FilterSwitch
          label="Lactose Free"
          state={isLactoseFree}
          onChange={newValue => SetIsLactoseFree(newValue)}
        />
        <FilterSwitch
          label="Vegan"
          state={isVegan}
          onChange={newValue => SetIsVegan(newValue)}
        />
        <FilterSwitch
          label="Vegetarian"
          state={isVegetarian}
          onChange={newValue => SetIsVegetarian(newValue)}
        />
      </View>
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: "Filter Sups",
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
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={() => {
            navData.navigation.getParam("save")();
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flex: 1,
    alignItems: "center"
  },
  filtersContainer: {
    width: "60%",
    paddingVertical: 10
  },
  filterContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
    marginVertical: 10
  },
  label: {
    fontSize: 15
  }
});

export default FiltersScreen;
