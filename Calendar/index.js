import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Avatar, Card} from 'react-native-paper';
import {connect} from 'react-redux';
import styles from './styles';

const Calendar = ({todo_list}) => {
  const [items, setItems] = useState ({});

  useEffect (
    () => {
      const mappedTask = todo_list.reduce ((acc, currentItem) => {
        const {date, ...tasks} = currentItem;
        acc[date] = [tasks];
        return acc;
      }, {});
      console.log (mappedTask);

      setItems (mappedTask);
    },
    [todo_list]
  );

  const renderItem = item => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <Text>{item.task}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Agenda items={items} selected={'2021-04-01'} renderItem={renderItem} />
    </View>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    todo_list: state.todos.todo_list,
  };
};

export default connect (mapStateToProps) (Calendar);
