import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const FitnessItems = createContext();

const FitnessContext = ({ children }) => {
  const [completed, setCompleted] = useState([]);
  const [workout, setWorkout] = useState(0);
  const [calories, setCalories] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const loadFitnessData = async () => {
      try {
        const storedFitnessData = await AsyncStorage.getItem('fitnessData');
        if (storedFitnessData) {
          const parsedFitnessData = JSON.parse(storedFitnessData);
          setCompleted(parsedFitnessData.completed || []);
          setWorkout(parsedFitnessData.workout ||0);
          setCalories(parsedFitnessData.calories || 0);
          setMinutes(parsedFitnessData.minutes  ||0);
        }
      } catch (error) {
        console.error('Error loading fitness data from AsyncStorage:', error);
      }
    };

    loadFitnessData();
  }, []);

  useEffect(() => {
    const saveFitnessData = async () => {
      try {
        const fitnessData = {
          completed,
          workout,
          calories,
          minutes,
        };

        await AsyncStorage.setItem('fitnessData', JSON.stringify(fitnessData));
        console.log('Fitness data saved to AsyncStorage:', fitnessData);
      } catch (error) {
        console.error('Error saving fitness data to AsyncStorage:', error);
      }
    };

    saveFitnessData();
  }, [completed, workout, calories, minutes]);

  const contextValues = {
    completed,
    setCompleted,
    workout,
    setWorkout,
    calories,
    setCalories,
    minutes,
    setMinutes,
  };

  return (
    <FitnessItems.Provider value={contextValues}>
      {children}
    </FitnessItems.Provider>
  );
};

export { FitnessContext, FitnessItems };