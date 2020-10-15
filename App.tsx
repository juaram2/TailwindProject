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
import { SafeAreaView, ScrollView, View, Text, TextInput, StatusBar, Image, Button, Alert } from 'react-native'

import { create } from 'tailwind-rn'
import styles from './styles.json'

const { tailwind } = create(styles)
import styled from 'styled-components/native'
import { t } from 'react-native-tailwindcss'

const App = () => {
  const ImageView = styled.View`
    ${[t.roundedTlLg, t.roundedTrLg, t.overflowHidden]}
  `
  const ButtonView = styled.View`
    ${[
      t.h10,
      t.flex,
      t.flexRow,
      t.justifyAround,
      t.alignCenter,
      t.bgGray200,
      t.roundedBlLg,
      t.roundedBrLg,
      t.overflowHidden
    ]}
  `

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={tailwind('p-4')}>
          <View style={tailwind('flex flex-row bg-gray-200 py-2 px-4 mb-4')}>
            <TextInput placeholder="What are you looking for?" style={tailwind('text-base')} />
          </View>

          <View style={tailwind('mb-4 bg-white rounded-lg shadow-lg')}>
            <ImageView>
              <Image
                style={tailwind('w-full h-40')}
                source={{
                  uri:
                    'https://chblobdev.icloudhospital.com/thumbnailcontainer/0b59a18f-db28-4754-89b4-af7bca99ab81-2988ffd6-d89b-4eb1-88da-eb42ce06188e.jpg'
                }}
              />
            </ImageView>
            <Text style={tailwind('px-6 pt-2 text-lg font-semibold')}>Dental Clinic</Text>
            <Text style={tailwind('px-6 text-sm text-gray-700')}>Dentistry, Cosmetology</Text>
            <Text style={tailwind('px-6 text-sm text-gray-700')}>3.2km (maps)</Text>
            <View style={tailwind('px-6 flex flex-row')}>
              <Text style={tailwind('text-sm text-gray-700')}>Next Available:</Text>
              <Text style={tailwind('text-sm text-red-700')}>Tomorrow</Text>
            </View>
            <View style={tailwind('px-6 pb-4 flex flex-row')}>
              <Text style={tailwind('text-sm text-gray-700')}>Consultation fees:</Text>
              <Text style={tailwind('text-sm text-red-700')}>~ $30</Text>
            </View>

            <ButtonView>
              <Button onPress={() => Alert.alert('Left button pressed')} title="info" color="#0F4C81" />
              <Button onPress={() => Alert.alert('Left button pressed')} title="Online Booking" />
            </ButtonView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default App
