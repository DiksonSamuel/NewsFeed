import React, {useState} from 'react';
import { Text, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './styles';
import * as Icon from "react-native-feather";
import strings from '../../utils/strings';
import { Form, FormItem } from 'react-native-form-component';
import colors from '../../utils/colors';

const UpdateProfileModal = ({ data, onUpdateClick, onClose }) => {

  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Icon.X />
      </TouchableOpacity>
      <Text style={styles.header}>{strings.updateProfile}</Text>
      <Form
        style={styles.focusBlock}
        onButtonPress={() => onUpdateClick({firstName, lastName})}
        buttonText={strings.update}
        buttonStyle={{ backgroundColor: colors.blue }}
      >
        <FormItem
          label={strings.firstName}
          isRequired
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          customValidation={() => {
            if (firstName.length == 0) return { status: false, message: strings.pleaseEnterFirstName }
          }}
          showErrorIcon={true}
        />
        <FormItem
          label={strings.lastName}
          value={lastName}
          onChangeText={setLastName}
          showErrorIcon={true}
        />
      </Form>
    </SafeAreaView>
  )
}

export default UpdateProfileModal;