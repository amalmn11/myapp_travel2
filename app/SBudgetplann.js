import React from 'react'; 
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import { Link } from 'expo-router';

const { width, height } = Dimensions.get('window');

const ExperienceScreen = () => {
  return (
    <View style={styles.container}>
      {/* Profile Header - Fixed */}
      <View style={styles.fixedHeader}> 
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello !</Text>
            <Text style={styles.userName}>
              Souneini Salma<Text style={styles.wave}> 👋</Text>
            </Text>
          </View>
          <Image
            source={require('../assets/images/avatar_profile.png')} // Remplacez par l'URL de l'image du profil
            style={styles.profileImage}
          />
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Experience Card */}
        <View style={styles.card}>
          <Image
            source={require('../assets/images/imageee.png')} // Remplacez par l'URL de l'image d'illustration
            style={styles.illustration}
          />
          <Text style={styles.cardTitle}>Your Experience Start Now !</Text>
          <Text style={styles.cardDescription}>
            We offer you the <Text style={styles.highlight}>Commencement Plan</Text>, a carefully crafted base package
            that includes accommodation and meals.
          </Text>

          {/* Input Fields */}
          <Text style={styles.label}>Total Budget</Text>
          <TextInput style={styles.input} placeholder="Enter the total budget" />

          <Text style={styles.label}>Destination City</Text>
          <TextInput style={styles.input} placeholder="Enter the destination city" />

          <Text style={styles.label}>Trip Duration</Text>
          <TextInput style={styles.input} placeholder="Enter the trip duration" />

          <Text style={styles.label}>Number of Travelers</Text>
          <TextInput style={styles.input} placeholder="Enter the number of travelers" />
        </View>

        {/* Confirm Button */}
        <Link href="/Quest" style={styles.button}>
          <Text style={styles.buttonText}>Confirm</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
  },
  fixedHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: '#FFFFFF',
    // paddingVertical: height * 0.01,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  greeting: {
    fontSize: width * 0.045,
    color: '#666',
  },
  userName: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#000',
  },
  wave: {
    fontSize: width * 0.05,
  },
  profileImage: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: (width * 0.15) / 2,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  scrollContent: {
    marginTop: height * 0.12,  // Ajoute un espace pour l'en-tête fixe
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    width: width * 0.95,
    height: height * 0.8,
    borderRadius: 10,
    marginHorizontal: width * 0.04,
    marginBottom: height * 0.03,
    paddingHorizontal: width * 0.02,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  illustration: {
    width: '80%',
    height: height * 0.2,
    resizeMode: 'contain',
    marginBottom: height * 0.02,
  },
  cardTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: height * 0.01,
  },
  cardDescription: {
    fontSize: width * 0.04,
    color: '#666',
    textAlign: 'center',
    marginBottom: height * 0.03,
  },
  highlight: {
    color: '#000',
    fontWeight: 'bold',
  },
  label: {
    fontSize: width * 0.04,
    alignSelf: 'flex-start',
    marginTop: height * 0.015,
    color: '#333',
  },
  input: {
    width: '100%',
    backgroundColor: '#F1F2F6',
    borderRadius: 8,
    padding: width * 0.03,
    marginTop: height * 0.005,
  },
  button: {
    width: width * 0.65,
    backgroundColor: '#5A67D8',
    borderRadius: 8,
    paddingVertical: height * 0.015,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: height * 0.01,
    marginVertical: height * 0.2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',

    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
});

export default ExperienceScreen;
