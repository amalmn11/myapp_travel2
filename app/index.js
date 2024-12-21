import { View, Image, StyleSheet, Dimensions, ImageBackground, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

const { width, height } = Dimensions.get('window');

export default function App() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/about');

    }, 5000); // 3 secondes
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Image en haut */}
      <ImageBackground
        source={require('../assets/images/Design_up1.png')} // Replace with the actual top image path
        style={styles.Design_up1}
      />

      {/* Logo centré */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/image_logo.png')} // Replace with the actual logo image path
          style={styles.logo}
        />
      </View>

      {/* Image en bas */}
      <ImageBackground
        source={require('../assets/images/Design_down.png')} // Replace with the actual bottom image path
        style={styles.Design_down}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  Design_up1: {
    width: '100%',
    height: height * 0.25, // 25% of the screen height
    resizeMode: 'cover',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, // Takes the remaining space between the top and bottom
  },
  logo: {
    width: '50%',  // 50% of the screen width
    height: undefined,
    aspectRatio: 1.2,  // Maintains logo's aspect ratio
    resizeMode: 'contain',
  },
  Design_down: {
    width: '100%',
    height: height * 0.25, // 25% of the screen height
    resizeMode: 'cover',
  },
});



