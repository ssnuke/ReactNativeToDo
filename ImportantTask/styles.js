import {StyleSheet} from 'react-native';


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'black',
  },
  paragraph: {
    paddingBottom:10,
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor:'grey',
    borderBottomWidth:1,
  },
  paragraphText: {
    fontSize: 28,
    marginLeft: 10,
    color: 'white',
  },
  paragraphDate: {
    fontSize: 22,
    marginLeft: 8,
    color: 'white',
  },
  inputBox: {
    marginTop: 10,
    marginBottom:20,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5,
    borderColor: '#ff6a00',
    borderBottomWidth: 5,
  },
  taskContainer:{
    padding:3,
    marginBottom: 8,
    marginLeft:10,
    marginRight: 10,
    borderRadius:10,
    borderColor:'#ff6a00',
    borderBottomWidth:5,
    borderRightWidth:5,
    borderLeftWidth:5,
  },
  addTask:{
    marginBottom: 20,
    backgroundColor: '#ff6a00',
  },
});

export default styles;
