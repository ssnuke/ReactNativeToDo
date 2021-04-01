import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Card, Appbar} from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import styles from './styles';


const Home = ({ navigation }) => {
  return (
    <Card style={styles.homeContainer}>

      <View sylte={styles.buttonHolder}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DayPlanner')}>
          <View style={styles.buttonData}>
            <Ionicons
              name="sunny-outline"
              size={24}
              color="#fffb00"
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Plan Your Day</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View sylte={styles.buttonHolder}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ImportantTask')}>
          <View style={styles.buttonData}>
            <FontAwesome5
              name="hourglass-start"
              size={24}
              color="#ff00b7"
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Important Tasks</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View sylte={styles.buttonHolder}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Calendar')}>
          <View style={styles.buttonData}>
            <Ionicons
              name="calendar-sharp"
              size={24}
              color="#15ff00"
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Calendar</Text>
          </View>
        </TouchableOpacity>
      </View>

    </Card>
  );
};

export default Home;
