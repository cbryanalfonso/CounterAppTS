import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Fab = () => {
  return (
    <>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.btn}>
          <Text>+1</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'red',
    borderRadius: 100,
  },
});

export default Fab;
