import {View, TextInput, StyleSheet, Button, Modal} from 'react-native';
import React from 'react';
import {useState} from 'react';

const GoalInput = props => {
  const [goalInput, setGoalInput] = useState('');

  const goalInputHandler = enteredGoal => {
    setGoalInput(enteredGoal);
  };

  function addGoalHandler() {
    props.onAddGoal(goalInput);
    setGoalInput('');
  }

  return (
    <Modal visible={props.visible} animationType={'slide'}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.inputContainer.textInput}
          placeholder="Enter your Goal's here!"
          placeholderTextColor="white"
          value={goalInput}
        />
        <View style={styles.Buttons}>
          <View style={styles.Buttons.btn}>
            <Button
              color={'#A569BD'}
              onPress={addGoalHandler}
              title="Add Goal"
            />
          </View>

          <View style={styles.Buttons.btn}>
            <Button
              onPress={props.endModal}
              title="x Cancel"
              color={'#EC7063'}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    color: 'black',
    backgroundColor: '#D2B4DE',

    // Input text
    textInput: {
      borderWidth: 1,
      borderColor: '#A569BD',
      color: '#BB8FCE',
      width: '80%',
      marginRight: 8,
      padding: 7,
    },
  },

  Buttons: {
    flexDirection: 'row',
    marginTop: 30,

    btn: {
      width: '30%',
      marginHorizontal: 8,
    },
  },
});

export default GoalInput;
