import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SafeAreaAndroid from '../components/SafeAreaAndroid'
import { TextInput } from 'react-native-gesture-handler'

export default function MeetingRoom() {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();
  return (
    <SafeAreaAndroid>
      <View style={styles.container}>
        <View style={styles.startMeetingContainer}>
          <View style={styles.info}>
            <TextInput
              style={styles.TextInput}
              value={name}
              placeholder="Enter Name"
              placeholderTextColor={'#767476'}
              onChangeText={text => setName(text)}
            />
          </View>
          <View style={styles.info}>
              <TextInput
                style={styles.TextInput}
                value={roomId}
                placeholder="Enter ID"
                placeholderTextColor={'#767476'}
                onChangeText={text => setRoomId(text)}
              />
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.startMeetingButton}
              onPress={() => {}}
            >
              <Text style={styles.buttonText}>Start Meeting</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaAndroid>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1c',
    flex: 1,
  },
  startMeetingContainer: {

  },
  info: {
    width: '100%',
    backgroundColor: '#373538',
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#484648',
    padding: 12,
    justifyContent: 'center',
    marginTop: 2,
  },
  TextInput: {
    color: "white",
    fontSize: 18,
  },
  startMeetingButton: {
    width: 350,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0470DC',
    height: 50,
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: 'bold',
  }
})