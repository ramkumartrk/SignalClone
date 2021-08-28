import React from 'react';
import {Text,View,Image} from 'react-native'
import styles from './Styles';

export default function ChatRoomItem({ chatRoom }){
  const user = chatRoom.users[1]
    return (
    <View style = {styles.container}>
      <Image source = {{uri : user.imageUri}} style = {styles.image}></Image>
      


      {chatRoom.newMessages ? <View style = {styles.badgeContainer}>
        <Text style = {styles.badgeText}>{chatRoom.newMessages}</Text>
      </View> : null}


      <View style = {styles.rightContainer}>
        
      <View style = {styles.row}>
        <Text style = {styles.name}> {user.name}</Text>
        <Text style = { styles.text}>{chatRoom.lastMessage.createdAt}</Text>
      </View>

      <View>
        <Text numberOfLines = {1} style = {styles.text}> {chatRoom.lastMessage.content} </Text>
      </View>

      </View>

    </View>
    );
}
//{{ uri : 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }}