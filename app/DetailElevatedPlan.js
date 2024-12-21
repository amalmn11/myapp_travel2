import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ElevatedPlan = () => {
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
        {/* Elevated Plan Card */}
        <View style={styles.economicPlanCard}>
          <Text style={styles.economicPlanTitle}>Elevated Plan</Text>
            {/* Objective */}
            <Text style={styles.subheading1}>Objective:</Text>
            <Text style={styles.paragraph}>
                The <Text style={styles.bold}>Elevated Plan</Text> seeks a balanced approach by targeting average costs while still aiming to provide a moderate level of quality and functionality. This plan is designed for those who want a middle-ground solution that offers good value without the extremes of high cost or low quality.
            </Text>
            
            {/* Key Characteristics */}
            <Text style={styles.subheading2}>Key Characteristics:</Text>
            <Text style={styles.paragraph}>
                <Text style={styles.bold1}>1. Balanced Spending:</Text> Focuses on achieving a balance between cost and quality, ensuring that neither is sacrificed excessively.
            </Text>
            <Text style={styles.paragraph}>
                <Text style={styles.bold1}>2. Moderate Budget:</Text> Allocates funds to provide a reasonable level of service and features, often resulting in a more polished and effective solution than the Economic Plan.
            </Text>
            <Text style={styles.paragraph}>
                <Text style={styles.bold1}>3. Quality Assurance:</Text> Aims to deliver products or services that meet industry standards and offer a satisfactory user experience.
            </Text>
            <Text style={styles.paragraph}>
                <Text style={styles.bold1}>4. Supplier and Vendor Selection:</Text> Chooses suppliers and vendors that offer good value for money, typically involving a mix of competitive pricing and decent quality.
            </Text>
            <Text style={styles.paragraph}>
                <Text style={styles.bold1}>5. Enhanced Features:</Text> May include additional features or higher-quality materials compared to the Economic Plan, though not as advanced as those in the Luxury Plan.
            </Text>
            
            {/* Advantages */}
            <Text style={styles.subheading1}>Advantages:</Text>
            <Text style={styles.paragraph}>
                <Text style={styles.bold1}>1. Good Value for Money:</Text> Offers a balanced approach that can provide solid performance without the premium price.
            </Text>
            <Text style={styles.paragraph}>
                <Text style={styles.bold1}>2. Reasonable Quality:</Text> Ensures that products or services are dependable and effective.
            </Text>
            
            {/* Disadvantages */}
            <Text style={styles.subheading1}>Disadvantages:</Text>
            <Text style={styles.paragraph}>
                <Text style={styles.bold1}>1. Higher Cost Than Basic Options:</Text> May still be more expensive than the bare minimum solutions.
            </Text>
            <Text style={styles.paragraph}>
                <Text style={styles.bold1}>2. Limited Premium Features:</Text> Does not offer the high-end, premium experience available in the Luxury Plan.
            </Text>
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
    backgroundColor: '#DAE0FF',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    zIndex: 1,
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#253AA6',
  },
  subheading1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#00AA07',
  },
  subheading2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#00AA07',
  },
  paragraph: {
    fontSize: 15,
    marginVertical: 5,
    lineHeight: 24,
    marginLeft: 10,
  },
  bold: {
    fontWeight: 'bold',
    color: '#353535',
  },
  bold1: {
    fontWeight: 'bold',
    color: '#E86100',
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
});

export default ElevatedPlan;
