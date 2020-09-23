import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Header } from 'react-native/Libraries/NewAppScreen'

import { Modal } from './app/modal/Modal'

export const Main = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{
            backgroundColor: Colors.lighter
          }}>
          <Header />
          <TouchableOpacity onPress={() => Modal.popup(<ModalContainer />)}>
            <Text>Popup</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Modal.sheet(<ModalContainer />)}>
            <Text>Sheet</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Modal.fullPage(<ModalContainer />)}>
            <Text>Fullscreen</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const ModalContainer = () => {
  return (
    <View style={{ backgroundColor: 'white', padding: 64 }}>
      <Text>Modal</Text>
    </View>
  )
}
