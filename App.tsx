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
import styled from 'styled-components/native';
import {t} from 'react-native-tailwindcss';

const App = () => {
  const Card = styled.View`
    ${[t.mB4, t.bgGray200, t.rounded, t.p3]}
  `;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={tailwind('p-4')}>
          <View style={tailwind('flex flex-row bg-gray-200 py-2 px-4 mb-4')}>
            <TextInput
              placeholder="What are you looking for?"
              style={tailwind('text-base')}
            />
          </View>

          <Card>
            <Text style={tailwind('px-6 pt-2 text-lg font-semibold')}>
              Dental Clinic
            </Text>
          </Card>

          <View style={styles.card}>
            <View style={styles.image}>
              <Image
                style={tailwind('w-full h-40')}
                source={{
                  uri:
                    'https://chblobdev.icloudhospital.com/thumbnailcontainer/0b59a18f-db28-4754-89b4-af7bca99ab81-2988ffd6-d89b-4eb1-88da-eb42ce06188e.jpg'
                }}
              />
            </View>
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

            <View style={styles.buttonWrap}>
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
  card: {
    marginBottom: 16,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowColor: 'rgb(59,67,92)',
    shadowRadius: 10,
    backgroundColor: '#fff',
    borderRadius: 18,
  },
  image: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    overflow: 'hidden',
  },
  buttonWrap: {
    height: 44,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#edf1f6',
  },
});

export default App;
