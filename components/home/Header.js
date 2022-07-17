import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'


export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity><Entypo name="notification" size={30} color="#cfcfcf" /></TouchableOpacity>
      <Text style={styles.heading}>Meet & Chat</Text>
      <TouchableOpacity><Entypo name="new-message" size={30} color="#cfcfcf" /></TouchableOpacity>
    </View>
  )
}

const styles =  StyleSheet.create({
  container: {
    color:  "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  heading: {
    color: "#efefef",
    fontSize: 20,
    fontWeight: "700",
  }
})