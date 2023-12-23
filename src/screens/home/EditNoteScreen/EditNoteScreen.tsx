import { View, Text, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'
import styles from './EditNoteScreen.style'
import NoteTakingInput from '../../../components/NoteTakingInput/NoteTakingInput'
import { useNavigation, useRoute } from '@react-navigation/native'
import { EditScreenRouteProp, ScreenNavigationProp } from '../../../../types'
import { deleteNote } from '../../../services/NoteStoreServices'
import DeleteNote from '../../../components/DeleteNote/DeleteNote'

const EditNoteScreen = () => {

    const route = useRoute<EditScreenRouteProp>()
    const navigation = useNavigation<ScreenNavigationProp>()
    const noteId = route.params.noteId

    useLayoutEffect(()=>{
      navigation.setOptions({
        headerTitle: noteId ? "Edit Note" : "New Note",
        headerRight: ()=> noteId ? (
          <DeleteNote noteId={noteId} />
        ) : (<></>)
      })
    },[navigation])
      
  return (
    <NoteTakingInput  noteId={noteId} />
  )
}

export default EditNoteScreen