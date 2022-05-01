import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FlexScreen = () => {
  return (
      <View style={styles.container}>
          <Text style={styles.caja1} >Caja 1</Text>
          <Text style={styles.caja2} >Caja 2</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja2} >Caskdja3</Text>
          <Text style={styles.caja2} >Caskdja3</Text>
          <Text style={styles.caja2} >Caskdja3</Text>
          <Text style={styles.caja2} >Caskdja3</Text>
          <Text style={styles.caja2} >Caskdja3</Text>
          <Text style={styles.caja2} >Caskdja3</Text>
          <Text style={styles.caja2} >Caskdja3</Text>
          <Text style={styles.caja3} >Caja 4fkjd</Text>
          <Text style={styles.caja3} >Caja 4fkjd</Text>
          <Text style={styles.caja3} >Caja 4fkjd</Text>
          <Text style={styles.caja3} >Caja 4fkjd</Text>
          <Text style={styles.caja3} >Caja 4fkjd</Text>
          <Text style={styles.caja3} >Caja 4fkjd</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 2</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          <Text style={styles.caja3} >Caja 2</Text>
          <Text style={styles.caja3} >Caja 3</Text>
          
      </View>
  )
}

const styles = StyleSheet.create({
    //flexwrap: cuando los hijos son mas grandes que el padre.
    container:{
        flex: 1,
        backgroundColor: '#28C4D9',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
        //flexDirection: 'row'
       /*  flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end', */
      //  flexDirection: 'row',
        //alignItems: 'stretch', // estira todo lo que puede al componente.
       // alignItems: 'baseline', // tomara el tamño de sus hijos.
       //alignItems: 'flex-start' // alinea al inicio
      //  alignItems: 'center' // los alinea al centro de izquierda a derecha ...

        //justifyContent: 'center' // el justificado es en el centro del padre, no al centro de la pantalla.
        //justifyContent: 'space-around'// distribuye el espacio en cada uno de sus hijos, de esta manera se ven separados
        //justifyContent: 'space-between' // empieza por los lados.
        //justifyContent: 'space-evenly' // distribuye el espacio entre sus hijos,
    },
    caja1:{
       // flex:1,
       //alignSelf: 'center',
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
    caja2:{
        //flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
       // alignSelf: 'flex-start' // se sobrepone a los cambios del padre....
    },
    caja3:{
        //flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
       // alignSelf: 'flex-end',
    }
});

export default FlexScreen