import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const Goals = props => {
  return (
    <View style={styles.goals}>
      <Pressable
        android_ripple={{color: '#D2B4DE'}}
        onPress={props.onDeleteItem.bind(this, props.id)}>
        <Text style={styles.textColor}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default Goals;

const styles = StyleSheet.create({
  goals: {
    backgroundColor: '#A569BD',
    margin: 16,
    borderRadius: 10,
  },
  textColor: {
    color: 'white',
    padding: 8,
  },
});
