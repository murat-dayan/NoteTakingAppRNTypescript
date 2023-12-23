import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { Note, getAllNotes } from '../../services/NoteStoreServices'
import styles from './SavedNoteslist.style'
import { ScreenNavigationProp } from '../../../types'

const SavedNotesList = () => {
    const [notes, setNotes] = useState<Note[]>([])
    const navigation = useNavigation<ScreenNavigationProp>()


    useFocusEffect(() => {
        getAllNotes().then(result => setNotes(result.notes))
    })
    return (
        <View style={styles.container}>
            <ScrollView>
                {notes.map(note => (
                    <Pressable key={note.id} onPress={()=>navigation.navigate('EditNote',{noteId:note.id})}>
                        <View style={styles.row}>
                            <Text style={styles.note} key={note.id}>
                                {note.text.length === 0 ? '(Blank Note)' : note.text}
                            </Text>
                        </View>
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    )
}

export default SavedNotesList
