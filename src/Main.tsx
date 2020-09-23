import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Header } from 'react-native/Libraries/NewAppScreen'

import { Modal } from '../lib/modal/Modal'
import Toast from '../lib/toast/Toast'

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
          <TouchableOpacity onPress={() => Toast.info('Info', 'content')}>
            <Text>Toast Info</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Toast.error('Error', new Error())}>
            <Text>Toast Error</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Toast.warn('Warning', 'Something went wrong')}>
            <Text>Toast Warning</Text>
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
