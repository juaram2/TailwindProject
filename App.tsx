/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Image,
  Button,
  Alert,
} from 'react-native';

import tailwind from 'tailwind-rn';
// import { t } from 'react-native-tailwindcss';
// import styled from 'styled-components/native';

declare const global: {HermesInternal: null | {}};

// const SView = styled.View`
//   ${[t.mB4, t.bgGray200, t.rounded, t.p3]}
// `;
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={tailwind('p-4')}>
          {/* <SView>
            <Text>Some unstyled text in a styled view</Text>
          </SView> */}
          <View style={tailwind('flex flex-row bg-gray-200 py-2 px-4 mb-4')}>
            <TextInput
              placeholder="What are you looking for?"
              style={tailwind('text-base')}
            />
          </View>

          <View style={tailwind('w-full mb-4')}>
            <Image
              style={tailwind('w-full h-40')}
              source={{
                uri:
                  'https://chblobdev.icloudhospital.com/thumbnailcontainer/0b59a18f-db28-4754-89b4-af7bca99ab81-2988ffd6-d89b-4eb1-88da-eb42ce06188e.jpg'
              }}
            />
            <Text style={tailwind('px-6 pt-2 text-lg font-semibold')}>
              Dental Clinic
            </Text>
            <Text style={tailwind('px-6 text-sm text-gray-700')}>
              Dentistry, Cosmetology
            </Text>
            <Text style={tailwind('px-6 text-sm text-gray-700')}>
              3.2km (maps)
            </Text>
            <View style={tailwind('px-6 flex flex-row')}>
              <Text style={tailwind('text-sm text-gray-700')}>
                Next Available:
              </Text>
              <Text style={tailwind('text-sm text-red-700')}>Tomorrow</Text>
            </View>
            <View style={tailwind('px-6 pb-4 flex flex-row')}>
              <Text style={tailwind('text-sm text-gray-700')}>
                Consultation fees:
              </Text>
              <Text style={tailwind('text-sm text-red-700')}>~ $30</Text>
            </View>

            <View style={tailwind('w-full flex flex-row bg-gray-200')}>
              <Button
                onPress={() => Alert.alert('Left button pressed')}
                title="info"
                color="#0F4C81"
              />
              <Button
                onPress={() => Alert.alert('Left button pressed')}
                title="Online Booking"
              />
            </View>
          </View>

          <View style={tailwind('w-full mb-4')}>
            <Image
              style={tailwind('w-full h-40')}
              source={{
                uri:
                  'https://chblobdev.icloudhospital.com/thumbnailcontainer/0b59a18f-db28-4754-89b4-af7bca99ab81-2988ffd6-d89b-4eb1-88da-eb42ce06188e.jpg'
              }}
            />
            <Text style={tailwind('px-6 pt-2 text-lg font-semibold')}>
              Dental Clinic
            </Text>
            <Text style={tailwind('px-6 text-sm text-gray-700')}>
              Dentistry, Cosmetology
            </Text>
            <Text style={tailwind('px-6 text-sm text-gray-700')}>
              3.2km (maps)
            </Text>
            <View style={tailwind('px-6 flex flex-row')}>
              <Text style={tailwind('text-sm text-gray-700')}>
                Next Available:
              </Text>
              <Text style={tailwind('text-sm text-red-700')}>Tomorrow</Text>
            </View>
            <View style={tailwind('px-6 pb-4 flex flex-row')}>
              <Text style={tailwind('text-sm text-gray-700')}>
                Consultation fees:
              </Text>
              <Text style={tailwind('text-sm text-red-700')}>~ $30</Text>
            </View>

            <View style={tailwind('w-full flex flex-row bg-gray-200')}>
              <Button
                onPress={() => Alert.alert('Left button pressed')}
                title="info"
                color="#0F4C81"
              />
              <Button
                onPress={() => Alert.alert('Left button pressed')}
                title="Online Booking"
              />
            </View>
          </View>

          <View style={tailwind('w-full mb-4')}>
            <Image
              style={tailwind('w-full h-40')}
              source={{
                uri:
                  'https://chblobdev.icloudhospital.com/thumbnailcontainer/0b59a18f-db28-4754-89b4-af7bca99ab81-2988ffd6-d89b-4eb1-88da-eb42ce06188e.jpg'
              }}
            />
            <Text style={tailwind('px-6 pt-2 text-lg font-semibold')}>
              Dental Clinic
            </Text>
            <Text style={tailwind('px-6 text-sm text-gray-700')}>
              Dentistry, Cosmetology
            </Text>
            <Text style={tailwind('px-6 text-sm text-gray-700')}>
              3.2km (maps)
            </Text>
            <View style={tailwind('px-6 flex flex-row')}>
              <Text style={tailwind('text-sm text-gray-700')}>
                Next Available:
              </Text>
              <Text style={tailwind('text-sm text-red-700')}>Tomorrow</Text>
            </View>
            <View style={tailwind('px-6 pb-4 flex flex-row')}>
              <Text style={tailwind('text-sm text-gray-700')}>
                Consultation fees:
              </Text>
              <Text style={tailwind('text-sm text-red-700')}>~ $30</Text>
            </View>

            <View style={tailwind('w-full flex flex-row bg-gray-200')}>
              <Button
                onPress={() => Alert.alert('Left button pressed')}
                title="info"
                color="#0F4C81"
              />
              <Button
                onPress={() => Alert.alert('Left button pressed')}
                title="Online Booking"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },
  // engine: {
  //   position: 'absolute',
  //   right: 0,
  // },
  // body: {
  //   backgroundColor: Colors.white,
  // },
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  //   color: Colors.black,
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  //   color: Colors.dark,
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
  // footer: {
  //   color: Colors.dark,
  //   fontSize: 12,
  //   fontWeight: '600',
  //   padding: 4,
  //   paddingRight: 12,
  //   textAlign: 'right',
  // },
});

export default App;
