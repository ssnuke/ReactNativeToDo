import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Card, TextInput, Button } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";

import { connect } from "react-redux";
import { impAdd, impDel } from "../../redux/actions";

//Day Planner!!!!!
const ImportantTask = ({ imp_task, impAdd, impDel }) => {
  const [task, setTask] = useState("");

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var now = new Date();
  var today = now.getDate();
  var month = months[now.getMonth()];
  var day = days[now.getDay()];

  const handleAddTodo = () => {
    impAdd(task);
    setTask("");
  };

  const handleDeleteTodo = (id) => {
    impDel(id);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.paragraph}>
          <Text style={styles.paragraphText}>My Day</Text>
          <Text style={styles.paragraphDate}>
            {" "}
            {[day, ", ", , today, " ", month]}
          </Text>
        </View>

        <TextInput
          mode="outlined"
          label="Task"
          value={task}
          onChangeText={(task) => setTask(task)}
          style={styles.inputBox}
        />

        <FlatList
          data={imp_task}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <Card style={styles.taskContainer}>
                <Card.Title
                  title={item.task}
                  right={(props) => (
                    <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
                      <MaterialIcons
                        name="remove-done"
                        size={24}
                        color="#ff0000"
                      />
                    </TouchableOpacity>
                  )}
                />
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
    imp_task: state.imptodos.imp_task,
  };
};

const mapDispatchToProps = { impAdd, impDel };

export default connect(mapStateToProps, mapDispatchToProps)(ImportantTask);
