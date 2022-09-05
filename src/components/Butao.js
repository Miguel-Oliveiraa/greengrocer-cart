import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Texto from "./Texto";

export function Butao({ children }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Texto style={styles.buttonText}>{children}</Texto>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
