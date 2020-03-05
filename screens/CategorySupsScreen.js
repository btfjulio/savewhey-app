import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategorySupsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
      <Button
        title="Ver mais"
        onPress={() => {
          props.navigation.navigate({
            routeName: "SupDetails"
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategorySupsScreen;
