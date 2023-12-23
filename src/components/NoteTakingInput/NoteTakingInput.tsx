import { View, TextInput, Text, Button } from 'react-native'
import React,{useEffect, useLayoutEffect, useState} from 'react'
import styles from './NoteTakingInput.style'
import { getNote, saveNote } from '../../services/NoteStoreServices'
import { useNavigation } from '@react-navigation/native'
import { ScreenNavigationProp } from '../../../types'
import SaveNote from '../SaveNote/SaveNote'

type Props={
    noteId:string | undefined
}

const NoteTakingInput: React.FC<Props> = ({noteId}) => {

    const [text, settext] = useState<string>("")

    const navigation = useNavigation<ScreenNavigationProp>()

    

    useLayoutEffect(()=>{
      navigation.setOptions({
        headerTitle: noteId ? "Edit Note" : "New Note",
        headerLeft: ()=>  (<SaveNote text={text} id={noteId ?? ""}  />)
      })
    },[navigation, text,noteId])

    useEffect(()=>{
        if(noteId){
            getNote(noteId).then(result => settext(result?.text ?? ""))
        }
    },[])

    

    return (
        <>
            <TextInput
                style={styles.text_input}
                multiline={true}
                value={text}
                onChangeText={settext}
                autoFocus={true}
            />
        </>
    )
}

export default NoteTakingInput