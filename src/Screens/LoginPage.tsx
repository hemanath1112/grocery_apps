import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Black, Green, MindNightBule, White} from '../Components/Color';
import {
  PoppinsBold,
  PoppinsMedium,
  PoppinsRegular,
  PoppinsSemiBold,
} from '../Components/Fonts';

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.detailBox}>
        <Text style={styles.loginHeader}>Login Page</Text>
        <View>
          <Text style={styles.inputText}>Enter Your Email or Phone</Text>
          <TextInput
            placeholder="Email or Phone"
            placeholderTextColor={MindNightBule}
            style={styles.emailBox}
          />
        </View>
        <View>
          <Text style={styles.inputText}>Enter Your Password</Text>
          <TextInput
            placeholder="Password"
            placeholderTextColor={MindNightBule}
            style={styles.emailBox}
          />
        </View>
        <TouchableOpacity style={styles.loginBox}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: White,
  },
  detailBox: {
    width: '100%',
    paddingHorizontal: 20,
  },
  emailBox: {
    marginHorizontal: '5%',
    width: '90%',
    borderColor: Black,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    color: MindNightBule,
    fontSize: 14,
    fontFamily: PoppinsRegular,
  },
  inputText: {
    marginHorizontal: '5%',
    fontFamily: PoppinsMedium,
    color: Green,
    fontSize: 16,
    marginTop: 8,
  },
  loginHeader: {
    textAlign: 'center',
    fontSize: 22,
    fontFamily: PoppinsBold,
    color: Green,
  },
  loginBox: {
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: Green,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  loginText: {
    fontSize: 16,
    fontFamily: PoppinsSemiBold,
    color: White,
  },
});
