import React,{ useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions,TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
const { width, height } = Dimensions.get('window');

const EconomicPlan = () => {

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
        {/* Economic Plan Card */}
        <View style={styles.economicPlanCard}>
          <Text style={styles.economicPlanTitle}>Economic Plan</Text>
            {/* Objective */}
            <Text style={styles.subheading1}>Objective:</Text>
            <Text style={styles.paragraph}>
                The <Text style={styles.bold}>Economic Plan</Text> is designed to minimize expenses by opting for the most cost-effective solutions available. This plan prioritizes financial efficiency and aims to deliver basic functionality at the lowest possible cost.
            </Text>
            
            {/* Key Characteristics */}
            <Text style={styles.subheading2}>Key Characteristics:</Text>
            <Text style={styles.paragraph}>
                <Text style={styles.bold1}>1. Cost Minimization:</Text> The primary focus is on reducing expenditures. This involves selecting the cheapest materials, services, and solutions that still meet the necessary requirements.
            </Text>
            <Text style={styles.paragraph}>
                <Text style={styles.bold1}>2. Budget Constraints:</Text> The plan operates within tight budget limits, often sacrificing some level of quality or additional features in favor of cost savings.
            </Text>
            <Text style={styles.paragraph}>
                <Text style={styles.bold1}>3. Basic Functionality:</Text> Services and products provided under this plan are typically functional but may lack advanced features or high-end performance.
            </Text>
            <Text style={styles.paragraph}>
                <Text style={styles.bold1}>4. Supplier and Vendor Selection:</Text> Emphasis is placed on choosing suppliers and vendors that offer the lowest prices, even if it means accepting lower quality or fewer service guarantees.
            </Text>
            <Text style={styles.paragraph}>
                <Text style={styles.bold1}>5. Operational Efficiency:</Text> The plan often involves streamlining processes to cut costs, which can include minimizing staffing levels or utilizing more cost-effective technologies.
            </Text>
            
            {/* Advantages */}
            <Text style={styles.subheading1}>Advantages:</Text>
            <Text style={styles.paragraph}>
                <Text style={styles.bold1}>1. Low Initial Investment:</Text> Ideal for businesses or projects with limited funding.
            </Text>
            <Text style={styles.paragraph}>
                <Text style={styles.bold1}>2. Cost Control:</Text> Provides clear visibility and control over expenditures.
            </Text>
            
            {/* Disadvantages */}
            <Text style={styles.subheading1}>Disadvantages:</Text>
            <Text style={styles.paragraph}>
                <Text style={styles.bold1}>1. Potential Quality Compromises:</Text> May lead to lower quality outcomes or fewer features.
            </Text>
            <Text style={styles.paragraph}>
                <Text style={styles.bold1}>2. Limited Flexibility:</Text> Less room for adjustments or enhancements.
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
  globalcontainer: {
      backgroundColor: '#fff',
      marginHorizontal: width * 0.03,
      borderRadius: 10,
      borderColor: '#000',
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
    color: '#5B6AF4',
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
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: '#ddd',
    borderRadius: 4,
    marginRight: 15,
    marginTop: 18,
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
  },
  info1: {
    flex: 1,
  },
  label: {
    fontSize: 13,
    marginBottom: 3,
  },
  bold: {
    fontWeight: 'semibold',
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
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  paragraph: {
    fontSize: 15,
    marginVertical: 5,
    lineHeight: 24,
    marginLeft:10,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default EconomicPlan;
