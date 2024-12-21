import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import * as Speech from 'expo-speech';

const text = () => {

  const parler = () => {
    const texte = " hello, bonjour مرحبا بكم في المحمدية، مدينة الجمال.";
    Speech.speak(texte, {
      language: 'ar', // Définir la langue en arabe
      pitch: 1, // Ton de la voix
      rate: 0.7, // Vitesse de la voix
    });
  };

  return (
    <View>
      <Button title="Lire en arabe" onPress={parler} />
    </View>
  );
};

export default text;
