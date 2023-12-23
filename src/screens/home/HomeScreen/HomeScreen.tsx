import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './HomeScreen.style'
import { useNavigation } from '@react-navigation/native'
import { ScreenNavigationProp } from '../../../../types'
import { useFocusEffect } from '@react-navigation/native'
import { getNote } from '../../../services/NoteStoreServices'

const HomeScreen = () => {

    const navigation = useNavigation<ScreenNavigationProp>()
    const [noteText, setnoteText] = useState<string>("")


    

    useFocusEffect(()=>{
        getNote().then(result => setnoteText(result ?? ''))
    })

    return (
        <>
            <View>
                <Text>{noteText}</Text>
            </View>            
            <Button
                title='New Note'
                onPress={() => navigation.navigate('EditNote')}
            />

        </>
    )
}

export default HomeScreen