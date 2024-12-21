import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated, Dimensions, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useRouter } from 'expo-router'; // Import useRouter

const { width, height } = Dimensions.get('window');

const TripCostScreen = () => {
  const [fadeAnim1] = useState(new Animated.Value(0)); // Animation for the first section
  const [fadeAnim2] = useState(new Animated.Value(0)); // Animation for the second section
  const [selectedOption, setSelectedOption] = useState(''); // State for RadioButton selection
  const [countdown, setCountdown] = useState(0); // State for countdown timer
  const [timerStarted, setTimerStarted] = useState(false); // State to track if timer has started
  const router = useRouter(); // Use useRouter hook

  // Ref to store the timeout ID
  const navigationTimeoutRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    // Start animation for the first section after 1 second
    setTimeout(() => {
      Animated.timing(fadeAnim1, {
        toValue: 1, // Target opacity
        duration: 1000, // Duration for first section fade-in
        useNativeDriver: true,
      }).start(() => {
        // Start animation for the second section after the first finishes
        setTimeout(() => {
          Animated.timing(fadeAnim2, {
            toValue: 1, // Target opacity for second section
            duration: 1000, // Duration for second section fade-in
            useNativeDriver: true,
          }).start();
        }, 1000); // 1 second delay after first section fade-in
      });
    }, 1000); // Initial delay before first section starts
  }, [fadeAnim1, fadeAnim2]);

  useEffect(() => {
    // Start the countdown timer when an option is selected
    if (selectedOption) {
      setCountdown(5); // Set countdown to 5 seconds
      setTimerStarted(true);

      // Update the countdown every second
      timerRef.current = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleNavigation(); // Trigger navigation when timer ends
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    // Clear interval if selectedOption changes
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [selectedOption]);

  const handleOptionChange = (value) => {
    setSelectedOption(value);

    // Clear the previous timeout if any
    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
    }
  };

  const handleNavigation = () => {
    if (selectedOption === 'Yes') {
      router.push('/TransportActivity'); // Navigate to TransportationActivity
    } else if (selectedOption === 'No') {
      router.push('/DetailDivision'); // Navigate to DetailDivision
    }
  };

  return (
    <View style={styles.container}>
      {/* Animated First Section (Image + Cost) */}
      <Animated.View style={{ opacity: fadeAnim1 }}>
        <Image
          source={require('../assets/images/happy.png')} // Replace with your image path
          style={styles.image}
        />
        <Text style={styles.descriptionText}>The total cost of the trip which includes accommodation, food and activities is </Text>
        <View style={styles.costButton}>
          <Text style={styles.costText}>...MAD</Text>
        </View>
      </Animated.View>

      {/* Animated Second Section (RadioButton Section) */}
      {/* <Animated.View style={{ opacity: fadeAnim2 }}>
        <Text style={styles.checkboxText}>
          Would you also like us to arrange activities and transportation for you in this city?
        </Text>

        <View style={styles.radioButtonContainer}>
          <TouchableOpacity
            style={styles.radioButtonOption}
            onPress={() => handleOptionChange('Yes')}
          >
            <RadioButton
              value="Yes"
              status={selectedOption === 'Yes' ? 'checked' : 'unchecked'}
              onPress={() => handleOptionChange('Yes')} // Ensure the button changes the state too
            />
            <Text style={styles.label}>Yes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioButtonOption}
            onPress={() => handleOptionChange('No')}
          >
            <RadioButton
              value="No"
              status={selectedOption === 'No' ? 'checked' : 'unchecked'}
              onPress={() => handleOptionChange('No')} // Ensure the button changes the state too
            />
            <Text style={styles.label}>No</Text>
          </TouchableOpacity>
        </View>
        
        {timerStarted && (
          <Text style={styles.timerText}>
            You have {countdown} seconds to confirm your choice.
          </Text>
        )}
      </Animated.View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: width * 0.9,
    height: height * 0.3,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  costButton: {
    borderColor: '#9F9F9F',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 50,
    marginBottom: 30,
    alignItems: 'center',
  },
  costText: {
    fontSize: 18,
    color: '#333',
  },
  checkboxText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
  },
  radioButtonOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  timerText: {
    fontSize: 16,
    color: '#ff0000',
    marginTop: 20,
    // marginHorizontal: 40,
    textAlign: 'center',
  },
});

export default TripCostScreen;
