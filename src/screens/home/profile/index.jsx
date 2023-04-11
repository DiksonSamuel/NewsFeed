import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, Alert, TouchableOpacity, Modal } from 'react-native';
import styles from './styles';
import * as Icon from "react-native-feather";
import TextProfileInfo from '../../../components/textProfileInfo';
import strings from '../../../utils/strings';
import ProfileImage from '../../../components/profileImage';
import colors from '../../../utils/colors';
import ActionSheet from 'react-native-actionsheet'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import UpdateProfileModal from '../../../components/updateProfileModal';
import { updateQuery } from '../../../dbQueries';
import routes from '../../../utils/routes';

const Profile = ({ navigation, route }) => {

  const [profileData, setProfileData] = useState({ firstName: 'Dikson', lastName: 'Samuel', email: 'diksonsamuel11@gmail.com', imageURI: '' });
  const actionsheetRef = useRef(null);
  const [updateModalVisibility, setUpdateModalVisibility] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{ paddingRight: 20 }} onPress={() => setUpdateModalVisibility(true)}>
          <Icon.Edit />
        </TouchableOpacity>
      ),
    });
  }, [])

  updateData = (type, value, id) => updateQuery(type, value, id);

  onLogout = () => {
    updateData('userLoggedIn', 0, 1)
    navigation.replace(routes.login, {})
  }

  onUpdateProfile = (firstName, lastName) => {
    ["firstName","lastName"].map(type => {
      //updateData(type, firstName, 1)
    })
  }

  openLogoutAlert = () => {
    Alert.alert(
      strings.areYouSure,
      strings.doYouWantToLogout,
      [
        {
          text: strings.no,
          onPress: () => { },
          style: 'cancel',
        },
        {
          text: strings.yes,
          onPress: () => onLogout(),
        },
      ],
    )
  }

  openPicker = async (type) => {

    if (type == 0) {
      const res = await launchCamera({
        saveToPhotos: true,
        mediaType: 'photo',
        includeBase64: false,
      });
      changePicture(res)
    } else {
      const res = await launchImageLibrary({
        maxHeight: 200,
        maxWidth: 200,
        selectionLimit: 0,
        mediaType: 'photo',
      });
      changePicture(res)
    }
  }

  changePicture = (res) => {
    let stateData = Object.assign({}, profileData)
    stateData.imageURI = res.assets[0].uri;
    setProfileData(stateData)
    //updateData("profileImageURI", stateData.imageURI, 1)
  }

  return (
    <View style={styles.mainContainer}>
      <ProfileImage onPress={() => actionsheetRef.current.show()} imageURI={profileData.imageURI} />
      <TextProfileInfo title={strings.firstName} value={profileData.firstName} />
      <TextProfileInfo title={strings.lastName} value={profileData.lastName} />
      <TextProfileInfo title={strings.emailId} value={profileData.email} />
      <Button title={strings.logout} color={colors.red} onPress={openLogoutAlert} style={styles.logoutButton} />

      <ActionSheet
        ref={actionsheetRef}
        title={'Which one do you like ?'}
        options={[strings.camera, strings.photoLibrary, strings.cancel]}
        cancelButtonIndex={2}
        onPress={(index) => {
          if (index != 2) {
            openPicker(index);
          }
        }}
      />

      <Modal visible={updateModalVisibility}>
        <UpdateProfileModal onUpdateClick={(firstName, lastName) => onUpdateClick(firstName, lastName)} onClose={() => setUpdateModalVisibility(false)} />
      </Modal>

    </View>
  )
}

export default Profile;