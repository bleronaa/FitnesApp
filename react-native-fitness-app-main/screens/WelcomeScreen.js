import React,{useState,useEffect}from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({navigation}) => {
  const [showIcon, setShowIcon] = useState(false);

// useEffect(() => {    
//     const resetAsyncStorage = async () => {
//       try {
//         await AsyncStorage.clear();
//         console.log('AsyncStorage cleared successfully.');
//       } catch (error) {
//         console.error('Error clearing AsyncStorage:', error);
//       }
//     };
//     resetAsyncStorage();
//   }, []);

  return (
    <ImageBackground
      source={{
        uri:'https://i.pinimg.com/originals/32/1c/e9/321ce9f5f48596a733d91e8f8d269808.jpg'
      }} 
      style={styles.background}
    >

      <View style={styles.container}>
        <Text style={styles.title}>Fitness Tracker</Text>
        <Text style={styles.subtitle}>Your personal fitness companion</Text>
        <TouchableOpacity style={styles.startButton} onPress={()=>navigation.navigate("Home")}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        marginTop:100
      },
      title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
      },
      subtitle: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
      },
  startButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,

  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
 
});

export default WelcomeScreen;
