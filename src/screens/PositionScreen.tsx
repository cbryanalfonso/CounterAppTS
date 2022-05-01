import React from 'react'
import { StyleSheet, View } from 'react-native'

const PositionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaVerde} />
        <View style={styles.cajaMorada} />
        <View style={styles.cajaNaranja} />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
       /*  justifyContent: 'center',
        alignItems: 'center', */
        backgroundColor: '#28C4D9',
        //paddingHorizontal: 10,
       // height: 400,
        //width: 400,
    },
    cajaMorada:{
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',// todos los componenetes creados son relativos.
        top: 0,
        right: 0,
    },
    cajaNaranja:{
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    cajaVerde:{
       /*  width: 100,
        height: 100, */
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
       /*  position: 'absolute',
        bottom: 0,
        left: 0, */
        ...StyleSheet.absoluteFillObject
    }
});

export default PositionScreen