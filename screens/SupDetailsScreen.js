import React from "react";
import {
  ScrollView,
  Image,
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import DefaultText from "../components/DefaultText";
import CustomHeaderButton from "../components/HeaderButton";

import { MEALS } from "../data/dummy-data";

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const SupDetailsScreen = props => {
  const selectedItem = MEALS.find(
    item => item.id === props.navigation.getParam("itemId")
  );
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
  const itemId = navigationData.navigation.getParam("itemId");
  const selectedItem = MEALS.find(item => item.id === itemId);
  return {
    headerTitle: selectedItem.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log("mark as favorite")}
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
