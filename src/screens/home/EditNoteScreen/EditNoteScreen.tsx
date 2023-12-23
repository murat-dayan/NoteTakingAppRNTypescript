import { View, Text } from 'react-native'
import React from 'react'
import styles from './EditNoteScreen.style'
import NoteTakingInput from '../../../components/NoteTakingInput/NoteTakingInput'
import { saveNote } from '../../../services/NoteStoreServices'

const EditNoteScreen = () => {

    
      
  return (
    <NoteTakingInput saveNote={saveNote} />
  )
}

export default EditNoteScreen