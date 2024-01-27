import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  staticText: {
    fontSize: 18,
  },
  timeInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoutButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 100,
    width: '90%',
    alignItems: 'center', // Align content horizontally
    justifyContent: 'center', // Align content vertically
  },
  logoutButtonText: {
    color: 'white',
    textAlign: 'center', // Center the text within the button
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subLabel: {
    fontWeight: 'bold',
    marginRight: 10,
    fontSize: 18,
    width: '90%', // Increase font size
  },


  todoInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#3498db',
    borderRadius: 8,
    padding: 8,
    marginRight: 10,
  },
  addTodoButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTodoButtonText: {
    color: 'white',
  },

  achievementText: {
    color: '#2ecc71', // Green color for achievements
  },
  todoItem: {
    color: '#e74c3c', // Orange color for to-do items
  },
  bulletPoint: {
    marginRight: 5,
  },
  // Ensure equal width for the input fields
  timeInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#3498db',
    borderRadius: 8,
    padding: 8,
    marginRight: 10,
    width: '90%',
  },
  todoListContainer: {
    marginTop: 20,
    width: '100%',
},
    achievementsContainer: {
        marginTop: 20, 
        width: '100%',
      },
  
});


export default styles;
