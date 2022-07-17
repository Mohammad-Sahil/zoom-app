import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const ContactsMenuButton = [
  {
    type: "starred",
  },
  {
    type: "contact",
    name: "Mohammad Sahil",
    photo: require("../../assets/sahil.jpg"),
  },
  {
    type: "contact",
    name: "Tanmay Panduri",
    photo: require("../../assets/tanmay.png"),
  },
  {
    type: "contact",
    name: "Ayan Daripa",
    photo: require("../../assets/ayan.png"),
  },
  
]


export default function ContactsMenu() {
  return (
    <View style={styles.container}>
    {ContactsMenuButton.map((data, index) => {
      return (
        <View style={styles.row}>
        <View style={styles.starredIcons}>
          <AntDesign name="star" size={30} color="#efefef" />
        </View>
        <Text style={styles.text}>
          Starred
        </Text>
      </View>
      )
    })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center"
  },
  text: {
    color: "#ffff",
    paddingLeft: 15,
    fontSize: 18
  },
  starredIcons: {
    backgroundColor: "#333333",
    width:  55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:  20
  }
})