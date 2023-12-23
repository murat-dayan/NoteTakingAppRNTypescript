import {  Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScreenNavigationProp } from '../../../../types'
import SavedNotesList from '../../../components/SavedNotesList/SavedNotesList'

const HomeScreen = () => {


    return (
        <>
            <SavedNotesList />
            

        </>
    )
}

export default HomeScreen