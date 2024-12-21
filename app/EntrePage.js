import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Welcome Text */}
      <Text style={styles.title}>Welcome to Travel Budget Divider!</Text>

      <Image
        source={require('../assets/images/people_bag_illustartion.png')} // Replace with actual path of your image
        style={styles.illustration}
      />

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Enhance your travel experience with effortless expense tracking
      </Text>

      {/* Description */}
      <Text style={styles.description}>
        By effortlessly tracking expenses, splitting costs, and ensuring everyone stays on budget, 
        so you can focus on enjoying the journey without financial stress!
      </Text>

      {/* Pagination Indicator */}
      <View style={styles.pagination}>
        <View style={styles.dotActive} />
        <View style={styles.dotInactive} />
      </View>

      {/* Get Started Button */}
      <View style={styles.buttonContainer}>
        <Link href="/welcomePage" style={styles.link}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </View>
        </Link>
      </View>

      {/* Bottom Design */}
      <Image
        source={require('../assets/images/design_down1.png')} // Replace with actual path of your bottom design image
        style={styles.bottomDesign}
      />

      {/* Bottom Bar */}
      <View style={styles.bar} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: width * 0.05, // Adjust horizontal padding proportionally
  },
  illustration: {
    width: width * 0.85, // Responsive width, 85% of screen width
    height: height * 0.35, // Responsive height, 35% of screen height
    resizeMode: 'contain',
  },
  title: {
    fontSize: width * 0.05, // Adjust text size according to screen width
    fontWeight: 'bold',
    marginTop: height * 0.03, // Proportional top margin
    textAlign: 'center',
  },
  subtitle: {
    fontSize: width * 0.045, // Responsive text size
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: height * 0.01, // Proportional top margin for consistent spacing
    color: '#333',
  },
  description: {
    fontSize: width * 0.04, // Responsive text size
    textAlign: 'center',
    paddingHorizontal: width * 0.05, // Adjust padding according to screen width
    marginVertical: height * 0.02, // Proportional vertical spacing
    color: '#555',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.02, // Spacing below pagination
  },
  dotActive: {
    width: width * 0.025, // Responsive dot size
    height: width * 0.025, // Responsive dot size
    borderRadius: width * 0.0125, // Half of width for a perfect circle
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  dotInactive: {
    width: width * 0.025, // Responsive dot size
    height: width * 0.025,
    borderRadius: width * 0.0125,
    backgroundColor: '#4A90E2',
    marginHorizontal: 5,
  },
  buttonContainer: {
    alignItems: 'center', // Center buttorn horizontally
  },
  button: {
    backgroundColor: '#15215E',
    paddingVertical: height * 0.015, // Proportional vertical padding
    paddingHorizontal: width * 0.2, // Proportional horizontal padding
    borderRadius: 14,
    alignItems: 'center',
    marginVertical: height * 0.02, // Proportional vertical margins
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: width * 0.04, // Responsive text size
  },
  bottomDesign: {
    width: width, // Full width
    height: height * 0.25, // Height relative to 25% of screen height
    resizeMode: 'cover',
  },
  link: {
    width: '100%', // Ensure the link takes up full width
  },
  bar: {
    width: width * 0.75, // Proportional width
    height: height * 0.01, // Proportional height
    backgroundColor: '#fff',
    borderRadius: 5,
    position: 'absolute',
    bottom: height * 0.005, // Proportional bottom position
  },
});

