import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import FitScreen from './screens/FitScreen';
import RestScreen from './screens/RestScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import DailyActivity from './screens/DailyActivity';
import NutritionGuideScreen from './screens/NutritionGuide';
import UserSettings from './screens/UserSettings';




const StackNavigator = () => {
   const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen options={{headerShown: false}} name="Welcome" component={WelcomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="Activity" component={DailyActivity} />
        <Stack.Screen options={{headerShown: false}} name="Nutrition" component={NutritionGuideScreen} />
        <Stack.Screen options={{headerShown: false}} name="Workout" component={WorkoutScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Fit" component={FitScreen} />
        <Stack.Screen options={{ headerShown: false }} name="UserSettings" component={UserSettings} />
        <Stack.Screen options={{ headerShown: false }} name="Rest" component={RestScreen} />
       </Stack.Navigator>
     </NavigationContainer>
      )

     
}

export default StackNavigator