import React,{useState} from 'react';
import { View, Text, TextInput, StyleSheet,ScrollView,SafeAreaView ,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NavigationProps } from '../types';

type Props = NavigationProps<'Signup'>;


const SignupScreen :React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
const [errors, setErrors] = useState<{
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: string;
}>({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  terms: '',
});

const validateForm = () => {
  const newErrors: typeof errors = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: '',
  };

  let isValid = true;

  if (!name.trim()) {
    newErrors.name = 'Name is required';
    isValid = false;
  }

  if (!email.trim()) {
    newErrors.email = 'Email is required';
    isValid = false;
  }

  if (!password) {
    newErrors.password = 'Password is required';
    isValid = false;
  }

  if (!confirmPassword) {
    newErrors.confirmPassword = 'Please confirm your password';
    isValid = false;
  } else if (password !== confirmPassword) {
    newErrors.confirmPassword = 'Passwords do not match';
    isValid = false;
  }

  if (!isAgreed) {
    newErrors.terms = 'You must agree to the terms';
    isValid = false;
  }

  setErrors(newErrors);
  return isValid;
};


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.subtitle}>Create an account to get started</Text>

        {/* Name Input */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            placeholder="Username"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#888"
            style={styles.input}
          />
        </View>

        {/* Email Input */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            placeholder="name@email.com"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#888"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            />
          {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}
        </View>

        {/* Password */}
  <View style={styles.inputWrapper}>
    <Text style={styles.label}>Password</Text>
    <View style={styles.passwordContainer}>
    <TextInput
      placeholder="Create a password"
      value={password}
      onChangeText={setPassword}
      placeholderTextColor="#888"
      secureTextEntry={!showPassword}
      style={styles.passwordInput}
      
    />
    {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}
    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
  <Ionicons
    name={showPassword ? 'eye' : 'eye-off'}
    size={20}
    color="#888"
  />
</TouchableOpacity>

  </View>
</View>

{/* Confirm Password */}
<View style={styles.inputWrapper}>
  <View style={styles.passwordContainer}>
    <TextInput
      placeholder="Confirm password"
      value={confirmPassword}
      onChangeText={setConfirmPassword}
      placeholderTextColor="#888"
      secureTextEntry={!showConfirmPassword}
      style={styles.passwordInput}
      
    />
    {errors.confirmPassword ? <Text style={styles.error}>{errors.confirmPassword}</Text> : null}
    <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
  <Ionicons
    name={showConfirmPassword ? 'eye' : 'eye-off'}
    size={20}
    color="#888"
  />
</TouchableOpacity>

  </View>
</View>


        {/* Terms & Conditions Checkbox */}
<View style={styles.checkboxWrapper}>
  <TouchableOpacity onPress={() => setIsAgreed(!isAgreed)} style={styles.checkbox}>
  <MaterialIcons
    name={isAgreed ? 'check-box' : 'check-box-outline-blank'}
    size={22}
    color="#007bff"
  />
</TouchableOpacity>


  <Text style={styles.agreeText}>
    I’ve read and agree with the{' '}
    <Text style={styles.link}>Terms and Conditions</Text>{' '}
    and the <Text style={styles.link}>Privacy Policy</Text>.
    {errors.terms ? <Text style={styles.error}>{errors.terms}</Text> : null}

  </Text>
</View>

{/* Create Account Button */}
<View style={styles.buttonWrapper}>
  <TouchableOpacity
  onPress={() => {
    if (validateForm()) {
      navigation.navigate('OTP',{email}); // only if form is valid
    }
  }}
  style={[styles.signupButton, { backgroundColor: isAgreed ? '#007bff' : '#ccc' }]}
  disabled={!isAgreed}
>
  <Text style={styles.signupButton}>Create Account</Text>
</TouchableOpacity>

</View>


      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  inputWrapper: {
    marginBottom: 18,

  },
  label: {
    marginBottom: 6,
    color: '#444',
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#000',
  },
    passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#fff',
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  eyeIcon: {
    marginLeft: 10,
    fontSize: 18,
  },
    checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  checkbox: {
    fontSize: 20,
    marginRight: 10,
    marginTop: 2,
  },
  agreeText: {
    flex: 1,
    fontSize: 13,
    color: '#444',
  },
  link: {
    color: '#007bff',
    fontWeight: '600',
  },
  buttonWrapper: {
    marginTop: 30,
  },
  signupButton: {
    textAlign: 'center',
    color: '#fff',
    paddingVertical: 14,
    borderRadius: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
  color: 'red',
  fontSize: 12,
  marginTop: 4,
  marginLeft: 5,
},


});



