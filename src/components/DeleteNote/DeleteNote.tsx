import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { deleteNote } from '../../services/NoteStoreServices'
import { useNavigation } from '@react-navigation/native'
import { ScreenNavigationProp } from '../../../types'

type Props={
    noteId:string
}


const DeleteNote : React.FC<Props> = ({noteId}) => {

    const navigation = useNavigation<ScreenNavigationProp>()

    const deleteNoteHandler= async()=>{
        await deleteNote(noteId)
        navigation.navigate('Home')
    }

  return (
    <Pressable onPress={deleteNoteHandler}>
        <Icon name='delete' size={30} color='#ffb703' />
    </Pressable>
  )
}

export default DeleteNote