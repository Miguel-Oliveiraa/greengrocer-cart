import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

import topo from "../assets/topo.png";
import logo from "../assets/logo.png";

const width = Dimensions.get("window").width;

export default function Cesta() {
  return (
    <View style={styles.container}>
      <Image source={topo} style={styles.topo} />
      <Text style={styles.title}>Detalhe da cesta</Text>

      <View style={styles.cesta}>
        <Text style={styles.name}>Cesta de Verduras</Text>
        <View style={styles.farm}>
          <Image source={logo} style={styles.farmImage} />
          <Text style={styles.farmName}>Jenny Jack Farm</Text>
        </View>
        <Text style={styles.description}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda direto
          para sua cozinha.
        </Text>
        <Text style={styles.price}>R$ 40,00</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  title: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  name: {
    color: "#464646",
    fontSize: 26,
    fontWeight: "bold",
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
