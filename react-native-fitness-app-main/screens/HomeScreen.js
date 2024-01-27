import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FitnessCards from '../components/FitnessCards';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { FitnessItems } from '../Context';

const HomeScreen = () => {
  const [showIcon, setShowIcon] = useState(false);
  const { calories, minutes, workout } = useContext(FitnessItems);
  const navigation = useNavigation();

  const handleNotificationToggle = () => {
    setShowIcon(!showIcon);
    
  };
  const handleSettingsToggle = () => {
    navigation.navigate('UserSettings');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>
      <View style={{ backgroundColor: "#000000d7", paddingTop: 30, paddingHorizontal: 20, height: 160, width: "100%" }}>
        
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 50 }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18, top: 20 }}>SIX PACK IN 30 DAYS</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate("Activity")}>
              <Text style={styles.buttonText}>Watch Your Activity</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Nutrition")}>
              <Text style={styles.buttonText}>Nutrition Guide</Text>
            </TouchableOpacity>
          </View>
        </View>
    
        {/* Notification Icon */}
        <TouchableOpacity onPress={handleSettingsToggle} style={styles.notificationIcon}>
          <Ionicons
            name={'settings'}
            size={20}
            color="white"
          />
        </TouchableOpacity>
        {/* Cards Row  */}
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between",marginTop:-38 }}>
          {/* First Card  */}
          <View style={styles.shadowCards}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{calories.toFixed(2)}</Text>
            <Text>KCAL</Text>
          </View>

          {/* Second Card  */}
          <View style={styles.shadowCards}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{workout}</Text>
            <Text>WORKOUTS</Text>
          </View>

          {/* Third Card  */}
          <View style={styles.shadowCards}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{minutes}</Text>
            <Text>MINUTES</Text>
          </View>
        </View>
      </View>
      {/* Fitness Cards  */}
      <FitnessCards />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  shadowCards: {
    backgroundColor: "#ffffff",
    width: "32%",
    height: 80,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  notificationIcon: {
    position: 'absolute',
    top: 10,
    left: 20,
  },
  buttonContainer: {
    display:'flex',
    flexDirection: 'column', 
    marginBottom: 50,
  },
  startButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    top: 10,
    
  },
  Button: {
    marginTop: 20,
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: -40
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
