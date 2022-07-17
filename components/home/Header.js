import { View, Text } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.container}>
      <Text>Sahil</Text>
    </View>
  )
}

const styles =  StyleSheet.create({
  container: {
    color:  "white"
  }
})