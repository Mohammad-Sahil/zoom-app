import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import SafeAreaAndroid from '../components/SafeAreaAndroid'
import StartMeeting from '../components/meeting/StartMeeting'
import { io } from "socket.io-client";
import { Camera } from 'expo-camera';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const listMenu = [
  {
    id: 1,
    name: "microphone",
    title: "Mute"
  },
  {
    id: 2,
    name: "video-camera",
    title: "Stop Video"
  },
  {
    id: 3,
    name: "upload",
    title: "Share Content"
  },
  {
    id: 4,
    name: "group",
    title: "Participants"
  },
]

export default function MeetingRoom() {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();
  const [activeUsers, setActiveUsers] = useState(["Mohammad", "Sahil"]);
  const [startCamera, setStartCamera] = useState(false);
  let socket = io("http://e9da-223-176-66-103.ngrok.io/");

  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Camera Permission Denied");
    }
  }

  const joinRoom = () => {
    socket.emit('join-room', {
      roomId: roomId,
      userName: name
    })
  }

  useEffect(() => {
    __startCamera();
    console.log("Sahil")
    socket.on("connection", () => console.log("Connected"));
    //   socket.on("all-users", (users) => {
    //     console.log(users)
    //     setActiveUsers(users)
    // });
  }, [])

  return (
    <SafeAreaAndroid>
      <View style={styles.container}>
        {startCamera ? (
          <View style={{ flex: 1 }}>
            <View style={styles.cameraContainer}>
              <Camera
                type={"front"}
                style={{
                  width: activeUsers.length == 0 ? "100%" : 200,
                  height: activeUsers.length == 0 ? 570 : 200,
                }}
              >
                {/* jsut a commit  */}
              </Camera>
              {activeUsers.map((user, index) => {
                return (
                  <View key={index} style={styles.activeUserContainer}>
                    <Text style={{ color: "white" }}>{user}</Text>
                  </View>
                )
              })}
            </View>
            <View style={styles.menu}>
              {listMenu.map((item) => {
                return (
                  <TouchableOpacity style={styles.tile} key={item.id}>
                    <FontAwesome name={item.name} size={24} color="white" />
                    <Text style={styles.textTile}>{item.title}</Text>
                  </TouchableOpacity>
                )
              })}

            </View>
          </View>
        ) : (
          <StartMeeting
            name={name}
            setName={setName}
            roomId={roomId}
            setRoomId={setRoomId}
            joinRoom={joinRoom}
          />
        )}
      </View>
    </SafeAreaAndroid>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 15
  },
  tile: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 15,
  },
  textTile: {
    color: "white",
    marginTop: 10,
  },
  activeUserContainer: {

  }
})