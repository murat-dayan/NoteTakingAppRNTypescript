import AsyncStorage from '@react-native-async-storage/async-storage'

export type Note={
    id:string,
    text:string
}

export type NoteStore={
    notes:Array<Note>
}

export const getNote=async()=>{
    return await AsyncStorage.getItem("note")
}

export const saveNote = async (text: string) => {
    await AsyncStorage.setItem("note", text)
  }
