import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import CustomInput from '../../components/customInput';
import colors from '../../utils/colors';
import routes from '../../utils/routes';
import strings from '../../utils/strings';
import styles from './styles';
import { Form, FormItem } from 'react-native-form-component';
import { containsUppercase } from '../../utils/commonFunctions';

const Login = (props) => {

  let { navigation } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  openRegister = () => navigation.navigate(routes.register, {})

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>{strings.welcomeBack}</Text>
      {/* <View style={styles.focusBlock}>
        <CustomInput
          value={emailText}
          style={styles.inputStyle}
          onChangeText={setEmailText}
          placeholder={strings.enterEmailID}
          keyboardType="email-address"
          secureTextEntry={false}
        />
        <CustomInput
          value={password}
          style={{}}
          onChangeText={setPassword}
          placeholder={strings.enterPassword}
          keyboardType="default"
          secureTextEntry={true}
        />
      </View>
      <Button
        mode='contained'
        buttonColor={colors.blue}
        style={styles.button}
        onPress={() => navigation.replace(routes.home, {})}>
        {strings.login}
      </Button> */}
      <Form
        style={styles.focusBlock}
        onButtonPress={() => console.warn(data)}
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