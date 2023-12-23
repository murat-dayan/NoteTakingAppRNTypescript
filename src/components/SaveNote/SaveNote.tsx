import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { Note, saveNote } from '../../services/NoteStoreServices'
import { useNavigation } from '@react-navigation/native'
import { ScreenNavigationProp } from '../../../types'

const SaveNote:React.FC<Note> = ({text,id}) => {

  const navigation = useNavigation<ScreenNavigationProp>()

  const saveNoteHandler= async()=>{
    await saveNote(text,id)
    navigation.navigate('Home')
    //if(navigation.canGoBack()){
    //    navigation.goBack()
    //}
} 

  return (
    <Pressable onPress={saveNoteHandler}>
        <Icon name='caretleft' size={30} color='#ffb703' />
    </Pressable>
  )
}

export default SaveNote