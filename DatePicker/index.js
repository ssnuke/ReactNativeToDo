import React, {useState} from 'react';
import {Keyboard, View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import DatePicker from 'react-native-modern-datepicker';
import {Calendar} from 'react-native-calendars';
import styles from '../DayPlanner/styles';

const Date = props => {
  const {callback, setVisi} = props;
  const [selectedDate, setSelectedDate] = useState ('');
  const [visible, setVisible] = useState (false);

  const toggleVisibility = () => {
    setVisible (!visible);
  };

  const get = () => {
    callback (selectedDate);
  };
  var buttonText = visible ? 'Close Calendar' : 'Open Caledar';

  return (
    <View>

      {/* {visible
        ? <DatePicker
            options={{
              backgroundColor: '#090C08',
              textHeaderColor: '#FFA25B',
              textDefaultColor: '#F6E7C1',
              selectedTextColor: '#fff',
              mainColor: '#F4722B',
              textSecondaryColor: '#D6C7A1',
              borderColor: 'rgba(122, 146, 165, 0.1)',
            }}
            current="2020-07-13"
            selected="2020-07-23"
            mode="calendar"
            minuteInterval={30}
            style={{borderRadius: 10}}
            onDateChange={date => callback (date)}
          />
        : null} */}

      {visible
        ? <Calendar
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
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              height: 350,
              padding: 5,
            }}
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
        : null}

      <View style={styles.buttonConiainer}>
        <Button onPress={toggleVisibility}>{buttonText}</Button>
        {visible ? Keyboard.dismiss : null}
      </View>

    </View>
  );
};

export default Date;
