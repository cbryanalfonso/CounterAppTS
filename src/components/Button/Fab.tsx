import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

const Fab = ({title, onPress, position = 'br'}: Props) => {
  const ios = () => {
    return(
      <TouchableOpacity 
      activeOpacity={ 0.75 }
      onPress={onPress}
      style={[
        styles.fabLocation,
        position === 'bl' ? styles.left : styles.right,
      ]}>
       
          <View style={styles.fab}>
            <Text style={styles.fabTxt}>{title}</Text>
          </View>
  
      </TouchableOpacity>
    )

  };

  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === 'bl' ? styles.left : styles.right,
        ]}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
          onPress={onPress}>
          <View style={styles.fab}>
            <Text style={styles.fabTxt}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return (Platform.OS ==='ios') ? ios() : android()
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'red',
    borderRadius: 100,
  },
  fab: {
    backgroundColor: 'red',
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  fabTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
  fabLocation: {
    position: 'absolute',
    bottom: 30,
    //right: 30,
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
});

export default Fab;
