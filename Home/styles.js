import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    homeContainer:{
        flex: 1,
        width: '100%',
        backgroundColor: 'black',
        paddingTop:Constants.statusBarHeight,
    },
    viewContainer: {
        backgroundColor:'#2d2e30',
    },
    buttonHolder: {
        // marginTop: 10,
        width: '100%',
        backgroundColor: 'yellow',
    },
    button: {
        // margin: 5,
        // marginTop:10,
        marginLeft: 5,
        maxWidth: '85%',
        borderColor: 'black',
        borderRadius: 5,
        padding: 25,
        backgroundColor: 'black',
    },
    buttonData: {
        flexDirection: 'row',
    },
    buttonText:{
        marginLeft: 5,
        color: 'white',
        fontSize: 18,
    },
    icon: {
      marginRight: 10,
    },
});

export default styles;