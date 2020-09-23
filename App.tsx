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

import { Cfg } from './src/app/configs/Cfg'
import { Modal } from './src/app/modal/Modal'
import { MyModal } from './src/app/modal/MyModal'
import StorybookUIRoot from './src/debug/storybook'
import { Main } from './src/Main'

const App = () => {
  return (
    <>
      {Cfg.ENVIRONMENT !== 'storybook' ? <Main /> : <StorybookUIRoot />}
      <MyModal ref={ref => Modal.setModal(ref)} />
    </>
  )
}

export default App
