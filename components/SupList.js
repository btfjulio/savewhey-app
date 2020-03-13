import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import SupItem from "./SupItem";

const SupList = props => {
  const renderSupItem = itemData => {
    return (
      <SupItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectSup={() => {
          props.navigation.navigate({
            routeName: "SupDetails",
            params: {
              itemId: itemData.item.id,
              itemTitle: itemData.item.title
            }
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.list}
        renderItem={ renderSupItem }
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20
  }
});

export default SupList;
