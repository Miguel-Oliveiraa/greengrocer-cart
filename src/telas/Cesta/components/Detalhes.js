import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Texto from "../../../components/Texto";
import { Butao } from "../../../components/Butao";

export default function Detalhes({
  nome,
  farmLogo,
  farmName,
  description,
  price,
  button,
}) {
  return (
    <>
      <Texto style={styles.name}>{nome}</Texto>
      <View style={styles.farm}>
        <Image source={farmLogo} style={styles.farmImage} />
        <Texto style={styles.farmName}>{farmName}</Texto>
      </View>
      <Texto style={styles.description}>{description}</Texto>
      <Texto style={styles.price}>{price}</Texto>
      <Butao>{button}</Butao>
    </>
  );
}

const styles = StyleSheet.create({
  name: {
    fontWeight: "bold",
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
  },
  farm: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  farmImage: {
    width: 32,
    height: 32,
  },
  farmName: {
    marginLeft: 12,
    fontSize: 16,
    lineHeight: 26,
  },
  description: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: "#2A9F85",
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 42,
    marginTop: 8,
  },
});
