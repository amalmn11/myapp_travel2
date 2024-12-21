import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,Dimensions, StyleSheet, ScrollView, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');
const RegistrationScreen = () => {
    const router = useRouter();
  const [category, setCategory] = useState('Hotel');
  const [amenities, setAmenities] = useState(['Wi-Fi', 'Pool', 'Room Service', 'Parking']);
  const [provideFoodService, setProvideFoodService] = useState(null);
  const [isCategoryModalVisible, setIsCategoryModalVisible] = useState(false);

  const categories = ['Hotel', 'Restaurant']; // Add more categories as needed

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>{'<'} Continue the registration</Text>
        </TouchableOpacity>
      </View> */}
      <View style={styles.headerContainer}>
        <Ionicons 
          name="arrow-back" 
          size={24} 
          style={styles.backIcon} 
          onPress={() => router.back()} // Utilisez router.back() pour revenir à l'écran précédent
        />
        <TouchableOpacity>
          <Text style={styles.title2}>Continue the registration</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Business Information</Text>

      {/* Category of the business */}
      <Text style={styles.label1}>Category of the business</Text>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setIsCategoryModalVisible(true)}
      >
        <Text style={styles.dropdownText}>{category}</Text>
      </TouchableOpacity>

      {/* Modal for category selection */}
      <Modal
        transparent={true}
        visible={isCategoryModalVisible}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {categories.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.modalItem}
                onPress={() => {
                  setCategory(item);
                  setIsCategoryModalVisible(false);
                }}
              >
                <Text style={styles.modalItemText}>{item}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setIsCategoryModalVisible(false)}
            >
              <Text style={styles.modalCloseButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Hotel Name */}
      <View style={styles.inputContainer}>
      <Text style={styles.label}>Hotel Name</Text>
      <TextInput style={styles.input} placeholder="Enter the hotel name" />

      {/* Hotel Address */}
      <Text style={styles.label}>Hotel Address</Text>
      <TextInput style={styles.input} placeholder="Enter the hotel address" />

      {/* Contact Number */}
      <Text style={styles.label}>Contact Number for Hotel</Text>
      <TextInput style={styles.input} placeholder="Enter hotel contact number" keyboardType="phone-pad" />

      {/* Hotel City */}
      <Text style={styles.label}>Hotel City</Text>
      <TextInput style={styles.input} placeholder="Enter the hotel city" />

      {/* Hotel Category */}
      <Text style={styles.label}>Hotel Category</Text>
      <TextInput style={styles.input} placeholder="Select your hotel category (luxury, ...)" />

      {/* Hotel Image */}
      <Text style={styles.label}>Hotel Image</Text>
      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Upload image/logo of your hotel</Text>
      </TouchableOpacity>

      {/* Hotel Classification */}
      <Text style={styles.label}>Hotel Classification</Text>
      <View style={styles.starContainer}>
        {[...Array(5)].map((_, index) => (
          <Text key={index} style={styles.star}>★</Text>
        ))}
      </View>

      {/* Amenities Offered */}
      <Text style={styles.label}>Amenities Offered</Text>
      <View style={styles.amenitiesContainer}>
        {amenities.map((amenity, index) => (
          <TouchableOpacity key={index} style={styles.amenity}>
            <Text style={styles.amenityText}>{amenity} ✕</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.addAmenityButton}>
          <Text style={styles.addAmenityText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Number of Rooms */}
      <Text style={styles.label}>Number of Rooms</Text>
      <TextInput style={styles.input} placeholder="Enter the number of rooms" keyboardType="numeric" />

      {/* Hotel Description */}
      <Text style={styles.label}>Hotel Description</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Describe your hotel and its features"
        multiline
      />

      {/* Food Services */}
      <Text style={styles.label}>Do you provide food services?</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity onPress={() => setProvideFoodService(true)} style={styles.radioOption}>
        {provideFoodService === true && <View style={styles.radioSelected} />}
          <Text style={styles.radioText}>Yes</Text>

        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => setProvideFoodService(false)} style={styles.radioOption}>
        {provideFoodService === false && <View style={styles.radioSelected} />}
          <Text style={styles.radioText}>No</Text>
          
        </TouchableOpacity>
      </View>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingBottom: 16,
  },
  inputContainer: {
      marginHorizontal: width * 0.03,
  },
  headerContainer: {
  flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.02,
    // marginTop: height * 0.01,
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
  title2: {
    fontSize: width * 0.05, // responsive font size
    // fontWeight: 'bold',
    textAlign: 'center',
    marginTop: height * 0.01,
    marginHorizontal: width * 0.14,
    // marginVertical: height * 0.03, // responsive vertical margin
  },
  backIcon: {
    marginLeft: width * 0.02,
    marginTop: height * 0.01,
  },
  backButton: {
    fontSize: 16,
    color: '#5A67D8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  label: {
    
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    marginBottom: 5,
  },
  label1: {
    marginHorizontal: width * 0.03,
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    marginBottom: 5,
  },
  dropdown: {
    backgroundColor: '#F4F6FA',
    marginLeft: width * 0.03,
    marginRight: width * 0.4,
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderColor: '#D3D3D3', // Light grey border color
    borderWidth: 1,         // Border width
  },
  dropdownText: {
    fontSize: 14,
    color: '#333',
    marginLeft: width * 0.03,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
  },
  modalItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  modalItemText: {
    fontSize: 16,
    color: '#333',
  },
  modalCloseButton: {
    padding: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  modalCloseButtonText: {
    color: '#5A67D8',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#F4F6FA',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderColor: '#D3D3D3', // Light grey border color
    borderWidth: 1,         // Border width
  },
  uploadButton: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  uploadButtonText: {
    color: '#666',
  },
  starContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  star: {
    fontSize: 24,
    color: '#CCCCCC',
    marginRight: 4,
  },
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  amenity: {
    backgroundColor: '#5A67D8',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    margin: 5,
  },
  amenityText: {
    color: '#FFFFFF',
  },
  addAmenityButton: {
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    margin: 5,
  },
  addAmenityText: {
    color: '#333',
  },
  textArea: {
    height: 100,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioText: {
    fontSize: 14,
    marginRight: 6,
  },
  radioSelected: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#5A67D8',
  },
  confirmButton: {
    backgroundColor: '#5A67D8',
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RegistrationScreen;
