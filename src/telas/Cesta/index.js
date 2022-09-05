import React from "react";
import { View, StyleSheet, Dimensions, FlatList } from "react-native";
import Top from "./components/Top";
import Texto from "../../components/Texto";
import Detalhes from "./components/Detalhes";
import Item from "./components/Item";

const width = Dimensions.get("window").width;

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Top {...topo} />
              <View style={styles.cesta}>
                <Detalhes {...detalhes} />
                <Texto style={styles.title}>{itens.titulo}</Texto>
              </View>
            </>
          );
        }}
      />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
});
