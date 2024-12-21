import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, ImageBackground, ScrollView } from 'react-native';
import { Link } from 'expo-router';
const { width, height } = Dimensions.get('window');

// Scaling functions
const scaleWidth = (size) => (width / 375) * size;  // assuming base width is 375
const scaleHeight = (size) => (height / 812) * size; // assuming base height is 812

export default function ExperienceScreen() {
  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greetingText}>Hello !</Text>
            <Text style={styles.nameText}>
              Souneini Salma <Text style={styles.wave}>👋</Text>
            </Text>
          </View>
          <Image source={require('../assets/images/avatar_profile.png')} style={styles.avatar} />
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Experience Card */}
        <View style={styles.experienceCard}>
          <Image source={require('../assets/images/experience.png')} style={styles.experienceImage} />
          <Text style={styles.experienceTitle}>Your Experience Starts Now!</Text>
          <Text style={styles.experienceDescription}>
            We offer you the <Text style={styles.boldText}>Commencement Plan</Text>, 
            a carefully crafted base package that includes accommodation and meals.
          </Text>
        </View>

        {/* Input fields */}
        <View style={styles.container1}>
          <ImageBackground
            source={require('../assets/images/background.png')} // replace with your image path
            style={styles.backgroundContainer}
            imageStyle={styles.backgroundImage}
          >
            <View style={styles.inputsContainer}>
              {/* First input field */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Choose the City</Text>
                <TextInput style={styles.input} placeholder="Enter the city" />
              </View>

              {/* Second input field */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Specify the number of days of vacation</Text>
                <TextInput style={styles.input} placeholder="Enter the number of days" keyboardType="numeric" />
              </View>

              {/* Third input field */}
              {/* <View style={styles.inputContainer}>
                <Text style={styles.label}>Specify the number of travelers</Text>
                <TextInput style={styles.input} placeholder="Enter the number of travelers" keyboardType="numeric" />
              </View> */}
            </View>
          </ImageBackground>
        </View>
        {/* Confirm Button */}
        <View  style={styles.confirmButton}>
        <Link  href="\TravelBudget">
            <Text style={styles.confirmButtonText}>Confirm</Text>
        </Link>
        </View>
      </ScrollView>

      
      {/* Fixed Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <Image
          source={require('../assets/images/house.png')} // Home Icon
          style={styles.navIcon}
        />
        <Image
          source={require('../assets/images/avatar_profile.png')} // Profile Icon
          style={styles.navIcon}
        />
        <Image
          source={require('../assets/images/icons_telegram.png')} // Messages Icon
          style={styles.navIcon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5EAFE',
  },
  container1: {
      marginHorizontal: scaleWidth(20),
    borderRadius: 10,
    backgroundColor: '#fff',

    height:height * 0.2,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    // Shadow for Android
    elevation: 8,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: 'white',
    zIndex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scaleWidth(20),
    paddingVertical: scaleHeight(15),
  },
  greetingText: {
    fontSize: scaleWidth(16),
    color: '#707070',
  },
  nameText: {
    fontSize: scaleWidth(20),
    fontWeight: 'bold',
    color: '#000',
  },
  wave: {
    fontSize: scaleWidth(20),
  },
  avatar: {
    width: scaleWidth(50),
    height: scaleHeight(50),
    borderRadius: 25,
  },
  scrollContent: {
    paddingTop: scaleHeight(90), // Adjusted to account for the fixed header height
    paddingBottom: scaleHeight(80), // Adjusted to account for the fixed bottom navigation height and additional margin for the button
  },
  experienceCard: {
    backgroundColor: '#3A5BBC',
    borderRadius: 15,
    padding: scaleWidth(20),
    alignItems: 'center',
    marginBottom: scaleHeight(20),
    marginHorizontal: scaleWidth(20),
    marginTop: scaleHeight(10),
  },
  experienceImage: {
    width: scaleWidth(120),
    height: scaleHeight(120),
    resizeMode: 'contain',
    marginBottom: scaleHeight(10),
  },
  experienceTitle: {
    fontSize: scaleWidth(20),
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: scaleHeight(10),
  },
  experienceDescription: {
    fontSize: scaleWidth(14),
    color: 'white',
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: scaleHeight(10),
    marginHorizontal: scaleWidth(20),
  },
  backgroundContainer: {
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: scaleHeight(20),
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  inputsContainer: {
    // paddingHorizontal: scaleWidth(20),
    paddingVertical: scaleHeight(20),
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
  },
  label: {
    fontSize: scaleWidth(14),
    marginBottom: scaleHeight(5),
    color: '#3E3D3D',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: scaleWidth(10),
    paddingVertical: scaleHeight(10),
    fontSize: scaleWidth(16),
    borderColor: '#ccc',
    borderWidth: 1,
  },
  confirmButton: {
    backgroundColor: '#3A5BBC',
    borderRadius: 10,
    paddingVertical: height * 0.013,
    marginHorizontal: height * 0.1,
    marginTop: height * 0.085,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontSize: scaleWidth(20),
    fontWeight: 'bold',
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  navIcon: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },
});
