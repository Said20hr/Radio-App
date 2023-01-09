import { Image , StyleSheet} from 'react-native';

const PlayButton = ({ onPress }) => (
  <Image
  style={{ width: 25, height: 25  }}
    source={require('../assets/images/play.png')}
    onPress={onPress}
  />
);

