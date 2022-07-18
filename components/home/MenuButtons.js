import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome";


const items = [
  {
    id: 1,
    name: "video-camera",
    title: "New Meeting",
    customColor: "#FF751F",
  },
  {
    id: 2,
    name: "plus-square",
    title: "Join"
  },
  {
    id: 3,
    name: "calendar",
    title: "Schedule"
  },
  {
    id: 4,
    name: "upload",
    title: "Share Screen"
  },
  
]


export default function MenuButtons({ navigation }) {
  const openMeeting = () => {
    navigation.navigate("Room")
  }
  return (
    <View style={styles.container}>
    {items.map((data) => {
      return (
        <View key={data.id} style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={() => openMeeting()}
        style={{
          ...styles.button,
          backgroundColor: data.customColor ? data.customColor : "#0470DC"
        }}>
          <FontAwesome name={data.name} size={23} color="#efefef" />
        </TouchableOpacity>
        <Text style={styles.menuText}>{data.title}</Text>
      </View>
      )
    })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingBottom: 10,
    borderBottomColor: "#1F1F1F",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonContainer: {
    alignItems: "center",
    flex: 1
  },
  menuText: {
    color: "#858585",
    fontSize:  12,
    paddingTop:  10,
    fontWeight: "600"
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  }
})