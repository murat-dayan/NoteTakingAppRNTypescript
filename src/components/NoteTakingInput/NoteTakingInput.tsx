import { View, TextInput, Text, Button } from 'react-native'
import React,{useState} from 'react'
import styles from './NoteTakingInput.style'

type Props={
    saveNote: (text:string)=>void
}

const NoteTakingInput: React.FC<Props> = ({saveNote}) => {

    const [text, settext] = useState<string>("")

    return (
        <>
            <TextInput
                style={styles.text_input}
                multiline={true}
                value={text}
                onChangeText={settext}
            />
            <Button
                title='Save Note'
                onPress={()=>saveNote(text)}
            />
        </>
    )
}

export default NoteTakingInput