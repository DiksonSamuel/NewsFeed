import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import colors from '../../utils/colors';
import routes from '../../utils/routes';
import strings from '../../utils/strings';
import styles from './styles';
import { Form, FormItem } from 'react-native-form-component';
import { containsUppercase } from '../../utils/commonFunctions';
import base64 from 'react-native-base64'
import { getUserData, getDBConnection, updateQuery } from '../../dbQueries';

const Login = ({ navigation }) => {

  const [email, setEmail] = useState("diksonsamuel@gmail.com");
  const [password, setPassword] = useState("diksonDhoni");

  openRegister = () => navigation.navigate(routes.register, {})

  onLoginClick = async () => {
    const db = await getDBConnection();
    const userData = await getUserData(db, email);
    if(Object.keys(userData).length > 0) {
      if(base64.encode(password) == userData.password) {
        
        updateQuery('userLoggedIn', 1, userData.id)
        navigation.navigate(routes.home, {})
      } else {
        Alert.alert(strings.invalidPassword)
      }
    } else {
      Alert.alert(strings.userIsNotRegisteredYet)
    }
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>{strings.welcomeBack}</Text>
      <Form
        style={styles.focusBlock}
        onButtonPress={onLoginClick}
        buttonText={strings.login}
        buttonStyle={{ backgroundColor: colors.blue }}
      >

        <FormItem
          label={strings.emailId}
          isRequired
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          showErrorIcon={true}
        />
        <FormItem
          label={strings.password}
          isRequired
          value={password}
          onChangeText={setPassword}
          showErrorIcon={true}
          customValidation={() => {
            if (!containsUppercase(password) || password.length < 6) return { status: false, message: strings.pleaseEnterValidPassword }
          }}
          secureTextEntry={true}
        />
      </Form>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>{strings.dontHaveAnAccount}<Text onPress={openRegister} style={styles.highlightedText}>{' '}{strings.signUp}</Text></Text>
      </View>


    </View>
  )
}

export default Login;