import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import {Card, TextInput, Button, Paragraph} from 'react-native-paper';
import {MaterialIcons} from '@expo/vector-icons';
import styles from './styles';
import DatePicker from '../DatePicker';

import {connect} from 'react-redux';
import {addTodo, deleteTodo} from '../../redux/actions';

//Important Tasks!!!!!
const DayPlanner = ({todo_list, addTodo, deleteTodo}) => {
  const [task, setTask] = useState ('');
  const [date, setDate] = useState ('');

  const handleAddTodo = () => {
    if (task.length < 1) {
      Alert.alert ('Please input task');
    } else {
      addTodo (task, date);
      setTask ('');
      setDate ('');
    }
  };

  const handleDeleteTodo = id => {
    deleteTodo (id);
  };

  const getDate = inputdate => {
    setDate (inputdate);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.paragraph}>
          <Text style={styles.paragraphText}>Important Tasks</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            placeholder="Add your task"
            value={task}
            onChangeText={task => setTask (task)}
            style={styles.inputBox}
          />
          <TextInput
            mode="outlined"
            value={date}
            placeholder="Select Due Date"
            onChangeText={date => setDate (date)}
            style={styles.inputBox}
            editable={false}
          />
          <DatePicker callback={getDate} />
        </View>

        <FlatList
          data={todo_list}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            return (
              <Card style={styles.taskContainer}>
                <Card.Title
                  title={item.task}
                  right={props => (
                    <TouchableOpacity
                      onPress={() => handleDeleteTodo (item.id)}
                    >
                      <MaterialIcons name="remove-done" size={24} color="red" />
                    </TouchableOpacity>
                  )}
                />
                <Card.Content>
                  <Paragraph>{'Due Date' + ':  ' + item.date}</Paragraph>
                </Card.Content>
              </Card>
            );
          }}
        />

        <Button mode="contained" onPress={handleAddTodo} style={styles.addTask}>
          Add Task
        </Button>

      </View>
    </TouchableWithoutFeedback>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    todo_list: state.todos.todo_list,
  };
};

const mapDispatchToProps = {addTodo, deleteTodo};

export default connect (mapStateToProps, mapDispatchToProps) (DayPlanner);
