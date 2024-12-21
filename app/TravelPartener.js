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
    backgroundColor: '#DAE0FF',
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
