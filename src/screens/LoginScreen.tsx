import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { NavigationProps } from '../types'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import Fontisto from 'react-native-vector-icons/Fontisto'; 



const LoginScreen : React.FC<NavigationProps<'Login'>> = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Top blue section (image area) */}
      <View style={styles.imageContainer}>
        {/* Optional logo or image can go here */}
      </View>

      {/* Main content */}
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome!</Text>

        {/* Email input */}
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Email Address"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>

        {/* Password input with toggle */}
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={passwordVisible ? 'eye' : 'eye-off'}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        {/* Forgot password */}
        <TouchableOpacity style={styles.forgotWrapper}>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>

        {/* Login button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Register link */}
        <View style={styles.registerWrapper}>
          <Text style={styles.registerText}>Not a member? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.registerNow}>Register now</Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={styles.dividerWrapper}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or continue with</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Social login buttons */}
        <View style={styles.socialContainer}>
  <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#db4437' }]}>
    <MaterialCommunityIcons name="google" size={15} color="#fff" />
  </TouchableOpacity>

  <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#000' }]}>
    <FontAwesome name="apple" size={17} color="#fff" />
  </TouchableOpacity>

  <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#1877f2' }]}>
    <Fontisto name="facebook" size={15} color="#fff" />
  </TouchableOpacity>
</View>

      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f5ff', // top light blue
  },
  imageContainer: {
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 20,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#000',
  },
  eyeIcon: {
    paddingHorizontal: 5,
  },
  forgotWrapper: {
    alignItems: 'flex-start',
    marginTop: 10,
  },
  forgotText: {
    color: '#007bff',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  registerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  registerText: {
    fontSize: 14,
    color: '#555',
  },
  registerNow: {
    fontSize: 14,
    color: '#007bff',
    fontWeight: '600',
  },
  dividerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#999',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 40,
  },
  socialButton: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
