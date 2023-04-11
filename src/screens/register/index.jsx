import React, { useState, useRef } from 'react';
import { View, Text, Alert } from 'react-native';
import styles from './styles';
import colors from '../../utils/colors';
import routes from '../../utils/routes';
import strings from '../../utils/strings';
import { containsUppercase } from '../../utils/commonFunctions';

import { Form, FormItem } from 'react-native-form-component';
import { getUserData, getDBConnection, saveUserItems, getCount } from '../../dbQueries';
import base64 from 'react-native-base64'

const Register = ({navigation}) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();

  onRegisterClick = async () => {
    try {
      const db = await getDBConnection();
      let count = await getCount()
      let data = { 
        id: count, 
        firstName: firstName, 
        lastName: lastName, 
        email: email, 
        password: base64.encode(password), 
        userLoggedIn: 1,
        profileImageURI: "",
        bookmarks: JSON.stringify([]) 
      }
      const userData = await getUserData(db, data.email);

      if(Object.keys(userData).length > 0) {
        Alert.alert(strings.userAlreadyRegistered)
      } else {
        saveUserItems(db, data)
        navigation.navigate(routes.home, {})
      }
    } catch (error) {
      alert(error.message)
    }

  }


  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>{strings.createNewAccount}</Text>
      <Form
        style={styles.focusBlock}
        onButtonPress={() => onRegisterClick()}
        buttonText={strings.register}
        buttonStyle={{ backgroundColor: colors.blue }}
      >
        <FormItem
          label={strings.firstName}
          isRequired
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          asterik
          ref={firstNameInput}
          customValidation={() => {
            if (firstName.length == 0) return { status: false, message: strings.pleaseEnterFirstName }
          }}
          showErrorIcon={true}
        />
        <FormItem
          label={strings.lastName}
          value={lastName}
          onChangeText={setLastName}
          ref={lastNameInput}
          showErrorIcon={true}
        />
        <FormItem
          label={strings.emailId}
          isRequired
          value={email}
          onChangeText={setEmail}
          asterik
          ref={emailInput}
          keyboardType='email-address'

          showErrorIcon={true}
        />
        <FormItem
          label={strings.password}
          isRequired
          value={password}
          onChangeText={setPassword}
          asterik
          ref={passwordInput}
          showErrorIcon={true}
          customValidation={() => {
            if (!containsUppercase(password) || password.length < 6) return { status: false, message: strings.pleaseEnterPassword }
          }}
          secureTextEntry={true}
        />
      </Form>
    </View>
  )
}

export default Register;