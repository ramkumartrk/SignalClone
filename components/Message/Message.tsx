import React  from 'react'
import { Text, View ,StyleSheet, BackHandler} from 'react-native'

const blue = '#3777f0'
const grey = 'lightgrey'
const myID = 'u1'

const Message = ({ message }) =>{

    const isMe = message.user.id === myID
    
    // marginLeft : isMe ? 'auto' : 10
    //marginRight : isMe ? 10 : 'aut0'

    //{
    //     backgroundColor : isMe? grey : blue, 
    //     alignSelf : isMe ? 'flex-end' : 'flex-start'
    // }
    return (
        <View style = {[
        styles.container, isMe ? styles.rightContainer : styles.leftContainer
        ]}>

         <Text style = {{color : isMe ? 'black' : 'white'}}>{message.content}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container :{
        padding : 10,
        margin : 10, 
        borderRadius : 10,  
        maxWidth : '75%' 
    },
    leftContainer :{
        backgroundColor : '#3777f0',
        marginLeft : 10,
        marginRight : 'auto'
    },
    rightContainer :{
        backgroundColor : grey,
        marginLeft : 'auto',
        marginRight : 10
    }

});
export default Message;
