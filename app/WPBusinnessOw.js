import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Link } from 'expo-router'; // Importer Link pour la navigation

// Obtenir la largeur et la hauteur de l'écran
const { width, height } = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.mainContainer}>
      {/* Background Design */}
      <View style={styles.designBackground}>
        <Image source={require('../assets/images/design_withoutbg.png')} style={styles.designElement} />
      </View>

      {/* White Container */}
      <View style={styles.whiteContainer}>
        {/* Container for three overlapping images */}
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/cercleoval.png')} style={styles.logoOval} />
          <Image source={require('../assets/images/oval_blanc.png')} style={styles.contourcercle} />
          <Image source={require('../assets/images/logo_withoutbg.png')} style={styles.logo} />
        </View>

        {/* Main Illustration */}
        <Image source={require('../assets/images/welcomebusinnes.png')} style={styles.illustration} />


        {/* Main Text Section */}
        <View style={styles.textContainer}>
                <Text style={styles.title}>Welcome, Business Owner!</Text>
                <Text style={styles.subtitle}>
                Do you want to manage your business?
                </Text>
        </View>
        {/* Button Section */}
        <View style={styles.buttonContainer}>
          {/* Utilisation de Link pour naviguer vers login.js */}
          <Link href="/login" style={styles.loginButton}>
            <Text style={styles.loginText}>Log in</Text>
          </Link>

          {<View style={styles.signUpButton}>
          <Link href="/OwnerRegist">
            <Text style={styles.signUpText}>Sign Up</Text>
          </Link>
          </View>}

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#CAD3FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  designBackground: {
    position: 'absolute',
    top: height * -0.086,
    right: 0,
    width: width * 0.6,
    height: height * 0.3,
  },
  designElement: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  whiteContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: width,
    height: height * 0.85,
    position: 'absolute',
    top: height * 0.23,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  logoContainer: {
    position: 'absolute',
    top: -height * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.5,
    height: height * 0.2,
  },
  logoOval: {
    position: 'absolute',
    width: width * 0.5,
    height: '100%',
    resizeMode: 'contain',
    zIndex: 1,
  },
  contourcercle: {
    position: 'absolute',
    left: -width * 0.017,
    width: width * 0.53,
    height: '100%',
    resizeMode: 'contain',
    zIndex: 2,
  },
  logo: {
    position: 'absolute',
    left: -width * 0.245,
    width: width,
    height: height * 0.125,
    resizeMode: 'contain',
    zIndex: 3,
  },
  illustration: {
    width: width * 0.9,
    height: height * 0.33,
    // marginTop: height * 0.05,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#363636',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  subtitle11: {
    fontSize: 14,
    color: '#15215E',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#15215E',
    paddingVertical: width * 0.026,
    paddingHorizontal: width * 0.35,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#180688', // Ajout de la bordure grise
    borderWidth: 2,
  },
  loginText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  signUpButton: {
    paddingVertical: width * 0.023, // Même taille que le bouton "Log in"
    paddingHorizontal: width * 0.33, // Même taille que le bouton "Log in"
    borderRadius: 10,
    borderColor: '#1B0E6F',
    borderWidth: 2,
    marginBottom: 6,
  },
  signUpText: {
    color: '#5866E5',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default App;
