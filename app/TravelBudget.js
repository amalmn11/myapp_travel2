import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { Link } from 'expo-router';
const { width, height } = Dimensions.get('window');

const Travel = () => {
  return (
    <View style={styles.container}>
      {/* Profile Section - Fixed at the top */}
      <View style={styles.profileContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.greeting}>Hello !</Text>
          <Text style={styles.userName}>
            Souneini Salma <Text style={styles.waveEmoji}>👋</Text>
          </Text>
        </View>
        <Image
          source={require('../assets/images/avatar_profile.png')} // Example image URL
          style={styles.profileImage}
        />
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        {/* Choose Plan Section */}
        <View style={styles.planCard}>
        <Image
          source={require('../assets/images/present.png')} // Replace with your image path
          style={styles.planImage} // Style for the image
          resizeMode="contain" // Make sure the image doesn't stretch
        />
        <View style={styles.planTextContainer}>
          <View style={styles.contain}>
            <Text style={styles.choosePlanText}>Choose the plan that you prefer</Text>
          </View>
          
          {/* Text Container */}
          <Text style={styles.choosePlanSubtitle}>
            <Text style={styles.arrow}>→ </Text> {/* Bold and red arrow */}
            unlock a tailored experience designed to ensure every moment of your journey
          </Text>
        </View>
      </View>


        {/* Economic Plan */}
        <View style={styles.card}>
          <Text style={styles.cardTitle1}>Economic Plan</Text>
          <View style={styles.buttonContainer}>
          <Link href="/DetailEconomicPlan" style={styles.buttonDetails1}>
              See details
          </Link>
          <Link href="/EconomicPlan" style={styles.buttonTry1}>
              Try it
          </Link>
          </View>
        </View>

        {/* Elevated Plan */}
        <View style={styles.card}>
          <Text style={styles.cardTitle2}>Elevated Plan</Text>
          <View style={styles.buttonContainer}>
            <Link href="/DetailElevatedPlan" style={styles.buttonDetails2}>
                See details
            </Link>
            <Link href="/ElevatedPlan" style={styles.buttonTry2}>
                Try it
            </Link>
          </View>
        </View>

        {/* Luxury Plan */}
        <View style={styles.card}>
          <Text style={styles.cardTitle3}>Luxury Plan</Text>
          <View style={styles.buttonContainer}>
          <Link href="/DetailLuxuryPlan" style={styles.buttonDetails3}>
                See details
            </Link>
            <Link href="/LuxuryPlan" style={styles.buttonTry3}>
                Try it
            </Link>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation - Fixed at the bottom */}
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEEFF',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    zIndex: 1, // Ensure it stays on top
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  textContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 18,
    marginBottom: 5,
    color: '#7C7B7B',
  },

  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  waveEmoji: {
    fontSize: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  scrollContainer: {
    flex: 1,
    marginTop: 80, // Offset by the profile section's height
    marginBottom: 60, // Offset for bottom navigation
  },
  scrollContent: {
    paddingBottom: 20,
  },

  choosePlanSubtitle: {
    marginTop: 5,
    fontSize: 14,
    color: '#6B6B6B',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    
    marginBottom: 10,
    marginHorizontal: width * 0.02,
    borderWidth: 1,
    borderColor: '#BBBBBB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: height * 0.16,
  },
  cardTitle1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5B6AF4',
  },
  cardTitle2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#253AA6',
  },
  cardTitle3: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#22166D',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop:height * 0.1,
    height: height * 0.037,
    // alignItems: 'center',
    // marginBottom: 10,
  },
  buttonDetails1: {
    backgroundColor: '#5B6AF4',
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonDetails2: {
    backgroundColor: '#253AA6',
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonDetails3: {
    backgroundColor: '#22166D',
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonTry1: {
    backgroundColor: '#00AA07',
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonTry2: {
    backgroundColor: '#FA9806',
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonTry3: {
    backgroundColor: '#E12323',
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
  planCard: {
    flexDirection: 'row', // Align elements in a row (image on the left, text on the right)
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center', // Center vertically
    borderWidth: 1,
    borderColor: '#BBBBBB',
    marginHorizontal: width * 0.02,
    height: height * 0.2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  planImage: {
    width: width * 0.3, // Adjust image width as needed
    height: height * 0.2, // Adjust image height as needed
    // marginRight: width * 0.03, // Space between the image and the text container
  },
  planTextContainer: {
    flex: 1, // Ensure the text takes up remaining space
    justifyContent: 'center', // Center text vertically
  },
  contain: {
    backgroundColor: '#5A7EFF', // Blue background
    borderRadius: 12,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.01,
    marginBottom: height * 0.01, // Space between the title and the subtitle
    width: 'auto', // Ensures it only takes up as much space as the text
  },
  choosePlanText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff', // White text color to match the background
    paddingVertical: height * 0.01,
  },
  arrow: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5A7EFF', // Bold and red for the arrow
    // marginRight: 5, // Space between the arrow and the rest of the text
  },
  choosePlanSubtitle: {
    fontSize: 12,
    color: '#666', // Regular color for the rest of the text
  },
});

export default Travel;
