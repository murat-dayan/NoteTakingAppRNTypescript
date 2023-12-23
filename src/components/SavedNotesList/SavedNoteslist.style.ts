import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        width:'100%',
        flex:1,
    },
    row:{
        width:'90%',
        borderBottomWidth:1,
        borderBottomColor:'#e6e6e6',
        alignSelf:'center',
        height:90,
        justifyContent:'center'
    },
    note:{
        paddingVertical:20,
        width:'100%',
        fontSize: 16,
        color:'black'
    }
})