import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Platform
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";

import Colors from '../constants/Colors';

const CategoriesScreen = props => {
  
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate("CategorySups");
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Categorias",
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "bold",
    textAlign: "center",
    flexGrow: 1,
    alignSelf: "center"
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CategoriesScreen;
