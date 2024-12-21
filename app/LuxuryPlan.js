// import React,{ useState } from 'react';
// import { View, Text, StyleSheet, Image, ScrollView, Dimensions,TouchableOpacity } from 'react-native';
// import { Link } from 'expo-router';
// const { width, height } = Dimensions.get('window');

// const EconomicPlan = () => {

//   return (
//     <View style={styles.container}>
//       {/* Profile Section - Fixed at the top */}
//       <View style={styles.profileContainer}>
//         <View style={styles.textContainer}>
//           <Text style={styles.greeting}>Hello !</Text>
//           <Text style={styles.userName}>
//             Souneini Salma <Text style={styles.waveEmoji}>👋</Text>
//           </Text>
//         </View>
//         <Image
//           source={require('../assets/images/avatar_profile.png')} // Example image URL
//           style={styles.profileImage}
//         />
//       </View>

//       {/* Main Scrollable Content */}
//       <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
//         {/* Economic Plan Card */}
//         <View style={styles.economicPlanCard}>
//           <Text style={styles.economicPlanTitle}>Luxury Plan</Text>
//           <Text style={styles.economicPlanDescription}>
//           The Luxury Plan focuses on providing premium services and experiences by selecting higher-end options across two main categories:
//             <Text style={styles.economicPlanDesc}>{'\n'}• Accommodation{'\n'}• Food</Text>
//           </Text>
//         </View>

//         {/* Recommendations */}
//         <Text style={styles.recommendationTitle}>Here are the proposed recommendations :</Text>
        
//         <View style={styles.innerContainer}>
//         <Text style={styles.recommendationSubtitle}>Choose what you want ...</Text>
//         <View style={styles.innerContainer1}>
//         <Text style={styles.title}>• Accommodation</Text>

//         {/* Hotels Section */}
//         <Text style={styles.sectionTitle}>Hotels</Text>

//         <View style={styles.entry}>
//           <Image style={styles.image} source={require('../assets/images/house-placeholder.png')} />
//           <View style={styles.info}>
//             <Text style={styles.label}><Text style={styles.bold}>Name of hotel:</Text> </Text>
//             <Text style={styles.label}><Text style={styles.bold}>Address:</Text> </Text>
//             <Text style={styles.label}><Text style={styles.bold}>Type of the bedroom:</Text> </Text>
//             <Text style={styles.label}><Text style={styles.bold}>Price:</Text> </Text>
//           </View>
//         </View>

//         <View style={styles.entry}>
//           <Image style={styles.image} source={require('../assets/images/house-placeholder.png')} />
//           <View style={styles.info}>
//             <Text style={styles.label}><Text style={styles.bold}>Name of hotel:</Text> </Text>
//             <Text style={styles.label}><Text style={styles.bold}>Address:</Text> </Text>
//             <Text style={styles.label}><Text style={styles.bold}>Type of the bedroom:</Text> </Text>
//             <Text style={styles.label}><Text style={styles.bold}>Price:</Text> </Text>
//           </View>
//         </View>


//         <Text style={styles.title}>• Food</Text>

//         {/* Hotels Section */}
//         <Text style={styles.sectionTitle}>Breakfast</Text>

//         <View style={styles.entry}>
//           <Image style={styles.image} source={require('../assets/images/restaurent.jpg')} />
//           <View style={styles.info}>
//             <Text style={styles.label}><Text style={styles.bold}>Name of hotel:</Text> </Text>
//             <Text style={styles.label}><Text style={styles.bold}>Address:</Text> </Text>
//             <Text style={styles.label}><Text style={styles.bold}>Type of the bedroom:</Text> </Text>
//             <Text style={styles.label}><Text style={styles.bold}>Price:</Text> </Text>
//           </View>
//         </View>

//         <View style={styles.entry}>
//           <Image style={styles.image} source={require('../assets/images/restaurent.jpg')} />
//           <View style={styles.info}>
//             <Text style={styles.label}><Text style={styles.bold}>Name of hotel:</Text> </Text>
//             <Text style={styles.label}><Text style={styles.bold}>Address:</Text> </Text>
//             <Text style={styles.label}><Text style={styles.bold}>Type of the bedroom:</Text> </Text>
//             <Text style={styles.label}><Text style={styles.bold}>Price:</Text> </Text>
//           </View>
//         </View>

//         {/* Houses Section */}
//         <Text style={styles.sectionTitle}>Lunch</Text>

//         <View style={styles.entry}>
//           <Image style={styles.image} source={require('../assets/images/restaurent.jpg')} />
//           <View style={styles.info}>
//             <Text style={styles.label}><Text style={styles.bold}>Name of place:</Text> </Text>
//             <Text style={styles.label}><Text style={styles.bold}>Address:</Text> </Text>
//             <Text style={styles.label}><Text style={styles.bold}>Type of the bedroom:</Text> </Text>
//             <Text style={styles.label}><Text style={styles.bold}>Price:</Text> </Text>
//           </View>
//         </View>

//         <View style={styles.entry}>
//           <Image style={styles.image} source={require('../assets/images/restaurent.jpg')} />
//           <View style={styles.info}>
//             <Text style={styles.label}><Text style={styles.bold}>Name of place:</Text> </Text>
//             <Text style={styles.label}><Text style={styles.bold}>Address:</Text> </Text>
//             <Text style={styles.label}><Text style={styles.bold}>Type of the bedroom:</Text> </Text>
//             <Text style={styles.label}><Text style={styles.bold}>Price:</Text> </Text>
//           </View>
//         </View>

//         <Text style={styles.sectionTitle}>Dinner</Text>

//         <View style={styles.entry}>
//           <Image style={styles.image} source={require('../assets/images/restaurent.jpg')} />
//           <View style={styles.info}>
//             <Text style={styles.label}><Text style={styles.bold}>Name of place:</Text> </Text>
//             <Text style={styles.label}><Text style={styles.bold}>Address:</Text> </Text>
//             <Text style={styles.label}><Text style={styles.bold}>Type of the bedroom:</Text> </Text>
//             <Text style={styles.label}><Text style={styles.bold}>Price:</Text> </Text>
//           </View>
//         </View>

//         <View style={styles.entry}>
//           <Image style={styles.image} source={require('../assets/images/restaurent.jpg')} />
//           <View style={styles.info}>
//             <Text style={styles.label}><Text style={styles.bold}>Name of place:</Text> </Text>
//             <Text style={styles.label}><Text style={styles.bold}>Address:</Text> </Text>
//             <Text style={styles.label}><Text style={styles.bold}>Type of the bedroom:</Text> </Text>
//             <Text style={styles.label}><Text style={styles.bold}>Price:</Text> </Text>
//           </View>
//         </View>
//         <View style={styles.containerbutton}>
//       {/* Using the Link component from expo-router */}
//       <Link href="/BudgetCalculated" style={styles.button}>
//         <Text style={styles.buttonText}>Cofirm</Text>
//       </Link>
//     </View>
//         </View>
//         </View>
//       </ScrollView>

//       {/* Bottom Navigation - Fixed at the bottom */}
//       <View style={styles.bottomNavigation}>
//         <Image
//           source={require('../assets/images/house.png')} // Home Icon
//           style={styles.navIcon}
//         />
//         <Image
//           source={require('../assets/images/avatar_profile.png')} // Profile Icon
//           style={styles.navIcon}
//         />
//         <Image
//           source={require('../assets/images/icons_telegram.png')} // Messages Icon
//           style={styles.navIcon}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#DAE0FF',
//   },
//   profileContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     justifyContent: 'space-between',
//     padding: 10,
//     backgroundColor: '#fff',
//     zIndex: 1,
//     position: 'absolute',
//     top: 0,
//     width: '100%',
//   },
//   textContainer: {
//     flex: 1,
//   },
//   globalcontainer: {
//       backgroundColor: '#fff',
//       marginHorizontal: width * 0.03,
//       borderRadius: 10,
//       borderColor: '#000',
//   },
//   greeting: {
//     fontSize: 18,
//     marginBottom: 5,
//   },
//   userName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   waveEmoji: {
//     fontSize: 20,
//   },
//   profileImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   scrollContainer: {
//     flex: 1,
//     marginTop: height * 0.11,
//     marginBottom: height * 0.06,
//   },
//   scrollContent: {
//     paddingBottom: 20,
//   },
//   economicPlanCard: {
//     backgroundColor: '#fff',
//     borderColor: '#000',
//     padding: 10,
//     marginHorizontal: 10,
//     marginBottom: 10,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   economicPlanTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#22166D',
//     marginBottom: 1,
//   },
//   economicPlanDescription: {
//     fontSize: 12,
//     color: '#333',
//   },
//   economicPlanDesc: {
//       fontWeight: 'bold',
//   },
//   recommendationTitle: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     marginLeft: 15,
//     marginBottom: 10,
//   },
//   innerContainer: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 10,
//     marginHorizontal: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 10,
//   },
//   innerContainer1: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 10,
//     // marginHorizontal: 1,
//     // borderColor: '#000',
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 10,
//     elevation: 3,
//     marginTop: 8,
//   },
//   recommendationSubtitle: {
//     fontSize: 14,
//     color: '#777',
//   },
//   title: {
//     fontSize: 16,
//     color: '#353535',
//     fontWeight: 'bold',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     // fontWeight: 'bold',
//     marginVertical: 5,
//     marginHorizontal: 11,
//     color: '#000',
//   },
//   entry: {
//     flexDirection: 'row',
//     backgroundColor: '#e8edf7',
//     padding: 5,
//     borderRadius: 5,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 10,
//     alignItems: 'flex-start',
//     marginHorizontal: 0,
//   },
//   image: {
//     width: 50,
//     height: 50,
//     backgroundColor: '#ddd',
//     borderRadius: 4,
//     marginRight: 15,
//     marginTop: 18,
//   },
//   imagehouse: {
//     width: 50,
//     height: 50,
//     backgroundColor: '#ddd',
//     borderRadius: 4,
//     marginRight: 15,
//     marginVertical: 5,
//   },
//   info: {
//     flex: 1,
//   },
//   info1: {
//     flex: 1,
//   },
//   label: {
//     fontSize: 13,
//     marginBottom: 3,
//   },
//   bold: {
//     fontWeight: 'semibold',
//     color: '#353535',
//   },
//   bottomNavigation: {
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 10,
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   navIcon: {
//     width: 30,
//     height: 30,
//     borderRadius: 25,
//   },
//   containerbutton: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: '#4a63d0', // Blue color matching the button in the image
//     paddingVertical: 5,
//     paddingHorizontal: 50,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default EconomicPlan;



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
      <View style={styles.economicPlanCard}>          
       <Text style={styles.economicPlanTitle}>Luxury Plan</Text>
          <Text style={styles.economicPlanDescription}>
         The Luxury Plan focuses on providing premium services and experiences by selecting higher-end options across two main categories:
             <Text style={styles.economicPlanDesc}>{'\n'}• Accommodation{'\n'}• Food {'\n'}• Activity</Text>
           </Text>
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
      <Link href={'/BudgetCalculated'} style={styles.button}>
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
    economicPlanCard: 
    {
    backgroundColor: '#fff',
    borderColor: '#000',
    padding: 10,
    marginHorizontal: width*0.02,
    marginVertical: height*0.02,
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

