import React, {useState} from 'react'
import { View,
        StyleSheet,
        TextInput,
        Pressable,
        KeyboardAvoidingView,
        Platform
     } from 'react-native'
import { SimpleLineIcons,Feather,MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 


export default function MessageInput() {

    const [message, setMessage] = useState('')
    
    const onPlusClicked = () =>{
        console.warn('on Plus Clicked')
    };

    const sendMessage = () =>{
        console.warn(message)
        setMessage('');
    };

    const onPress = () =>{
        if(message){
            sendMessage();
        }else{
            onPlusClicked()
        }
    };

    return (
        <KeyboardAvoidingView style = {style.root} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset = { 100 }>
            <View style = {style.inputContainer}>
            <SimpleLineIcons name="emotsmile" size={24} color="#595959" />
                <TextInput style = {style.input} placeholder = "Enter new message..." 
                value = {message}
                onChangeText = {(newMessage) => setMessage(newMessage)}
                />
                <Feather name="camera" size={24} color="#595959" style = {style.icon} />
                <MaterialCommunityIcons name="microphone-outline" size={24} color="#595959" style = {style.icon} />
            </View>
 
            <Pressable onPress = {onPress} style = {style.buttonContainer}>
            { message ?  <Ionicons name="send" size={18} color="white" />  : <Feather name="plus" size={24} color="white" />}
            </Pressable>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    root : { 
        flexDirection : 'row',
        padding : 10,
    },

    inputContainer : {
        backgroundColor : '#f2f2f2',
        flex : 1,
        marginRight : 10,   
        borderRadius : 25,
        borderColor : '#dedede',
        borderWidth : 1.0,
        alignItems : 'center',
        flexDirection : 'row',
        padding : 5
    },
    input : {
        flex : 1,
        marginHorizontal : 5
    },

    icon : {
        padding : 5
    },

    buttonContainer : {
        width : 40,
        height : 40,
        backgroundColor : '#3777F0',
        borderRadius : 25.0,
        justifyContent : 'center',
        alignItems : 'center'
    
    },
    buttonText : {
        fontSize : 35,
        color : 'white',
    }
});