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
      text: 'Which category do you consider less important for your trip? ?',
      options: ['Accommodation (10%)', 'Food (10%)','Activities (10%)'],
    },
    {
        text: 'Which is more important for your trip: Comfortable accommodation or good food ?',
        options: ['Comfortable accommodation (10%)', 'Comfortable accommodation (10%)'],
      },
    {
      text: 'Which would you prefer to spend more on: Accommodation or activities?',
      options: ['Accommodation (10%)', 'Activities (10%)'],
    },
    {
      text: 'For your trip, which aspect is most important to you?',
      options: ['Comfortable accommodation (10%)', 'High-quality food (10%)', 'Exciting activities (10%)'],
    },
    {
      text: 'Would you rather spend more on food or on exciting activities ?',
      options: ['Food (10%)', ' Exciting activities (10%)'],
    },
    {
      text: 'For your trip, which category would you prioritize more: Accommodation or food?',
      options: ['Accommodation (10%)', '  Food (10%)'],
    },
    {
      text: 'Which category do you consider less important for your trip?',
      options: ['Accommodation (10%)', 'Food (10%)', 'Activities (10%)'],
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

      {/* Progress Section */}
      <View style={styles.progressContainer}>
        <View style={styles.progressItem}>
          <Text style={styles.progressValue}>40%</Text>
          <Text style={styles.progressLabel}>Accommodation</Text>
        </View>
        <View style={styles.progressItem}>
          <Text style={styles.progressValue}>40%</Text>
          <Text style={styles.progressLabel}>Food</Text>
        </View>
        <View style={styles.progressItem}>
          <Text style={styles.progressValue}>20%</Text>
          <Text style={styles.progressLabel}>Activities</Text>
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
        <Link href={'/InfoBudgetdiv'} style={styles.button}>
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
    height:height*0.09,
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