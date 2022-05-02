import React from 'react'
import { StyleSheet, View } from 'react-native'

const TareaScreen = () => {
  return (
    <View style={styles.containes}>
        <View style={styles.cajaMorada}/>
        <View style={styles.cajaNaranja}/>
        <View style={styles.cajaAzul}/>
    </View>
  )
}

const styles = StyleSheet.create({
    containes:{
        flex: 1,
        backgroundColor: '#28425B',
        // tarea 2.
        //justifyContent: 'center',
         // tarea 3.
         //justifyContent: 'center',
          // tarea 4.
         // justifyContent: 'space-between'
          // tarea 5.
          //flexDirection: 'row',
          //justifyContent: 'space-between',
           // tarea 7 y 8.
          // justifyContent: 'center',
          // alignItems: 'center',
           //position: 'absolute'
           // tarea 10.
           flexDirection: 'row',
           justifyContent: 'center',
           alignItems: 'center'
    },
    cajaMorada:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        // tarea 1.
       // flex: 1,
        // tarea 3.
       // alignSelf: 'flex-end'
        // tarea 4.
        //alignSelf: 'flex-end'
         // tarea 6.
       //  flex: 1
       // tarea 9.
      // position: 'absolute',
      // top: 305
        

    },
    cajaNaranja:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        //tarea 1
        //flex: 8,
        // tarea 4.
       // alignSelf: 'center'
       // tarea 6.
       //flex: 1
       // tarea 8 y 9.
       //position: 'relative',
      // left:100,
      // tarea 10.
      top: 50
    },
    cajaAzul:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        //tarea 1
        //flex: 1,
        // tarea 2.
        //width: '100%',
         // tarea 3.
        // alignSelf: 'center'
         // tarea 6.
         //flex: 2
        
    }
});

export default TareaScreen