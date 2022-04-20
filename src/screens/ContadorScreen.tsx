import React, {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Fab from '../components/Button/Fab';

const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador : {contador}</Text>

      <Fab
        title = '-1'
        onPress={()=> setContador(contador - 1)}
        position= "bl"
      />
       <Fab
        title = '+1'
        onPress={()=> setContador(contador + 1)}
      />

     {/*  <TouchableOpacity
        style={styles.fabLocationBR}
        onPress={() => {
          setContador(contador + 1);
        }}>
        <View style={styles.fab}>
          <Text style={styles.fabTxt}>+1</Text>
        </View>
      </TouchableOpacity> */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -10,
  },
  
});

export default ContadorScreen;
