import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from '../components/HeaderButton';

import { MEALS } from "../data/dummy-data";

const SupDetailsScreen = props => {
  const selectedItem = MEALS.find(
    item => item.id === props.navigation.getParam("itemId")
  );
  return (
    <View style={styles.screen}>
      <Text>{selectedItem.title}</Text>
      <Button
        title="Voltar para Promoções"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
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
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SupDetailsScreen;
