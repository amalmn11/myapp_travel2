import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions,TouchableOpacity,TextInput } from 'react-native';
import { Link } from 'expo-router';
const { width, height } = Dimensions.get('window');
import { useState } from 'react';

const Travel = () => {
    const [isSelected, setIsSelected] = useState(false);  // État pour la sélection
    const [inputValue, setInputValue] = useState('');      // État pour l'input

    const [isSelected1, setIsSelected1] = useState(false);  // État pour la sélection
    const [inputValue1, setInputValue1] = useState('');      // État pour l'input
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
      {/* Main Scrollable Content */}
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>

        {/* Recommendations */}
        <Text style={styles.recommendationTitle}>Here are the proposed recommendations :</Text>
        
        <View style={styles.innerContainer}>
        <Text style={styles.recommendationSubtitle}>Choose what you want ...</Text>
        <View style={styles.innerContainer1}>
        <Text style={styles.title}>• Transportation</Text>

        <TouchableOpacity onPress={() => setIsSelected1(!isSelected1)}>
        <View style={styles.entry}>
          <View style={styles.info}>
            <Text style={styles.label}><Text style={styles.bold}>The means of transportation:</Text> </Text>
            <Text style={styles.label}><Text style={styles.bold}>Price:</Text> </Text>
            {isSelected1 && (
            <>
                <Text style={styles.question}>Specify the number of trips you would like to take</Text>
                <TextInput
                style={styles.input}
                placeholder="Enter the number"
                keyboardType="numeric"
                value={inputValue1}
                onChangeText={setInputValue1}
                />
            </>
            )}
          </View>
        </View>
        </TouchableOpacity>

        


        <View style={styles.entry}>
          <View style={styles.info}>
            <Text style={styles.label}><Text style={styles.bold}>The means of transportation:</Text> </Text>
            <Text style={styles.label}><Text style={styles.bold}>Price:</Text> </Text>
          </View>
        </View>

        <Text style={styles.title}>• Activities</Text>
        <TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
        <View style={styles.entry}>
          <Image style={styles.image} source={require('../assets/images/restaurent.jpg')} />
          <View style={styles.info1}>
            <Text style={styles.label}><Text style={styles.bold}>The activity:</Text> </Text>
            <Text style={styles.label}><Text style={styles.bold}>Price:</Text> </Text>
            {isSelected && (
            <>
                <Text style={styles.question}>How many times would you like to do this activity?</Text>
                <TextInput
                style={styles.input}
                placeholder="Enter the number"
                keyboardType="numeric"
                value={inputValue}
                onChangeText={setInputValue}
                />
            </>
            )}
          </View>
        </View>
        </TouchableOpacity>
        <View style={styles.entry}>
          <Image style={styles.image} source={require('../assets/images/restaurent.jpg')} />
          <View style={styles.info1}>
            <Text style={styles.label}><Text style={styles.bold}>The activity:</Text> </Text>
            <Text style={styles.label}><Text style={styles.bold}>Price:</Text> </Text>
            
          </View>
        </View>
        <View style={styles.entry}>
          <Image style={styles.image} source={require('../assets/images/restaurent.jpg')} />
          <View style={styles.info1}>
            <Text style={styles.label}><Text style={styles.bold}>The activity:</Text> </Text>
            <Text style={styles.label}><Text style={styles.bold}>Price:</Text> </Text>
          </View>
        </View>
        <View style={styles.entry}>
          <Image style={styles.image} source={require('../assets/images/restaurent.jpg')} />
          <View style={styles.info1}>
            <Text style={styles.label}><Text style={styles.bold}>The activity:</Text> </Text>
            <Text style={styles.label}><Text style={styles.bold}>Price:</Text> </Text>
          </View>
        </View>
        <View style={styles.containerbutton}>
        {/* Using the Link component from expo-router */}
        <Link href="/BudgetCalculated" style={styles.button}>
            <Text style={styles.buttonText}>Cofirm</Text>
        </Link>
        </View>
        </View>
        </View>
      </ScrollView>

      {/* Main Scrollable Content */}
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
  scrollContainer: {
    flex: 1,
    marginTop: height * 0.11,
    marginBottom: height * 0.06,
  },
  question: {
    fontWeight: 'semibold',
    color: '#353535',
    fontSize: 13,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  economicPlanCard: {
    backgroundColor: '#fff',
    borderColor: '#000',
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  economicPlanTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5B6AF4',
    marginBottom: 1,
  },
  economicPlanDescription: {
    fontSize: 12,
    color: '#333',
  },
  economicPlanDesc: {
      fontWeight: 'bold',
  },
  recommendationTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 10,
  },
  innerContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  innerContainer1: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    // marginHorizontal: 1,
    // borderColor: '#000',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 3,
    marginTop: 8,
  },
  recommendationSubtitle: {
    fontSize: 14,
    color: '#777',
  },
  title: {
    fontSize: 16,
    color: '#353535',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    // fontWeight: 'bold',
    marginVertical: 5,
    marginHorizontal: 11,
    color: '#000',
  },
  entry: {
    flexDirection: 'row',
    backgroundColor: '#e8edf7',
    padding: 5,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    alignItems: 'flex-start',
    marginHorizontal: 0,
    marginTop: 10,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: '#ddd',
    borderRadius: 4,
    marginRight: 15,
    marginVertical: 5,
    // marginTop: 18,
  },
  imagehouse: {
    width: 50,
    height: 50,
    backgroundColor: '#ddd',
    borderRadius: 4,
    marginRight: 15,
    marginVertical: 5,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
  },
  info1: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 10,
  },
  label: {
    fontSize: 13,
    marginBottom: 3,
  },
  bold: {
    fontWeight: 'semibold',
    color: '#353535',
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
  button: {
    backgroundColor: '#4a63d0', // Blue color matching the button in the image
    marginHorizontal: 70,
    paddingVertical:10, // Increased padding for better button appearance
    borderRadius: 5,
    paddingHorizontal: 50, // Optional: Add padding to the left and right
  },
  buttonText: {
    color: '#fff',
    fontSize: 16, // Optional: Set font size for better readability
    fontWeight: 'bold', // Optional: Make the text bold for emphasis
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
  input: {
  height: 30,
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 4,
  marginTop: 5,
  paddingHorizontal: 10,
  backgroundColor: '#fff',
},
});

export default Travel;
