import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";
import React from 'react'

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});

export default function SafeAreaAndroid({ children }) {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>{children}</SafeAreaView>
  )
}
