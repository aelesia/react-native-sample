/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import DropdownAlert from 'react-native-dropdownalert'

import { Modal } from './lib/modal/Modal'
import { MyModal } from './lib/modal/MyModal'
import Toast from './lib/toast/Toast'
import { Cfg } from './src/app/configs/Cfg'
// @ts-ignore
import StorybookUIRoot from './src/debug/storybook'
import { Main } from './src/Main'

const App = () => {
  return (
    <>
      {Cfg.ENVIRONMENT !== 'storybook' ? <Main /> : <StorybookUIRoot />}
      <MyModal ref={ref => Modal.setModal(ref)} />

      <DropdownAlert ref={ref => Toast.setDropDown(ref)} errorColor={'#FB5F5F'} />
    </>
  )
}

export default App
