import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Header } from 'react-native/Libraries/NewAppScreen'

import { Modal } from '../lib/modal/Modal'
import Toast from '../lib/toast/Toast'
import { PictureWallPage } from './layouts/PictureWall/PictureWall'

export const Main = () => {
  return (
    <>
      <PictureWallPage />
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
