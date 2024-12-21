import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, Dimensions, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const { width, height } = Dimensions.get('window');

// Sample data for rooms, meals, and activities
const roomsData = [
  { id: '1', Room_price: '...............................', hotelName: '........................................', Room_type: '..................................' },
  { id: '2', Room_price: '...............................', hotelName: '........................................', Room_type: '..................................' },
  { id: '3', Room_price: '...............................', hotelName: '........................................', Room_type: '..................................' },
  { id: '4', Room_price: '...............................', hotelName: '........................................', Room_type: '..................................' },
  { id: '5', Room_price: '...............................', hotelName: '........................................', Room_type: '..................................' },
  { id: '6', Room_price: '...............................', hotelName: '........................................', Room_type: '..................................' },
];

const mealsData = [
  { id: '1', Meal_price: '...............................',restaurantName: '..............................', meal_type: '................................' },
  { id: '2', Meal_price: '...............................',restaurantName: '..............................', meal_type: '................................' },
  { id: '3', Meal_price: '...............................',restaurantName: '..............................', meal_type: '................................' },
];

const activitiesData = [
  { id: '1', price_of_the_activity: '...............................', Activity_Name : '..............................', Activity_Type: '............................' },
  { id: '2', price_of_the_activity: '...............................', Activity_Name : '..............................', Activity_Type: '............................' },
  { id: '3', price_of_the_activity: '...............................', Activity_Name : '..............................', Activity_Type: '............................' },
  { id: '5', price_of_the_activity: '...............................', Activity_Name : '..............................', Activity_Type: '............................' },
  { id: '4', price_of_the_activity: '...............................', Activity_Name : '..............................', Activity_Type: '............................' },
  { id: '6', price_of_the_activity: '...............................', Activity_Name : '..............................', Activity_Type: '............................' },
];

const BudgetScreen = () => {
  const renderRoomItem = ({ item }) => (
    <View style={styles.card}>
      <Image 
        style={styles.cardImage} 
        source={require('../assets/images/room.jpg')} 
      />
      <View style={styles.cardContent}>
        <Text style={styles.text}>Price of the room: {item.price} MAD</Text>
        <Text style={styles.text}>Hotel Name: {item.hotelName}</Text>
        <Text style={styles.text}>Type of the room: {item.type}</Text>
        <TouchableOpacity>
          <Text style={styles.viewDetails}>View details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderMealItem = ({ item }) => (
    <View style={styles.card}>
      <Image 
        style={styles.cardImage} 
        source={require('../assets/images/breakfast.jpg')} 
      />
      <View style={styles.cardContent}>
        <Text style={styles.text}>Price of the meal: {item.price} MAD</Text>
        <Text style={styles.text}>Restaurant Name: {item.restaurantName}</Text>
        <Text style={styles.text}>Type of the meal: {item.type}</Text>
        <TouchableOpacity>
          <Text style={styles.viewDetails}>View details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderActivityItem = ({ item }) => (
    <View style={styles.card}>
      <Image 
        style={styles.cardImage} 
        source={require('../assets/images/bananaboatride.jpg')} 
      />
      <View style={styles.cardContent}>
        <Text style={styles.text}>Activity: {item.activityName}</Text>
        <Text style={styles.text}>Price: {item.price} MAD</Text>
        <Text style={styles.text}>Type: {item.type}</Text>
        <TouchableOpacity>
          <Text style={styles.viewDetails}>View details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.fixedHeader}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello!</Text>
            <Text style={styles.userName}>Souneini Salma <Text style={styles.wave}>👋</Text></Text>
          </View>
          <Image
            source={require('../assets/images/avatar_profile.png')} // Replace with your profile image path
            style={styles.profileImage}
          />
        </View>
      </View>

      {/* Rooms Section with Scroll */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Rooms of hotels</Text>
          <TouchableOpacity>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollSection} nestedScrollEnabled>
          <FlatList
            data={roomsData}
            renderItem={renderRoomItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false} // Disable FlatList scrolling to use ScrollView instead
          />
        </ScrollView>
      </View>

      {/* Meals Section with Scroll */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Meals</Text>
          <TouchableOpacity>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollSection} nestedScrollEnabled>
          <Text style={styles.subSectionTitle}>Breakfasts</Text>
          <FlatList
            data={mealsData}
            renderItem={renderMealItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false} // Disable FlatList scrolling to use ScrollView instead
          />
          <Text style={styles.subSectionTitle}>Lunch</Text>
          <FlatList
            data={mealsData}
            renderItem={renderMealItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false} // Disable FlatList scrolling to use ScrollView instead
          />
          <Text style={styles.subSectionTitle}>Dinner</Text>
          <FlatList
            data={mealsData}
            renderItem={renderMealItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false} // Disable FlatList scrolling to use ScrollView instead
          />
        </ScrollView>
      </View>

      {/* Activities Section with Scroll */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Activities</Text>
          <TouchableOpacity>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollSection} nestedScrollEnabled>
          <FlatList
            data={activitiesData}
            renderItem={renderActivityItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false} // Disable FlatList scrolling to use ScrollView instead
          />
        </ScrollView>
      </View>
      <Link href={'/Infomealdiv'} style={styles.button}>
          <Text style={styles.buttonText}>Confirm your choices</Text>
        </Link>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
    padding: 0,
    margin: 0,
  },
  fixedHeader: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
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
  section: {
    height: height * 0.495,
    padding: 0,
    margin: 0,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderColor: '#D3D3D3', // Light grey color
    borderWidth: 1, // Optional: Add thickness to the border
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuIcon: {
    fontSize: 24,
  },
  scrollSection: {
    maxHeight: height * 0.495,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  subSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 10,
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    elevation: 1,
  },
  cardImage: {
    width: width * 0.2,
    height: height * 0.1,
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  text: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  viewDetails: {
    color: '#5A67D8',
    fontSize: 14,
    marginTop: 4,
  },
  button: {
    backgroundColor: '#5A67D8',
    marginHorizontal: width * 0.15,
    marginVertical: height * 0.04,
    // marginBottom: height * 0.06,
    alignItems: 'center',
    paddingHorizontal: width * 0.15,
    justifyContent: 'center',
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

export default BudgetScreen;
