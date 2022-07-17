import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import SearchBar from '../components/home/SearchBar'
import MenuButtons from '../components/home/MenuButtons'
import ContactsMenu from '../components/home/ContactsMenu'
import SafeAreaAndroid from "../components/SafeAreaAndroid";

export default function Home() {
  return (
   <SafeAreaAndroid>
      <Header/>
      <SearchBar/>
      <MenuButtons/>
      <ContactsMenu/>
   </SafeAreaAndroid>
  )
}