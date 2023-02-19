import React, { useState, useEffect } from 'react';

import {  AppStateStatus,AppState,AppRegistry,View, Button, Text,TouchableOpacity, 
  Image,StyleSheet,ImageBackground, Animated,Linking } from 'react-native';
import { Asset } from 'expo-asset';
import { Audio } from 'expo-av';
import Colors from '../constants/Colors';
import Waveform from 'react-native-wave-visual';





export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [soundObject, setSoundObject] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetch('https://radiorebelle.com/api/stream-url');
      const data = await response.json();
      const soundObject = new Audio.Sound();
      await soundObject.loadAsync({ uri: data.url });
      setSoundObject(soundObject);
      await soundObject.playAsync();
      setIsPlaying(true);
    })();


    
    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      if (soundObject) {
        soundObject.stopAsync();
      }
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  const handleAppStateChange = async (nextAppState) => {
    if (nextAppState === 'background') {
      if (soundObject) {
        await soundObject.setIsMutedAsync(true);
        setIsMuted(true);
      }
    } else if (nextAppState === 'active') {
      if (soundObject) {
        await soundObject.setIsMutedAsync(false);
        setIsMuted(false);
      }
    }
  };



  const PlayButton = ({ onPress, isPlaying, isLoading }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.row}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#fff" style={{ margin: 15 }} />
      ) : (
        <>
          <Image
            style={{ width: 72, height: 72, margin: 15 }}
            source={require('../assets/images/StopButton.png')}
          />
          <Image
            style={{ width: 96, height: 96 }}
            source={
              isMuted
                ? require('../assets/images/PauseButton.png')
                : require('../assets/images/Playbutton2.png')
            }
          />
          <Image
            style={{ width: 72, height: 72, margin: 15 }}
            source={require('../assets/images/PauseButton.png')}
          />
        </>
      )}
    </View>
  </TouchableOpacity>
);

  const toggleMute = async () => {
    if (isMuted) {
      await soundObject.setIsMutedAsync(false);
      setIsMuted(false);
    } else {
      await soundObject.setIsMutedAsync(true);
      setIsMuted(true);
    }
  };

 



  const background = require("../assets/images/FOND-APP1.png");

  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
       <ImageBackground source={background} resizeMode="stretch" style={styles.background}>
      <Animated.Image
        style={{  width: 300,
          height: 110,
          resizeMode: 'stretch',}}
        source={require('../assets/images/Livesrid1copie.png')}
      />

<PlayButton onPress={toggleMute} />
       
  <View style={styles.socialMedia}>

  <TouchableOpacity onPress={() => Linking.openURL('fb://page/115202690274487')}>
    <Image
        style={{ width: 52, height: 52,margin:2  }}
        source={ require('../assets/images/facebook-icone.png')}
     />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Linking.openURL('vnd.youtube://www.youtube.com')}>
    <Image
        style={{ width: 52, height: 52,margin:2  }}
        source={ require('../assets/images/youtube-icone.png')}
    
    />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Linking.openURL('twitter://user?screen_name=rebelle_fm')}>
    <Image
        style={{ width: 52, height: 52,margin:2  }}
        source={ require('../assets/images/Twitter-icone.png')}
    
    />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Linking.openURL('tiktok://user?screen_name=USERNAME')}>
    <Image
        style={{ width: 52, height: 52,margin:2  }}
        source={ require('../assets/images/Tictoc-icone.png')}
    
    />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Linking.openURL('mailto:contact@radioRebelle.com')}>
    <Image
        style={{ width: 52, height: 52,margin:2  }}
        source={ require('../assets/images/mail-icone.png')}
    
    />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Linking.openURL('https://radiorebelle.com/')}>
   <Image
        style={{ width: 52, height: 52,margin:2  }}
        source={ require('../assets/images/web-icone.png')}
    
    />
    </TouchableOpacity>
    </View>
     
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
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop : '38 %'
  },
  imageContainer: {
    flex: 1,
    width : '100%',
    
  },
  background: {
    flex: 1,
    paddingTop : '82 %',
    alignItems:'center'
  },
  image:{
   
    marginBottom: '32 %',
    justifyContent: 'center',
    alignItems: 'center',
   
    
  },
  buttonStyle:{
    marginBottom: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    height:120,
    borderRadius:10,
   
  },
  socialMedia: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop:'7%',
    marginLeft:5
   
  },
  box: {
    width: 200,
    height: 100,
    borderRadius: 50,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
 


});