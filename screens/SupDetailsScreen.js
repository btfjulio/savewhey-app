import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SupDetailsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
      <Button
        title="Voltar para Promoções"
        onPress={() => {
          props.navigation.popToTop();
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

export default SupDetailsScreen;
