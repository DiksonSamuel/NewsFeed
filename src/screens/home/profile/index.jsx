import React, { useState, useEffect, useRef } from 'react';
import { View, Button, Alert, TouchableOpacity, Modal } from 'react-native';
import styles from './styles';
import * as Icon from "react-native-feather";
import TextProfileInfo from '../../../components/textProfileInfo';
import strings from '../../../utils/strings';
import ProfileImage from '../../../components/profileImage';
import colors from '../../../utils/colors';
import ActionSheet from 'react-native-actionsheet'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import UpdateProfileModal from '../../../components/updateProfileModal';
import { getCurrentUser, getDBConnection, saveUserItems, updateQuery, addProfilePicData } from '../../../dbQueries';
import routes from '../../../utils/routes';
import { ActivityIndicator } from 'react-native-paper';
import { hasImageAlreadyPickerData, noImagePicker, noImagePickerData } from '../../../utils/profileImagePickerData';

const Profile = ({ navigation, route }) => {

  const [profileData, setProfileData] = useState(getCurrentUser());
  const actionsheetRef = useRef(null);
  const [updateModalVisibility, setUpdateModalVisibility] = useState(false);
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setNavigationButton()
    fetchCurrentUser()
   
    
  }, [])

  fetchCurrentUser = async () => {
    let userData = await getCurrentUser();
    setProfileData(userData)
    setLoader(false)
  }

  setNavigationButton = () => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{ paddingRight: 20 }} onPress={() => setUpdateModalVisibility(true)}>
          <Icon.Edit />
        </TouchableOpacity>
      ),
    });
  }

  updateData = async (type, value) => updateQuery(type, value, profileData.id);
  

  onLogout = () => {
    updateData('userLoggedIn', 0)
    navigation.replace(routes.login, {})
  }

  onUpdateProfile = async (updatedData) => {
    const db = await getDBConnection()

    let userDataObject = Object.assign({}, profileData);
    userDataObject.firstName = updatedData.firstName;
    userDataObject.lastName = updatedData.lastName;

    saveUserItems(db, userDataObject).then(() => {
      setProfileData(userDataObject)
      setUpdateModalVisibility(false)
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
      changePicture(res.assets[0].uri)
    } else  if(type == 1){
      const res = await launchImageLibrary({
        maxHeight: 200,
        maxWidth: 200,
        selectionLimit: 0,
        mediaType: 'photo',
      });
      changePicture(res.assets[0].uri)
    } else {
      changePicture('')
    }
  }

  changePicture = (uri) => {
    let stateData = Object.assign({}, profileData)
    stateData.profileImageURI = uri;

    addProfilePicData(stateData.profileImageURI, profileData.id).then(() => {
      setProfileData(stateData)
    })
    
  }

  if(loader) {
    return(
      <View style={styles.loaderView}>
        <ActivityIndicator animating={true} />
      </View>
    )
  }

  return (
    <View style={styles.mainContainer}>
      <ProfileImage onPress={() => actionsheetRef.current.show()} imageURI={profileData.profileImageURI} />
      <TextProfileInfo title={strings.firstName} value={profileData.firstName} />
      <TextProfileInfo title={strings.lastName} value={profileData.lastName} />
      <TextProfileInfo title={strings.emailId} value={profileData.email} />
      <Button title={strings.logout} color={colors.red} onPress={openLogoutAlert} style={styles.logoutButton} />

      <ActionSheet
        ref={actionsheetRef}
        title={''}
        options={profileData.profileImageURI.length == 0 ? noImagePickerData : hasImageAlreadyPickerData}
        cancelButtonIndex={profileData.profileImageURI.length == 0 ? 2 : 3}
        destructiveButtonIndex={profileData.profileImageURI.length == 0 ? -1 : 2}
        onPress={(index) => {
          if (index != 2 && profileData.profileImageURI.length == 0 || profileData.profileImageURI.length > 0 && index != 3) {
            openPicker(index);
          }
        }}
      />
      <Modal visible={updateModalVisibility}>
        <UpdateProfileModal 
          onUpdateClick={(updatedData) => onUpdateProfile(updatedData)} 
          onClose={() => setUpdateModalVisibility(false)}
          data={profileData}
        />
      </Modal>

    </View>
  )
}

export default Profile;