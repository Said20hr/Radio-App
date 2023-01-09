import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, View,Alert,Image  } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const background = require("../assets/images/bg.png");
const image = require("../assets/images/radio.png");
import Button from '../components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <ImageBackground source={background} resizeMode="cover" style={styles.background}>
       
       </ImageBackground>
      
      </View>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 0,
    width : '100%',
  },
  background: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop : 60,
    alignItems:'center'
  },
  image:{
   
    marginBottom: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height:120,
    borderRadius:10
    
  },


});