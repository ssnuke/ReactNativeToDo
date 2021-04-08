import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card} from 'react-native-paper';
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
      <Card style={styles.itemContainer}>
        <Card.Content style={styles.itemContent}>
          <Text style={styles.itemText}>{item.task}</Text>
        </Card.Content>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.paragraph}>
        <Text style={styles.paragraphText}>Your Tasks List</Text>
      </View>

      <Agenda
        items={items}
        selected={'2021-04-01'}
        renderItem={renderItem}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: 'black',
          textSectionTitleColor: 'white',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: 'grey',
          selectedDayTextColor: 'black',
          todayTextColor: 'yellow',
          dayTextColor: 'white',
          textDisabledColor: 'grey',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: 'violet',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: 'white',
          indicatorColor: 'yellow',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
    </View>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    todo_list: state.todos.todo_list,
  };
};

export default connect (mapStateToProps) (Calendar);
