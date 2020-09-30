import React, { useRef, useState } from 'react'
import { ActivityIndicator, Platform, TextInput, View } from 'react-native'

import { SvgSearch } from '../../../assets/svg/SvgSearch'
import { Row } from '../../../components/general/General'
import { IconButton } from '../../../components/general/IconButton'
import { cl, sp, sz } from '../../../style/Style'

export const SearchBar = (p: { onSearch: (searchText: string) => any }) => {
  const [text, setText] = useState<string>('')
  const textInput = useRef<TextInput>(null)
  return (
    <Row
      style={{
        marginHorizontal: sp.sm,
        marginVertical: sp.xs
      }}>
      <View
        style={{
          flexGrow: 1,
          backgroundColor: '#EEE',
          marginRight: sp.sm,
          paddingVertical: Platform.OS === 'ios' ? sp.xs : 0,
          paddingHorizontal: sp.sm,
          borderRadius: 10
        }}>
        <TextInput
          autoCapitalize={'none'}
          autoCorrect={false}
          ref={textInput}
          clearTextOnFocus={true}
          placeholder={'Search'}
          placeholderTextColor={cl.grey2}
          value={text}
          onChangeText={t => {
            setText(t)
          }}
        />
      </View>
      <IconButton
        svg={SvgSearch}
        fill={cl.grey2}
        onPress={async () => {
          await p.onSearch(text)
          textInput.current?.blur()
        }}
      />
    </Row>
  )
}
