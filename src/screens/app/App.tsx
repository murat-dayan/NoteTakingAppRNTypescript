import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import styles from './App.style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoteTakingInput from '../../components/NoteTakingInput/NoteTakingInput';
import HomeScreen from '../home/HomeScreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EditNoteScreen from '../home/EditNoteScreen/EditNoteScreen';
import { RootStackParamsList } from '../../../types';

const Stack = createNativeStackNavigator<RootStackParamsList>()

const App = () => {


 

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EditNote" component={EditNoteScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App