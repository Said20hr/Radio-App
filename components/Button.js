import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Linking } from 'react-native';



export default function Button({ label, theme,icon,bgColor,color,uri }) {
    function openFacebook() {
        Linking.openURL(uri).catch(() => {
          Linking.openURL('https://www.facebook.com/'+uri);
        });
      }
  if (theme === "primary") {
    return (
      <View
      style={[styles.buttonContainer, { borderWidth: 0,  borderRadius: 5 }]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: bgColor }]}
          onPress={openFacebook}
        >
          <FontAwesome
            name={icon}
            size={18}
            color={color}
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: color }]}>{label}</Text>
        </Pressable>
    </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={openFacebook}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
      width: 320,
      height: 55,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
      marginBottom:10
    },
    button: {
      borderRadius: 10,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginBottom:20
    },
    buttonIcon: {
      paddingRight: 8,
    },
    buttonLabel: {
          fontSize: 18,
    },
  });