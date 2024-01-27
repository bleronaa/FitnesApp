import React, { useState, useEffect } from 'react';
import { Text, View, Switch, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/UserSteeingsStyles';

const UserSettings = () => {
  const [showNotification, setShowNotification] = useState(true);
  const [notificationTime, setNotificationTime] = useState('12:00 PM');
  const [notificationFrom, setNotificationFrom] = useState('12:00PM');
  const [notificationTo, setNotificationTo] = useState('18:00PM');
  const [achievements, setAchievements] = useState(['Completed 30-day Challenge', 'Reached 100 Workouts']);
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState(['Run 5 miles', 'Complete core workout']);

  const navigation = useNavigation();

    useEffect(() => {
      const loadSettings = async () => {
        try {
          const storedSettings = await AsyncStorage.getItem('userSettings');
          if (storedSettings) {
            const parsedSettings = JSON.parse(storedSettings);
            setShowNotification(parsedSettings.showNotification);
            setNotificationTime(parsedSettings.notificationTime);
            setNotificationFrom(parsedSettings.notificationFrom);
            setNotificationTo(parsedSettings.notificationTo);
          }
        } catch (error) {
          console.error('Error loading settings from AsyncStorage:', error);
        }
      };

      loadSettings();
    }, []);

  useEffect(() => {
    const saveSettingsToStorage = async () => {
      try {
        const settings = {
          showNotification,
          notificationTime,
          notificationFrom,
          notificationTo,
        };

        await AsyncStorage.setItem('userSettings', JSON.stringify(settings));
      } catch (error) {
        console.error('Error saving settings to AsyncStorage:', error);
      }
    };

    saveSettingsToStorage();
  }, [showNotification, notificationTime, notificationFrom, notificationTo]);

  useEffect(() => {
    const loadTodoList = async () => {
      try {
        const storedTodoList = await AsyncStorage.getItem('todoList');
        if (storedTodoList) {
          setTodoList(JSON.parse(storedTodoList));
        }
      } catch (error) {
        console.error('Error loading todoList from AsyncStorage:', error);
      }
    };

    loadTodoList();
  }, []);
  
  useEffect(() => {
    const saveTodoListToStorage = async () => {
      try {
        await AsyncStorage.setItem('todoList', JSON.stringify(todoList));
      } catch (error) {
        console.error('Error saving todoList to AsyncStorage:', error);
      }
    };

    saveTodoListToStorage();
  }, [todoList]);

  const handleNotificationToggle = () => {
    setShowNotification(!showNotification);
  };

  const handleAddTodo = () => {
    if (todoInput.trim() !== '') {
      setTodoList([...todoList, todoInput]);
      setTodoInput('');
    }
  };

  const handleLogout = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* Welcome Message */}
      <Text style={styles.welcomeText}>Welcome!</Text>

      {/* Notification Toggle */}
      <View style={styles.row}>
        <Text style={styles.label}>Notification</Text>
        <Switch
          value={showNotification}
          onValueChange={handleNotificationToggle}
          thumbColor={showNotification ? '#2ecc71' : '#ecf0f1'}
        />
      </View>

      <View style={styles.row}>
        {/* From Input */}
        <View style={styles.column}>
          <Text style={styles.subLabel}>From:</Text>
          <TextInput
            style={styles.timeInput}
            value={notificationFrom}
            placeholder="Select Time"
            onChangeText={(text) => setNotificationFrom(text)}
          />
        </View>

        {/* To Input */}
        <View style={styles.column}>
          <Text style={styles.subLabel}>To:</Text>
          <TextInput
            style={styles.timeInput}
            value={notificationTo}
            placeholder="Select Time"
            onChangeText={(text) => setNotificationTo(text)}
          />
        </View>
      </View>

      <View style={styles.achievementsContainer}>
        {/* Achievements */}
        <View style={styles.column}>
          <Text style={styles.label}>Achievements:</Text>
          {achievements.map((achievement, index) => (
            <Text key={index} style={[styles.achievementText, styles.bulletPoint]}>
              {'\u2022'} {achievement}
            </Text>
          ))}
        </View>
      </View>

      {/* To-Do List */}
      <View style={styles.todoListContainer}>
        {/* To-Do List */}
        <View style={styles.column}>
          <Text style={styles.label}>To-Do List:</Text>
          <View style={styles.row}>
            <TextInput
              style={styles.todoInput}
              value={todoInput}
              placeholder="Add a new task"
              onChangeText={(text) => setTodoInput(text)}
            />
            <TouchableOpacity onPress={handleAddTodo} style={styles.addTodoButton}>
              <Text style={styles.addTodoButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
          {todoList.map((task, index) => (
            <Text key={index} style={[styles.todoItem, styles.bulletPoint]}>
              {'\u2022'} {task}
            </Text>
          ))}
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserSettings;
