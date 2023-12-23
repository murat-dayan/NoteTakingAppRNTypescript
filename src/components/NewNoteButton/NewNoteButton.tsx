import { Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamsList, ScreenNavigationProp } from '../../../types'
import { eminered } from '../../styles/colors'




const NewNoteButton = () => {
    const navigation = useNavigation<ScreenNavigationProp>()
  return (
    <Pressable onPress={() => navigation.navigate('EditNote',{noteId: undefined})}>
        <Icon name='edit' size={30} color={eminered} />
    </Pressable>
  )
}

export default NewNoteButton