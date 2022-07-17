import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import SearchBar from '../components/home/SearchBar'
import MenuButtons from '../components/home/MenuButtons'
import ContactsMenu from '../components/home/ContactsMenu'
import SafeAreaAndroid from "../components/SafeAreaAndroid";

export default function Home() {
  return (
   <SafeAreaAndroid>
      <View style={styles.container}>
        <Header/>
        <SearchBar/>
        <MenuButtons/>
        <ContactsMenu/>
      </View>
   </SafeAreaAndroid>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1c',
    color: '#fff',
    padding: 15
  }
})