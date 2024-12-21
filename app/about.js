import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router'; // Importer Link depuis expo-router

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Welcome Text */}
      <Text style={styles.title}>Welcome to Travel Budget Divider!</Text>

      {/* Main Illustration */}
      <Image
        source={require('../assets/images/travel_illustration.png')} // Replace with the actual image path
        style={styles.illustration}
      />

      {/* Subtitle */}
      <Text style={styles.subtitle}>The ultimate tool to optimise your travel experience</Text>

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
        <Link href="/EntrePage" style={styles.link}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </View>
        </Link>
      </View>

      {/* Bottom Design */}
      <Image
        source={require('../assets/images/Design_down.png')} // Replace with the actual bottom design image path
        style={styles.bottomDesign}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: width * 0.05,
  },
  title: {
    fontSize: width * 0.05, // Responsive font size
    fontWeight: 'bold',
    marginTop: height * 0.03,
    textAlign: 'center',
  },
  illustration: {
    width: width * 0.9, // Responsive width
    height: height * 0.35, // 35% of the screen height
    resizeMode: 'contain',
    marginVertical: height * 0.02,
  },
  subtitle: {
    fontSize: width * 0.045, // Responsive font size
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: height * 0.01,
  },
  description: {
    fontSize: width * 0.04, // Responsive font size
    textAlign: 'center',
    paddingHorizontal: width * 0.05,
    color: '#555',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4A90E2',
    marginHorizontal: 5,
    marginVertical: height * 0.01,
  },
  dotInactive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  buttonContainer: {
    alignItems: 'center', // Centre horizontalement le bouton
  },
  button: {
    backgroundColor: '#15215E',
    paddingVertical: height * 0.013,
    paddingHorizontal: width * 0.13, // Responsive width
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: width * 0.04, // Responsive font size
  },
  bottomDesign: {
    width: width * 1, // Full width
    height: height * 0.25, // 25% of the screen height
    resizeMode: 'cover',
    marginTop: height * 0.02,
  },
  link: {
    width: '100%', // Assure que le lien prend toute la largeur du conteneur
  },
});
