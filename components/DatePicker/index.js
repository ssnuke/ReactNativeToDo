import React, {useState} from 'react';
import {Keyboard, View, Text, Modal} from 'react-native';
import {Button} from 'react-native-paper';
import {Calendar} from 'react-native-calendars';
import styles from './styles';

const Date = props => {
  const {callback, setVisi} = props;
  const [selectedDate, setSelectedDate] = useState ('');
  

 
  const get = () => {
    callback (selectedDate);
  };


  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <View>

        <Calendar
          style={styles.calendarContainer}
          minDate={'2020-04-10'}
          maxDate={'2025-01-31'}
          onDayPress={day => {
            callback (day.dateString);
          }}
          monthFormat={'MMM yyyy'}
          hideExtraDays={false}
          disableMonthChange={false}
          onPressArrowLeft={subtractMonth => subtractMonth ()}
          onPressArrowRight={addMonth => addMonth ()}
          enableSwipeMonths={true}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: 'black',
            textSectionTitleColor: 'white',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: 'yellow',
            selectedDayTextColor: 'yellow',
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

        <Button onPress={props.onClose}>CLOSE</Button>

      </View>
    </Modal>
  );
};

export default Date;
