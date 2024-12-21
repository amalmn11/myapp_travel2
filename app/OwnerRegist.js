import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView,Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Link } from 'expo-router';
export default function App() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image source={require('../assets/images/welcomper.png')} style={styles.icon} />
        <Text style={styles.headerText}>BusinessOwner's Name</Text>
      </View>

      {/* Main Text Section */}
      <Text style={styles.mainText}>Here is your businesses</Text>
      <Text style={styles.subText}>Select the category of business you would like to view or manage</Text>

      {/* Horizontal Scroll Section */}
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer} showsHorizontalScrollIndicator={false}>
      <Link href="/RagisHotel"> {/* Use the Link component with href pointing to the target screen */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Manage Hotel</Text>
        <Image source={require('../assets/images/hotel.jpg')} style={styles.cardImage} />
      </View>
    </Link>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Manage Restaurant</Text>
          <Image source={require('../assets/images/repas.jpg')} style={styles.cardImage} />
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Manage Activity</Text>
          <Image source={require('../assets/images/activity.png')} style={styles.cardImage} />
        </View>
      </ScrollView>

      {/* Confirm Button */}
      {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#EAEEFF',
    padding: 20,
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  header: {
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    height: height*0.07,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,       // Border width
    borderColor: '#ccc',  // Border color
    // borderRadius: 8,      // Rounded corners
    marginBottom: 20,
  },
  icon: {
    width: width*0.15,
    height: height*0.07,
    marginRight: 10,
    marginTop: height*0.01,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft:width*0.025,
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4D5BD4',
    marginTop: height*0.04,
    marginBottom: height*0.02,
  },
  subText: {
    fontSize: 14,
    color: '#222222',
    textAlign: 'center',
    // marginBottom: 20,
    width: width*0.8,
    height: height*0.04,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: width*0.1
  },
  scrollContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
    width: width * 0.9,
    height: height * 0.41,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 33,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: height * 0.02,
  },
  cardImage: {
    marginTop: height * 0.05,
    width: width * 0.42,
    height:height * 0.2,
  },
  button: {
    backgroundColor: '#4D5BD4',
    paddingVertical: 15,
    borderRadius: 8,
    width: width * 0.7,
    marginHorizontal: width * 0.15,
    // alignItems: 'center',
    marginTop: 20,
    marginBottom: height * 0.1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: width * 0.245,
  },
});
