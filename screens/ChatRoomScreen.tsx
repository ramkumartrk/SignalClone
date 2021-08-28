import React from 'react'
import { Text,View,Image,StyleSheet,FlatList,SafeAreaView } from 'react-native'
import Message from '../components/Message';
import ChatRoomData from '../assets/dummy-data/Chats';
import MessageInput from '../components/MessageInput';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

export default function ChatRoomScreen({}){
    const route = useRoute()
    const navigation = useNavigation()
    console.warn("Displaying chat Room id :" + route.params.id)
    navigation.setOptions({title : 'Elon Musk'})
    return(
        <SafeAreaView style = {styles.page}>
            <FlatList 
                data = {ChatRoomData.messages.reverse()} 
                    renderItem = {({item}) => <Message message = {item} /> }
                 inverted
            />
            <MessageInput/>
        </SafeAreaView>
    )
};

// // <Message message = {ChatRoomData.messages[1]} />
const styles = StyleSheet.create({
    page : {
        backgroundColor : 'white',
        flex : 1
    }
});