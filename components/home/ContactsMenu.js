import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const ContactsMenuButton = [
  {
    type: "starred",
    name: "Starred",
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
  {
    type: "contact",
    name: "Genelia D'Souza",
    photo: require("../../assets/genelia.jpg"),
  },
  {
    type: "contact",
    name: "Joe Doe",
    photo: require("../../assets/joe.jpg"),
  },
  
]


export default function ContactsMenu() {
  return (
    <View style={styles.container}>
    {ContactsMenuButton.map((data, index) => {
      return (
        <TouchableOpacity key={index}>
        <View style={styles.row}>
          {data.type === "starred" ? (
            <View style={styles.starredIcons}>
              <AntDesign name="star" size={30} color="#efefef" />
            </View>
          ) : (
              <Image source={data.photo} style={styles.image} />
          )}
          <Text style={styles.text}>
            {data.name}
          </Text>
      </View>
      </TouchableOpacity>
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
  },
  image: {
    width: 55,
    height: 55,
    borderRadius:  20,
  }
})