import React, { useState, useEffect } from 'react';
import { View, Button, Text,TouchableOpacity, Image,StyleSheet,ImageBackground, Animated } from 'react-native';
import { Asset } from 'expo-asset';
import { Audio } from 'expo-av';
import Colors from '../constants/Colors';






export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [song, setSong] = useState(null);

  useEffect(() => {
    (async () => {
      // Load the song from a URL or from the local file system
      const songAsset = Asset.fromModule(require('../assets/songs/song.mp3'));
      await songAsset.downloadAsync();
      const soundObject = new Audio.Sound();
      await soundObject.loadAsync(songAsset);
      setSong(soundObject);
    })();
  }, []);
  const PlayButton = ({ onPress ,isPlaying }) => (
    <TouchableOpacity onPress={onPress}>
    <Image
        style={{ width: 64, height: 64  }}
        source={isPlaying ? require('../assets/images/pause.png') : require('../assets/images/play.png')}
    
    />
    </TouchableOpacity>
  );

  const togglePlayback = async () => {
    if (isPlaying) {
      await song.pauseAsync();
      setIsPlaying(false);
    } else {
      await song.playAsync();
      setIsPlaying(true);
    }
  };
  const background = require("../assets/images/bg-6.jpg");

  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
       <ImageBackground source={background} resizeMode="cover" style={styles.background}>
      <Animated.Image
        style={{ width: 200, height: 200 ,borderRadius: 250,marginBottom: 20 , borderWidth: 3, padding:5,borderColor: 'lightgray', }}
        source={require('../assets/images/matoub.jpg')}
      />
      <Text style={{color : '#FFFFFC',fontSize: 30,marginBottom:10,fontWeight:'600'}}>Matoub Lounes</Text>
      <Text style={{color : '#FFFFFF',fontSize: 20,marginBottom:100,fontWeight:"300"}}>- Thigri tadjalt - </Text>

       <PlayButton  onPress={togglePlayback} isPlaying={isPlaying}/>
      
      
      
      </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
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
    justifyContent: "center",
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
  buttonStyle:{
    marginBottom: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    height:120,
    borderRadius:10,
   
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },


});