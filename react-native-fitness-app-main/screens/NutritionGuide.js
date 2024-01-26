import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image,Button } from 'react-native';
import { days } from '../data/food';

const NutritionGuide = ({ navigation }) => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayPress = (day) => {
    setSelectedDay(day);
  };
  const handleGoBack = () => {
    
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nutrition Guide for the Week</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={days}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={[
                styles.buttonContainer,
                selectedDay && selectedDay.id === item.id && styles.selectedButton,
              ]}
              onPress={() => handleDayPress(item)}
            >
              <Text style={styles.buttonText}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />

      {selectedDay && (
        <View style={styles.selectedDayContainer}>
          <Text style={styles.selectedDayText}>{selectedDay.title}</Text>
          {selectedDay.meals && selectedDay.meals.breakfast && (
            <View style={styles.mealContainer}>
                
              <Image
                source={{ uri: selectedDay.meals.breakfast.img }}
                style={styles.mealImage}
              />
              <Text style={styles.mealTitle}>{selectedDay.meals.breakfast.title}</Text>
            </View>
          )}
          {selectedDay.meals && selectedDay.meals.lunch && (
            <View style={styles.mealContainer}>
              <Image source={{ uri: selectedDay.meals.lunch.img }} style={styles.mealImage} />
              <Text style={styles.mealTitle}>{selectedDay.meals.lunch.title}</Text>
            </View>
          )}
          {selectedDay.meals && selectedDay.meals.dinner && (
            <View style={styles.mealContainer}>
              <Image source={{ uri: selectedDay.meals.dinner.img }} style={styles.mealImage} />
              <Text style={styles.mealTitle}>{selectedDay.meals.dinner.title}</Text>
            </View>
          )}
        </View>
      )}
     {/* Back button */}
     <TouchableOpacity
        style={styles.goBackButton}
        onPress={handleGoBack}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'#D1FFBD'

  },
  header: {
    marginTop: 28,
    fontSize: 30,
    fontWeight:'bold',
    backgroundColor:'#D2FFBD'
  },
  buttonContainer: {
    backgroundColor: '#2ecc71',
    borderRadius: 20,
    padding: 10,
    height: 40,
    width: 95,
    marginTop: 20,
    marginHorizontal: 1,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  selectedButton: {
    backgroundColor: 'blue',
  },
  selectedDayContainer: {
    marginTop: -20,
    alignItems: 'center',
  },
  selectedDayText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mealContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  mealImage: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
  mealTitle: {
    marginTop: 5,
    textAlign: 'center',
    fontSize:14
  },
  goBackButton:{
    backgroundColor: '#2ecc71',
    borderRadius: 20,
    padding: 10,
    height: 35,
    width: 95,
    marginHorizontal: 1,
  }
});

export default NutritionGuide;
