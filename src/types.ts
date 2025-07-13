import { NativeStackNavigationProp } from '@react-navigation/native-stack';


export type RootStackParamList = {
  Onboarding: undefined;
  Onboarding2: undefined;
  Login: undefined;
  Signup: undefined;
  OTP:{email:string};
};


export type NavigationProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
};

