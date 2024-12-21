// import React from 'react';
// import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

// const BudgetDetailsScreen = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.greeting}>Hello !</Text>
//         <Text style={styles.userName}>Souneini Salma <Text style={styles.wave}>👋</Text></Text>
//         <Image
//           source={{ uri: 'https://example.com/avatar_profile.png' }} // Remplacez par l'URL de l'image du profil
//           style={styles.profileImage}
//         />
//       </View>

//       {/* Illustration and Info */}
//       <View style={styles.infoContainer}>
//         <Image
//           source={{ uri: 'https://example.com/illustration.png' }} // Remplacez par l'URL de l'image d'illustration
//           style={styles.illustration}
//         />
//         <Text style={styles.infoText}>
//           Your budget of food has been allocated across categories based on your preferences.
//         </Text>
//       </View>

//       {/* Budget Inputs */}
//       <View style={styles.budgetContainer}>
//         <Text style={styles.budgetLabel}>Food Budget:</Text>
//         <TextInput style={styles.input} placeholder="Enter food budget" />

//         <Text style={styles.budgetLabel}>Breakfast budget:</Text>
//         <TextInput style={styles.input} placeholder="Enter breakfast budget" />

//         <Text style={styles.budgetLabel}>Lunch Budget:</Text>
//         <TextInput style={styles.input} placeholder="Enter lunch budget" />

//         <Text style={styles.budgetLabel}>Dinner budget:</Text>
//         <TextInput style={styles.input} placeholder="Enter dinner budget" />
//       </View>

//       {/* Additional Information */}
//       <Text style={styles.additionalInfo}>
//         Specify this information to receive better recommendations
//       </Text>

//       {/* Per Person Budget Inputs */}
//       <View style={styles.budgetContainer}>
//         <Text style={styles.budgetLabel}>Budget for breakfast per person</Text>
//         <TextInput style={styles.input} placeholder="Specify the budget for breakfast per person" />

//         <Text style={styles.budgetLabel}>Budget for lunch per person</Text>
//         <TextInput style={styles.input} placeholder="Specify the budget for lunch per person" />

//         <Text style={styles.budgetLabel}>Budget for dinner per person</Text>
//         <TextInput style={styles.input} placeholder="Specify the budget for dinner per person" />
//       </View>

//       {/* Confirm Button */}
//       <TouchableOpacity style={styles.confirmButton}>
//         <Text style={styles.confirmButtonText}>Confirm</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#F4F6FA',
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   greeting: {
//     fontSize: 18,
//     color: '#666',
//   },
//   userName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   wave: {
//     fontSize: 18,
//   },
//   profileImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     marginTop: 10,
//   },
//   infoContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   illustration: {
//     width: '80%',
//     height: 80,
//     resizeMode: 'contain',
//     marginBottom: 10,
//   },
//   infoText: {
//     fontSize: 14,
//     textAlign: 'center',
//     color: '#333',
//   },
//   budgetContainer: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   budgetLabel: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   input: {
//     height: 40,
//     borderColor: '#E2E8F0',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//     backgroundColor: '#F4F6FA',
//   },
//   additionalInfo: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#5A67D8',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   confirmButton: {
//     backgroundColor: '#5A67D8',
//     paddingVertical: 15,
//     alignItems: 'center',
//     borderRadius: 10,
//     marginBottom: 30,
//   },
//   confirmButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default BudgetDetailsScreen;



import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function BudgetScreen() {
  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.fixedHeader}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello!</Text>
            <Text style={styles.userName}>
              Souneini Salma <Text style={styles.wave}>👋</Text>
            </Text>
          </View>
          <Image
            source={require('../assets/images/avatar_profile.png')} // Replace with your profile image path
            style={styles.profileImage}
          />
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.container1}>
        {/* Image */}
        <Image
          source={require('../assets/images/calcule.jpg')} // Replace with actual image path
          style={styles.budgetImage}
        />

        {/* Budget Text */}
        <Text style={styles.budgetText}>
          Your budget has been allocated across categories based on your preferences.
        </Text>

        {/* Budget Fields */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Food Budget:</Text>
          <TextInput style={styles.input} placeholder="here is the Total Budget" />

          <Text style={styles.label}>Breakfast budget:</Text>
          <TextInput style={styles.input} placeholder="here is the Accommodation Budget" />

          <Text style={styles.label}>Lunch budget:</Text>
          <TextInput style={styles.input} placeholder="here is the Food Budget" />

          <Text style={styles.label}>Dinner budget:</Text>
          <TextInput style={styles.input} placeholder="here is the Activities Budget" />
        </View>


        <Text style={styles.additionalInfo}>
                Specify this information to receive better recommendations
      </Text>

       {/* Per Person Budget Inputs */}
       <View style={styles.budgetContainer}>
         <Text style={styles.budgetLabel}>Budget for breakfast per person</Text>
         <TextInput style={styles.input} placeholder="Specify the budget for breakfast per person" />
         <Text style={styles.budgetLabel}>Budget for lunch per person</Text>
         <TextInput style={styles.input} placeholder="Specify the budget for lunch per person" />

        <Text style={styles.budgetLabel}>Budget for dinner per person</Text>
         <TextInput style={styles.input} placeholder="Specify the budget for dinner per person" />
       </View>


        {/* Continue Button */}
        <Link href="/recommandations" style={styles.button}>
          <Text style={styles.buttonText}>Confirm</Text>
        </Link>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container1: {
    padding: 16,
    paddingBottom: height * 0.06, // Extra space at the bottom for scrolling
  },
  fixedHeader: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 16,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  greeting: {
    fontSize: 18,
    color: '#666',
  },
  additionalInfo: {
    fontSize: 18,
    marginVertical: height*0.02,
    fontWeight: 'bold',
    color: '#5A67D8',
    textAlign: 'center',
    marginBottom: 20,
  },
    budgetLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  wave: {
    fontSize: 20,
  },
  budgetContainer: {
    backgroundColor: '#fff',
    // padding: 15,
    borderRadius: 10,
    marginVertical: 20,
  },
  profileImage: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: (width * 0.15) / 2,
  },
  budgetImage: {
    width: '100%',
    height: height * 0.22,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  budgetText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  inputContainer: {
    marginTop: height * 0.02,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: height * 0.058,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 9,
    paddingLeft: 10,
    backgroundColor: '#F5F5F5',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#5A67D8',
    marginHorizontal: width * 0.15,
    paddingHorizontal: width * 0.23,
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
