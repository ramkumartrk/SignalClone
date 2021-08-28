import * as React from 'react';
import {StyleSheet,View,FlatList,Text} from 'react-native'
import ChatRoomItem from '../components/ChatRoomItem/ChatRoomItem';
import ChatRoomData from '../assets/dummy-data/ChatRooms';

export default function TabOneScreen(){
  return (
    <View style = {styles.page}>
      {/* <FlatList horizontal showsHorizontalScrollIndicator = {false} data = {ChatRoomData} showsVerticalScrollIndicator = {false} renderItem = {( {item} ) => <ChatRoomItem chatRoom = {item}/>}/> */}
      {/* ListHeaderComponent = {()=> <Text>Messages</Text> */}
      <FlatList data = {ChatRoomData} showsVerticalScrollIndicator = {false} renderItem = {( {item} ) => <ChatRoomItem chatRoom = {item}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  page : {
    backgroundColor : 'white'
  }
});
