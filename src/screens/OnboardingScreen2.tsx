import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from 'react-native';

import { NavigationProps } from '../types';

type Props = NavigationProps<'Onboarding2'>;


const interestsList: string[] = [
  'User Interface',
  'User Experience',
  'User Research',
  'UX Writing',
  'User Testing',
  'Service Design',
  'Strategy',
  'Design Systems',
];

const OnboardingScreen2: React.FC<Props> = ({ navigation }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleInterest = (item: string) => {
    setSelected(prev =>
      prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const renderItem = ({ item }: { item: string }) => {
    const isSelected = selected.includes(item);
    return (
      <TouchableOpacity
        onPress={() => toggleInterest(item)}
        style={[styles.option, isSelected && styles.selectedOption]}
      >
        <Text style={[styles.optionText, isSelected && styles.selectedText]}>
          {item}
        </Text>
        {isSelected && <Text style={styles.checkmark}>✔</Text>}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar} />
        <View style={styles.progressTrack} />
      </View>

      <Text style={styles.title}>Personalise your experience</Text>
      <Text style={styles.subtitle}>Choose your interests.</Text>

      <FlatList
        data={interestsList}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    backgroundColor: '#FFFFFF',
  },
  progressContainer: {
    flexDirection: 'row',
    height: 4,
    marginBottom: 32,
  },
  progressBar: {
    width: '50%',
    height: 4,
    backgroundColor: '#007AFF',
    borderRadius: 2,
  },
  progressTrack: {
    width: '50%',
    height: 4,
    backgroundColor: '#E5E5EA',
    borderRadius: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 24,
  },
  list: {
    paddingBottom: 20,
  },
  option: {
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#E5F0FF',
    borderColor: '#007AFF',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  selectedText: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
  checkmark: {
    fontSize: 16,
    color: '#007AFF',
  },
  nextButton: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    paddingTop: 12,
    paddingBottom:12,
    paddingLeft:14,
    paddingRight:14,
    alignItems: 'center',
    marginTop: 16,
  },
  nextText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
