import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import SafeAreaAndroid from '../components/SafeAreaAndroid'
import StartMeeting from '../components/meeting/StartMeeting'
import { io } from "socket.io-client"


export default function MeetingRoom() {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();
  const [activeUsers, setActiveUsers] = useState()

  const joinRoom = () => {
    socket.emit('join-room', {
      roomId: roomId,
      userName: name
    })
  }

  useEffect(() => {
    const API_URL = "https://388b-2409-4063-6c0a-65e6-4a4-58c7-d314-a34d.ngrok.io/";
    const socket = io(`${API_URL}`)
    console.log("Sahil")
    socket.on("connection", () => console.log("Connected"));
    socket.on("all-users", (users) => {
      console.log(users)
      setActiveUsers(users)
  });
  },[])

  return (
    <SafeAreaAndroid>
      <View style={styles.container}>
        <StartMeeting
          name={name}
          setName={setName}
          roomId={roomId}
          setRoomId={setRoomId}
          joinRoom={joinRoom}
        />
      </View>
    </SafeAreaAndroid>
  )
}

const styles = StyleSheet.create({

})