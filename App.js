import React from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import Goal from './components/Goals';
import GoalInput from './components/GoalInput';
import {useState} from 'react';

function App() {
  const [modalIsVisisble, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const addGoalHandler = goalInput => {
    setGoals(oldGoals => [
      ...oldGoals,
      {text: goalInput, id: Math.random().toString()},
    ]);
  };

  const startAddGoalHandler = () => setModalIsVisible(true);
  const endAddGoalHandler = () => setModalIsVisible(false);
  function goalDeleteHandler(id) {
    setGoals(oldGoals => [...oldGoals.filter(goal => goal.id !== id)]);
  }
  return (
    <View style={styles.appContainer}>
      <Button
        color={'#A569BD'}
        onPress={startAddGoalHandler}
        title={'+ Add New Goal '}
      />
      <GoalInput
        endModal={endAddGoalHandler}
        visible={modalIsVisisble}
        onAddGoal={addGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={itemData => {
            return (
              <Goal
                text={itemData.item.text}
                onDeleteItem={goalDeleteHandler}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  //////////////////////////////////

  ///////////////////////////////////
  goalsContainer: {
    flex: 4,
  },
});
export default App;
