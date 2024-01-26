import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import { useContext } from 'react';
import { FitnessItems } from '../Context';

const DailyActivityScreen = ({ navigation }) => {
  const { calories, minutes, workout } = useContext(FitnessItems);

  const chartData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        data: [2500, 3000, 3500, 2105, 1980, 2645, calories],
      },
    ],
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Go Back Button */}
      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>Weekly Stats</Text>

      {/* Line Chart */}
      <LineChart
        data={chartData}
        width={350}
        height={200}
        yAxisLabel="KCAL"
        chartConfig={{
          backgroundColor: '#f8f8f8',
          backgroundGradientFrom: '#f8f8f8',
          backgroundGradientTo: '#f8f8f8',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
            marginBottom: 20,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={styles.chart}
      />

      {/* Stats Summary  */}
      <View style={styles.statsSummary}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Workouts</Text>
          <Text style={styles.statValue}>{workout}</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Minutes</Text>
          <Text style={styles.statValue}>{minutes}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    top: -120,
  },
  chart: {
    marginBottom: 20,
    top: 10,
  },
  statsSummary: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statItem: {
    backgroundColor: '#2ecc71',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    width: 150,
  },
  statLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#333',
  },
  goBackButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#2ecc71',
    borderRadius: 20,
    padding: 10,
  },
});

export default DailyActivityScreen;
