import React, { useState } from 'react'; 
import { ScrollView, Dimensions, Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper'; 
import { Link } from 'expo-router';

const { width, height } = Dimensions.get('window');

const Questionnaire = () => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleSelection = (question, value) => {
    setSelectedOptions((prev) => ({ ...prev, [question]: value }));
  };

  const questions = [
    {
      text: 'Which meal do you prefer to allocate more budget?',
      options: ['Breakfast (20%)', 'Lunch (20%)', 'Dinner (20%)'],
    },
    {
      text: 'Do you prefer to allocate more of your budget to breakfast or lunch?',
      options: ['More for breakfast (10%)', 'More for lunch (10%)'],
    },
    {
      text: 'Would you rather spend more on lunch or dinner?',
      options: ['More for lunch (10%)', 'More for dinner (10%)'],
    },
    {
      text: 'Which meal is more important for you: breakfast or dinner?',
      options: ['Breakfast (10%)', 'Dinner (10%)'],
    },
    {
      text: 'If you had to prioritize, would you choose a good breakfast or a satisfying dinner?',
      options: ['Good breakfast (10%)', 'Satisfying dinner (10%)'],
    },
    {
      text: 'Are you the type of person who skips breakfast entirely?',
      options: ['Yes (20% for Lunch and dinner)', 'No (20% for breakfast)'],
    },
    {
      text: 'Which meal do you consider less important for your trip?',
      options: ['Breakfast (10%)', 'Lunch (10%)', 'Dinner (10%)'],
    },
  ];

  return (
    <View style={styles.container}>
      {/* Fixed Header Section */}
      <View style={styles.fixedHeader}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello!</Text>
            <Text style={styles.userName}>
              Souneini Salma <Text style={styles.wave}>👋</Text>
            </Text>
          </View>
          <Image
            source={require('../assets/images/avatar_profile.png')} // Replace with your profile image path
            style={styles.profileImage}
          />
        </View>
      </View>

      {/* Budget Allocation Section */}
      <View style={styles.budgetInfo}>
  <View style={styles.budgetContent}>
    <Text style={styles.budgetText}>
      Here is the budget of Food ......MAD now you have to answer these questions to help us divide this budget on breakfast, lunch, and dinner
    </Text>
    <Image
      source={require('../assets/images/calcule.jpg')} // Replace with actual image path
      style={styles.budgetImage}
    />
  </View>
</View>


      {/* Progress Section */}
      <View style={styles.progressContainer}>
        <View style={styles.progressItem}>
          <Text style={styles.progressValue}>40%</Text>
          <Text style={styles.progressLabel}>Breakfast</Text>
        </View>
        <View style={styles.progressItem}>
          <Text style={styles.progressValue}>40%</Text>
          <Text style={styles.progressLabel}>Lunch</Text>
        </View>
        <View style={styles.progressItem}>
          <Text style={styles.progressValue}>20%</Text>
          <Text style={styles.progressLabel}>Dinner</Text>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.container1}>
        {questions.map((question, index) => (
          <View key={index} style={styles.questionContainer}>
            <Text style={styles.questionText}>{question.text}</Text>
            {question.options.map((option, idx) => (
              <View key={idx} style={styles.optionContainer}>
                <RadioButton
                  value={option}
                  status={selectedOptions[question.text] === option ? 'checked' : 'unchecked'}
                  onPress={() => handleSelection(question.text, option)}
                />
                <Text style={styles.optionText}>{option}</Text>
              </View>
            ))}
          </View>
        ))}
        <Text style={styles.optionText}>In this question, if you choose an option, the other two options will progress by 10%.</Text>
        <Link href={'/Infomealdiv'} style={styles.button}>
          <Text style={styles.buttonText}>Confirm</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container1: {
    marginTop : height * 0.018, // Leaves space for the fixed header
    padding : 16,
  },
  fixedHeader: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 16,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  budgetInfo: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    
    marginVertical: 16,
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  budgetContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  budgetText: {
    flex: 1,
    fontSize: 11,
    letterSpacing: 0.2,
    color: 'gray',
    marginRight: 10, // Space between text and image
  },
  budgetImage: {
    width: width * 0.3,
    height: height*0.1,
    resizeMode: 'contain',
    borderRadius: 8, // Rounds the corners of the image
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: height * 0.02,
    height: height * 0.04,
  },
  progressItem: {
    alignItems: 'center',
  },
  progressValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5A67D8',
  },
  progressLabel: {
    fontSize: 12,
    color: '#666',
  },
  greeting: {
    fontSize: 18,
    color: '#666',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  wave: {
    fontSize: 20,
  },
  profileImage: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: (width * 0.15) / 2,
  },
  questionContainer: {
    marginBottom: 24,
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  optionText: {
    fontSize: 14,
  },
  button: {
    backgroundColor: '#5A67D8',
    marginHorizontal: width * 0.15,
    marginVertical: height * 0.04,
    marginBottom: height * 0.06,
    alignItems: 'center',
    paddingHorizontal: width * 0.24,
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Questionnaire;
