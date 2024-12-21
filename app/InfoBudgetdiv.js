import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function BudgetScreen() {
  return (
    <View style={styles.container}>
      {/* Fixed Header */}
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

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.container1}>
        {/* Image */}
        <Image
          source={require('../assets/images/calcule.jpg')} // Replace with actual image path
          style={styles.budgetImage}
        />

        {/* Budget Text */}
        <Text style={styles.budgetText}>
          Your budget has been allocated across categories based on your preferences.
        </Text>

        {/* Budget Fields */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Total Budget:</Text>
          <TextInput style={styles.input} placeholder="here is the Total Budget" />

          <Text style={styles.label}>Accommodation budget:</Text>
          <TextInput style={styles.input} placeholder="here is the Accommodation Budget" />

          <Text style={styles.label}>Food budget:</Text>
          <TextInput style={styles.input} placeholder="here is the Food Budget" />

          <Text style={styles.label}>Activities budget:</Text>
          <TextInput style={styles.input} placeholder="here is the Activities Budget" />
        </View>

        {/* Continue Button */}
        <Link href="/QuestMeals" style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </Link>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container1: {
    padding: 16,
    paddingBottom: height * 0.06, // Extra space at the bottom for scrolling
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
  budgetImage: {
    width: '100%',
    height: height * 0.22,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  budgetText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  inputContainer: {
    marginTop: height * 0.02,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: height * 0.058,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 9,
    paddingLeft: 10,
    backgroundColor: '#F5F5F5',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#5A67D8',
    marginHorizontal: width * 0.15,
    paddingHorizontal: width * 0.23,
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
