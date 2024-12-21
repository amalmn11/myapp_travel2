import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const LuxuryPlan = () => {
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
        {/* Luxury Plan Card */}
        <View style={styles.luxuryPlanCard}>
        <Text style={styles.economicPlanTitle}>Luxury Plan</Text>
            {/* Objective */}
            <Text style={styles.subheading1}>Objective:</Text>
            <Text style={styles.paragraph}>
                The <Text style={styles.bold}>Luxury Plan</Text> focuses on providing high-end services and experiences by selecting premium options. This plan is aimed at delivering top-tier quality and performance, often at a significantly higher cost.
          </Text>
          
          {/* Key Characteristics */}
          <Text style={styles.subheading2}>Key Characteristics:</Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold1}>1. Premium Quality:</Text> Emphasizes the use of top-quality materials, services, and solutions that offer superior performance and aesthetics.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold1}>2. High Budget:</Text> Involves a larger financial investment to ensure the highest level of service and feature set.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold1}>3. Enhanced Experience:</Text> Delivers an exceptional user experience with added features, superior craftsmanship, and exclusive options.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold1}>4. Supplier and Vendor Selection:</Text> Chooses high-end suppliers and vendors known for their quality and prestige, often involving higher costs but better guarantees and service.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold1}>5. Customization and Personalization:</Text> Often includes options for customization and personalization, allowing for a tailored experience that meets specific high-end expectations.
          </Text>
          
          {/* Advantages */}
          <Text style={styles.subheading1}>Advantages:</Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold1}>1. Exceptional Quality:</Text> Provides the best possible performance and user experience.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold1}>2. Prestige and Exclusivity:</Text> Offers a sense of luxury and exclusivity that can be appealing to high-end clients or customers.
          </Text>
          
          {/* Disadvantages */}
          <Text style={styles.subheading1}>Disadvantages:</Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold1}>1. High Cost:</Text> Requires a substantial financial investment, which may not be feasible for all budgets.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold1}>2. Potential Over-Engineering:</Text> Can result in features or services that may be more than what is necessary for some users.
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
  economicPlanTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#253AA6',
  },
  luxuryPlanCard: {
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
  luxuryPlanTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#22166D',
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

export default LuxuryPlan;
