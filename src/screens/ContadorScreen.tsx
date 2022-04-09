import React, {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador : {contador}</Text>

      <TouchableOpacity
        style={styles.fabLocationBL}
        onPress={() => {
          setContador(contador - 1);
        }}>
        <View style={styles.fab}>
          <Text style={styles.fabTxt}>-1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.fabLocationBR}
        onPress={() => {
          setContador(contador + 1);
        }}>
        <View style={styles.fab}>
          <Text style={styles.fabTxt}>+1</Text>
        </View>
      </TouchableOpacity>

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
  fab: {
    backgroundColor: 'red',
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',
  },
  fabTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  fabLocationBL:{
    position: 'absolute',
    bottom: 30,
    left: 30,
  }
});

export default ContadorScreen;
