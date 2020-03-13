import React, { useEffect, useCallback } from "react";
import {
  ScrollView,
  Image,
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import DefaultText from "../components/DefaultText";
import CustomHeaderButton from "../components/HeaderButton";
import { toggleFavorite } from "../store/actions/items";

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const SupDetailsScreen = props => {
  const availableItems = useSelector(state => state.items.items);
  const selectedItem = availableItems.find(
    item => item.id === props.navigation.getParam("itemId")
  );

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(selectedItem.id));
  }, [dispatch, selectedItem.id]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedItem.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedItem.duration}m</DefaultText>
        <DefaultText>{selectedItem.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedItem.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.textTitle}>Ingredients</Text>
      {selectedItem.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.textTitle}>Steps</Text>
      {selectedItem.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

SupDetailsScreen.navigationOptions = navigationData => {
  const itemTitle = navigationData.navigation.getParam("itemTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  return {
    headerTitle: itemTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => toggleFavorite}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between"
  },
  textTitle: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center"
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10
  }
});

export default SupDetailsScreen;
