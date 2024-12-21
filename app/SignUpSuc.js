import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
// import { useEffect } from 'react';
import { useRouter } from 'expo-router';


export default function SuccessScreen() {
    const router = useRouter();

    useEffect(() => {
      const timeout = setTimeout(() => {
        router.push('/login');
  
      }, 3000); // 3 secondes
      return () => clearTimeout(timeout);
    }, [router]);
  

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/checksucces.png')} style={styles.icon} />
      <Text style={styles.text}>Your profile has been successfully created!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
});
