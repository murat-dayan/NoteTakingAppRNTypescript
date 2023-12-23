import React from 'react'
import HomeScreen from '../home/HomeScreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EditNoteScreen from '../home/EditNoteScreen/EditNoteScreen';
import { RootStackParamsList } from '../../../types';
import { Button } from 'react-native';
import NewNoteButton from '../../components/NewNoteButton/NewNoteButton';

const Stack = createNativeStackNavigator<RootStackParamsList>()

const App = () => {




  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'All Notes',
            headerRight: () =>
              <NewNoteButton />
          }
          }

        />
        <Stack.Screen name="EditNote" component={EditNoteScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App