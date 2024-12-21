import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { Link } from 'expo-router';

const { width, height } = Dimensions.get('window');

const Acceuil = () => {
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

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        {/* Welcome Section */}
        <View style={styles.card}>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeTitle}>Welcome !</Text>
            <Text style={styles.welcomeDescription}>
              Embark on unforgettable journeys and effortlessly manage your travel expenses with our all-in-one app.
            </Text>
          </View>
          <Image
            source={require('../assets/images/acceuil11.png')} // Placeholder image
            style={styles.cardImage}
            resizeMode="cover"
          />
        </View>

        {/* Travel Budget Planning Section */}
        <Link href="/SBudgetplann">
          <View>
            <ImageBackground
              source={require('../assets/images/img_bg1.png')} // Image background
              style={styles.card4}
              imageStyle={styles.cardImageBackground}
            >
              <Text style={styles.cardTitle1}>plannify the travel budget</Text>
              <Image
                source={require('../assets/images/acceuil22.png')} // Placeholder image
                style={styles.cardImage1}
                resizeMode="cover"
              />
            </ImageBackground>
          </View>
        </Link>

        {/* Find a Travel Partner Section */}
        {/* <Link href="/TravelPartener">
          <View>
            <ImageBackground
              source={require('../assets/images/img_bg2.png')}
              style={styles.card2}
              imageStyle={styles.cardImageBackground}
            >
              <Text style={styles.cardTitle1}>Estimate the costs of the trip</Text>
              <Image
                source={require('../assets/images/acceuil3.png')}
                style={styles.cardImage2}
                resizeMode="cover"
              />
            </ImageBackground>
          </View>
        </Link> */}

        <Link href="/StartPlan">
          <View>
            <ImageBackground
              source={require('../assets/images/img_bg3.png')}
              style={styles.card2}
              imageStyle={styles.cardImageBackground}
            >
              <Text style={styles.cardTitle1}>Estimate the costs of the trip</Text>
              <Image
                source={require('../assets/images/acceuil4.png')}
                style={styles.cardImage3}
                resizeMode="cover"
              />
            </ImageBackground>
          </View>
        </Link>
        <Link href="/TourGuide">
          <View>
            <ImageBackground
              source={require('../assets/images/img_bg4.jpg')}
              style={styles.card2}
              imageStyle={styles.cardImageBackground}
            >
              <Text style={styles.cardTitle1}>Automatic tour guide with vocal assistant</Text>
              <Image
                source={require('../assets/images/guide11.png')}
                style={styles.cardImage4}
                resizeMode="cover"
              />
            </ImageBackground>
          </View>
        </Link>
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
    backgroundColor: '#EAEEFF',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1, // Ensure it stays on top
  },
  scrollContainer: {
    flex: 1,
    marginTop: 80, // Offset for profile section height
    marginBottom: 60, // Offset for bottom navigation height
  },
  scrollContent: {
    paddingBottom: 20,
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    height: height * 0.2,
    marginBottom: height * 0.01,
    marginHorizontal: width * 0.02,
    borderWidth: 1,
    borderColor: '#BBBBBB',
    flexDirection: 'row',
    alignItems: 'center',
  },
  card2: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    height: height * 0.2,
    marginBottom: height * 0.01,
    marginHorizontal: width * 0.04,
    borderWidth: 1,
    borderColor: '#BBBBBB',
    flexDirection: 'row',
    alignItems: 'center',
  },
  card4: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    height: height * 0.2,
    marginBottom: height * 0.01,
    marginHorizontal: width * 0.04,
    borderWidth: 1,
    borderColor: '#BBBBBB',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImageBackground: {
    borderRadius: 10,
    height: height * 0.197,
  },
  cardTitle1: {
    color: '#3A3A3A',
    fontSize: 23,
    fontWeight: 'bold',
    width: width * 0.33,
    marginTop: height * 0.01,
  },
  cardImage: {
    width: width * 0.5,
    height: height * 0.2,
    borderRadius: 8,
  },
  cardImage1: {
    width: width * 0.52,
    height: height * 0.2,
    marginBottom: height * 0.04,
  },
  cardImage2: {
    width: width * 0.52,
    height: height * 0.2,
  },
  cardImage3: {
    width: width * 0.5,
    height: height * 0.18,
    marginLeft: width * 0.02,
  },
  cardImage4: {
    width: width * 0.52,
    height: height * 0.135,
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B82EC',
  },
  welcomeDescription: {
    lineHeight: height * 0.025,
    marginTop: height * 0.01,
    fontSize: 10,
    color: '#333',
  },
  navIcon: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },
});

export default Acceuil;
