import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProps } from '../types'; 

type Props = NavigationProps<'Onboarding'>;

const OnboardingScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* Image Placeholder */}
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <Text style={styles.title}>Create a prototype in just a few minutes</Text>
        <Text style={styles.subtitle}>
          Enjoy these pre-made components and worry only about creating the best product ever.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Onboarding2')}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAF2FF',
  },
  image: {
    width: 100,
    height: 100,
    tintColor: '#B0C4DE', // light icon color
  },
  bottomContainer: {
    flex: 1.2,
    backgroundColor: '#FFFFFF',
    padding: 24,
    justifyContent: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#007AFF', // iOS blue
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 8,
    color: '#000000',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'left',
    color: '#666',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
});
