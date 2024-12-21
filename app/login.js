import React, { useState } from 'react';
import { View,Button, TextInput,Alert, TouchableOpacity, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); 
/*
  // Expressions régulières pour validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Au moins 8 caractères, une lettre et un chiffre

  const handleSubmit = async () => {
    
    // if (!emailRegex.test(email)) {a
    //   Alert.alert('Invalid email', 'Please enter a valid email address.');
    //   return;
    // }

    // if (!passwordRegex.test(password)) {
    //   Alert.alert('Invalid password', 'Password must be at least 8 characters long and contain both letters and numbers.');
    //   return;
    // }

    try {
        console.log('Email:', email);
        console.log('Password:', password);
        const response = await fetch('https://59fc-160-178-242-133.ngrok-free.app/teste/insertion.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
        });

        const result = await response.json();

        // Debug de la réponse du serveur
        console.log('Server response:', result);

        // Alert.alert('Response from server', result.name);

        // Assurez-vous que result.success est bien "true"
        if (result.success) {
            router.push('/Acceuil');  // Redirection vers la page d'accueil
        } else {
            Alert.alert('Error', 'Login failed');
        }
    } catch (error) {
        console.error('Fetch Error:', error);
        Alert.alert('Error', 'Something went wrong');
    }
};

  */

  return (
    <View style={styles.container}>
      {/* Top Right Design */}
      <View style={styles.topDesign}>
        <Image source={require('../assets/images/design_withoutbg.png')} style={styles.designImage} />
      </View>

      {/* Back Arrow */}
      <View style={styles.leftArrow1Icon}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={require('../assets/images/leftarrow-4.png')} style={styles.designImage} />
        </TouchableOpacity>
      </View>

      {/* White Container for the Form */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Welcome back</Text>
        
        {/* Email Input */}
        <View style={styles.inputContaineremail}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.whiteRectangleemail} />
          {email === '' && <Ionicons name="mail-outline" size={20} color="#C4C4C4" style={styles.icon} />}
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#C4C4C4"
            value={email}
            onChangeText={setEmail}
            style={styles.textInput}
            underlineColorAndroid="transparent"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainerpass}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.whiteRectanglepass} />
          {password === '' && <Ionicons name="lock-closed-outline" size={20} color="#C4C4C4" style={styles.icon} />}
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#C4C4C4"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            style={styles.textInput}
            underlineColorAndroid="transparent"
          />
        </View>

        {/* Forgot Password */}
        <Link href="/ForgotPass" style={styles.forgotPassword}>
          <Text>Forget password?</Text>
        </Link>

        {/* Log in Button */}
        {/* onPress={handleSubmit} */}
        <Link href={"/Acceuil"} style={styles.loginButton}  >
          <Text style={styles.loginText}>Log in</Text>
          {/* <Button title="Log in"></Button> */}
        </Link>

        {/* Sign up Section */}
        <View style={styles.signupContainer}>
          <View style={styles.ligneleft}></View>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <Link href="/SignUp">
            <Text style={styles.signupLink}>Sign Up</Text>
          </Link>
          <View style={styles.ligneright}></View>
        </View>
      </View>
    </View>
  );
};
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CAD3FF', // Purple background
    alignItems: 'center',
    justifyContent: 'center',
  },
  topDesign: {
    position: 'absolute',
    top: height * -0.085,
    right: width * -0.01,
    width: width * 0.6,
    height: height * 0.3,
  },
  leftArrow1Icon: {
    top: 15,
    left: 9,
    width: 17,
    height: 19,
    position: "absolute",
  },
  designImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#1B0E6F',
    marginTop: height * 0.03,
    marginBottom: height * 0.09,
  },
  formContainer: {
    width: width,
    height: height * 0.85,
    marginTop: height * 0.3,
    paddingVertical: height * 0.06,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignItems: 'center',
  },
  inputContaineremail: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 15,
    paddingHorizontal: 15, // Adjusted padding for icon
    backgroundColor: '#FFF',
    width: '100%',
    height: 60,
    marginBottom: 30,
    position: 'relative',
  },
  inputContainerpass: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 15,
    paddingHorizontal: 15, // Adjusted padding for icon
    backgroundColor: '#FFF',
    width: '100%',
    height: 60,
    marginBottom: 10,
    position: 'relative',
  },
  label: {
    position: 'absolute',
    top: -height * 0.02,
    left: width * 0.05,
    backgroundColor: '#FFF',
    paddingHorizontal: 5,
    color: '#434343',
    fontWeight: 'bold',
    fontSize: 17,
    zIndex: 1,
  },
  whiteRectangleemail: {
    position: 'absolute',
    top: -12,
    left: width * 0.05,
    width: width * 0.1,
    height: 20,
    backgroundColor: '#fff',
    zIndex: 0,
  },
  whiteRectanglepass: {
    position: 'absolute',
    top: -12,
    left: width * 0.05,
    width: width * 0.17,
    height: 20,
    backgroundColor: '#fff',
    zIndex: 0,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    fontSize: 16,
    color: '#000',
    flex: 1, // Ensures the text input takes up the remaining space
  },
  forgotPassword: {
    fontSize: 16,
    color: '#5866E5',
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    marginBottom: height * 0.05,
    marginLeft: width * 0.5,
    paddingTop: 0,
  },
  loginButton: {
    backgroundColor: '#1B0E6F',
    textAlign: 'center',
    paddingVertical: 13,
    borderRadius: 8,
    width: '100%',
    marginBottom: 15,
    paddingHorizontal: width * 0.36,
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    // marginLeft: width * 0.12,
  },
  signupText: {
    fontSize: 16,
    color: '#5B5B5B',
    // fontWeight: 'bold',
  },
  signupLink: {
    fontSize: 15,
    color: '#5866E5',
    marginLeft: width * 0.01,
    fontWeight: 'bold',
  },
  ligneleft: {
    width: width * 0.12,
    height: 1,
    backgroundColor: '#C4C4C4',
    marginleft: width * 0.1,
    marginRight: width * 0.008,
    // marginVertical: 20,
    
  },
  ligneright: {
    width: width * 0.12,
    height: 1,
    backgroundColor: '#C4C4C4',
    // marginRight: width * 0.01,
    marginVertical: 20,
    marginLeft:width * 0.01,
  },
});

export default LoginScreen;












//code of the android emulateur
// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image, Dimensions } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const { width, height } = Dimensions.get('window');

// const LoginScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <View style={styles.container}>
//       {/* Top Right Design */}
//       <View style={styles.topDesign}>
//         <Image
//           source={require('../assets/images/design_withoutbg.png')}
//           style={styles.designImage}
//         />
//       </View>

//       {/* White Container for the Form */}
//       <View style={styles.formContainer}>
//         <Text style={styles.title}>Welcome back</Text>
        
//         {/* Email Input */}
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Email</Text>
//           <View style={styles.whiteRectangleemail} />
//           {/* Icon displayed conditionally based on email value */}
//           {email === '' && (
//             <Ionicons name="mail-outline" size={20} color="#C4C4C4" style={styles.icon} />
//           )}
//           <TextInput
//             placeholder="Enter your email"
//             placeholderTextColor="#C4C4C4"
//             value={email}
//             onChangeText={setEmail}
//             style={styles.textInput}
//             underlineColorAndroid="transparent" 
//           />
//         </View>

//         {/* Password Input */}
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Password</Text>
//           <View style={styles.whiteRectanglepass} />
//           {/* Icon displayed conditionally based on password value */}
//           {password === '' && (
//             <Ionicons name="lock-closed-outline" size={20} color="#C4C4C4" style={styles.icon} />
//           )}
//           <TextInput
//             placeholder="Enter your password"
//             placeholderTextColor="#C4C4C4"
//             secureTextEntry={true}
//             value={password}
//             onChangeText={setPassword}
//             style={styles.textInput}
//             underlineColorAndroid="transparent" 
//           />
//         </View>

//         {/* Forgot Password */}
//         <TouchableOpacity>
//           <Text style={styles.forgotPassword}>Forgot password?</Text>
//         </TouchableOpacity>

//         {/* Log in Button */}
//         <TouchableOpacity style={styles.loginButton}>
//           <Text style={styles.loginText}>Log in</Text>
//         </TouchableOpacity>

//         {/* Sign up Section */}
//         <View style={styles.signupContainer}>
//           <View style={styles.ligne}></View>
//           <Text style={styles.signupText}>Don't have an account?</Text>
//           <TouchableOpacity>
//             <Text style={styles.signupLink}>Sign Up</Text>
//           </TouchableOpacity>
//           <View style={styles.ligne}></View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#5866E5', // Purple background
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   topDesign: {
//     position: 'absolute',
//     top: height * -0.085,
//     right: width * -0.01,
//     width: width * 0.6,
//     height: height * 0.3,
//   },
//   designImage: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'contain',
//   },
//   title: {
//     fontSize: 35,
//     fontWeight: 'bold',
//     color: '#1B0E6F',
//     marginTop: height * 0.03,
//     marginBottom: height * 0.08,
//   },
//   formContainer: {
//     width: width,
//     height: height * 0.85,
//     marginTop: height * 0.3,
//     paddingVertical: 30,
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//     borderRadius: 30,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     alignItems: 'center',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#C4C4C4',
//     borderRadius: 15,
//     paddingHorizontal: 15, // Adjusted padding for icon
//     backgroundColor: '#FFF',
//     width: '100%',
//     height: 60,
//     marginBottom: 30,
//     position: 'relative',
//   },
//   label: {
//     position: 'absolute',
//     top: -height * 0.02,
//     left: width * 0.05,
//     backgroundColor: '#FFF',
//     paddingHorizontal: 5,
//     color: '#434343',
//     fontWeight: 'bold',
//     fontSize: 17,
//     zIndex: 1,
//   },
//   whiteRectangleemail: {
//     position: 'absolute',
//     top: -12,
//     left: width * 0.05,
//     width: width * 0.1,
//     height: 20,
//     backgroundColor: '#fff',
//     zIndex: 0,
//   },
//   whiteRectanglepass: {
//     position: 'absolute',
//     top: -12,
//     left: width * 0.05,
//     width: width * 0.17,
//     height: 20,
//     backgroundColor: '#fff',
//     zIndex: 0,
//   },
//   icon: {
//     marginRight: 10,
//   },
//   textInput: {
//     fontSize: 16,
//     color: '#000',
//     flex: 1, // Ensures the text input takes up the remaining space
//   },
//   forgotPassword: {
//     fontSize: 16,
//     color: '#5866E5',
//     alignSelf: 'flex-end',
//     fontWeight: 'bold',
//     marginBottom: height * 0.05,
//     marginLeft: width * 0.5,
//     paddingTop: 0,
//   },
//   loginButton: {
//     backgroundColor: '#1B0E6F',
//     paddingVertical: 15,
//     paddingHorizontal: 60,
//     borderRadius: 8,
//     width: '100%',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   loginText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   signupContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//     // marginLeft: width * 0.12,
//   },
//   signupText: {
//     fontSize: 16,
//     color: '#5B5B5B',
//     // fontWeight: 'bold',
//   },
//   signupLink: {
//     fontSize: 15,
//     color: '#5866E5',
//     marginLeft: width * 0.01,
//     fontWeight: 'bold',
//   },
//   ligne: {
//     width: width * 0.12,
//     height: 1,
//     backgroundColor: '#C4C4C4',
//     marginHorizontal: 10,
//     marginVertical: 20,
    
//   }
// });

// export default LoginScreen;



























