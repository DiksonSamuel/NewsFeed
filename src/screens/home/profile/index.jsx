import React, {useState, useEffect} from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';
import styles from './styles';
import * as Icon from "react-native-feather";
import TextProfileInfo from '../../../components/textProfileInfo';
import strings from '../../../utils/strings';
import ProfileImage from '../../../components/profileImage';
import colors from '../../../utils/colors';

const Profile = ({navigation, route}) => {

  const [profileData, setProfileData] = useState({firstName: 'Dikson', lastName: 'Samuel', email: 'diksonsamuel11@gmail.com', imageURI: ''});

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{paddingRight: 20}} onPress={() => alert("hi")}>
          <Icon.Edit />
        </TouchableOpacity>
      ),
    });
  }, [])

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
          onPress: () => {
            
          },
        },
      ],
    )
  }

  return(
    <View style={styles.mainContainer}>
      <ProfileImage imageURI={profileData.imageURI} />
      <TextProfileInfo title={strings.firstName} value={profileData.firstName} />
      <TextProfileInfo title={strings.lastName} value={profileData.lastName} />
      <TextProfileInfo title={strings.emailId} value={profileData.email} />
      <Button title={strings.logout} color={colors.red} onPress={openLogoutAlert} style={styles.logoutButton} />
    </View>
  )
}

export default Profile;