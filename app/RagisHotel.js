import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install @expo/vector-icons
import { Link } from 'expo-router'; // Importer Link pour la navigation
import { useRouter } from 'expo-router';
const { width, height } = Dimensions.get('window');


const RegistrationScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Header Container */}
      <View style={styles.headerContainer}>
        <Ionicons 
          name="arrow-back" 
          size={24} 
          style={styles.backIcon} 
          onPress={() => router.back()} // Utilisez router.back() pour revenir à l'écran précédent
        />
        
        <Text style={styles.title1}>Start the registration</Text>
      </View>
      <Text style={styles.title}>Personnel informations</Text>
      {/* Form */}
      <View style={styles.form}>
        <Text style={styles.label}>Owner’s Full Name</Text>
        <TextInput style={styles.input} placeholder="Enter the name owner’s full name " />

        <Text style={styles.label}>Email adress</Text>
        <TextInput style={styles.input} placeholder="Enter your email adress " />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter the password" />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput style={styles.input} placeholder="Confirm the password" secureTextEntry />

      </View>

      {/* Confirm Button */}
      <Link href="/CompleteRagisHotel" style={styles.button}>
        <Text style={styles.buttonText}>Confirm</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: width * 0.05,
    // paddingTop: Platform.OS === 'ios' ? height * 0.06 : height * 0.04,
    backgroundColor: '#fff',
    padding:0,
  },
  headerContainer: {
  flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.02,
    marginTop: height * 0.01,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: height * 0.01,
    height: height * 0.06,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,

    // Shadow for Android
    elevation: 4,
    backgroundColor: '#fff', 
  },
  backIcon: {
    marginLeft: width * 0.02,
    marginTop: height * 0.01,
  },
  title: {
    fontSize: width * 0.06, // responsive font size
    // fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: height * 0.03, // responsive vertical margin
  },
  title1: {
    fontSize: width * 0.05, // responsive font size
    // fontWeight: 'bold',
    textAlign: 'center',
    marginTop: height * 0.004,
    paddingHorizontal: width * 0.04,
    // marginVertical: height * 0.01, // responsive vertical margin
  },
  form: {
    marginTop: height * 0.04,
    marginBottom: height * 0.02,
    marginHorizontal: width * 0.05,
  },
  label: {
    fontSize: width * 0.04, // responsive label font size
    marginBottom: height * 0.005, // responsive margin
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 14,
    paddingVertical: height * 0.015, // responsive padding
    paddingHorizontal: width * 0.03, // responsive padding
    marginBottom: height * 0.015, // responsive margin
    backgroundColor: '#f6f6f6',
  },
  button: {
    backgroundColor: '#3A5BBC',
    borderRadius: 8,
    paddingVertical: height * 0.012, // responsive button height
    marginHorizontal: width * 0.19, // responsive margin
    alignItems: 'center',
    textAlign: 'center',
    marginTop: height * 0.03,
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.047, // responsive font size for button text
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RegistrationScreen;
