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
        <Image source={image} style={styles.image}></Image>

        <Button theme="primary" label="Facebook" uri="fb://page/115202690274487" color="#ffffff" bgColor="#4267B2" icon="facebook-square" /> 
        <Button theme="primary" label="instagram" uri="http://instagram.com/_u/115202690274487" color="#ffffff" bgColor="#E1306C" icon="instagram" /> 
        <Button theme="primary" label="twitter" uri="http://instagram.com/_u/115202690274487" color="#ffffff" bgColor="#1DA1F2"icon="twitter" />
        <Button theme="primary" label="Youtube" uri="http://instagram.com/_u/115202690274487" color="#ffffff" bgColor="#FF0000"icon="twitter" />
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