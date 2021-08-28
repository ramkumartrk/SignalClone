import { StyleSheet } from "react-native";

const styles  = StyleSheet.create({
    rightContainer :{
      flex : 1,
      justifyContent : 'center'
    },
    row : {
      flexDirection : 'row',
      justifyContent : 'space-between',
    },
    name : {
      fontWeight : 'bold',
      fontSize : 18,
      marginBottom : 5
    },
  
    image : {
      width : 50,
      height : 50,
      borderRadius : 50,
      marginRight : 10,
    },
  
    badgeContainer : {
      backgroundColor : '#3872E9',
      borderRadius : 50,
      width : 20,
      height : 20,
      justifyContent : 'center',
      alignItems : 'center',
      position : 'absolute',
      left : 45,
      top : 10,
      borderColor : 'white',
      borderWidth : 1
    },
  
    badgeText : {
      color : 'white',
      fontSize : 12
    },
  
    container : {
        flexDirection : 'row',
        padding : 10
    },
    text : {
      color : 'grey',
    }
  });

  export default styles;