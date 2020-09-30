import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'

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
