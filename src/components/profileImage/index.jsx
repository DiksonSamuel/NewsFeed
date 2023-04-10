import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import * as Icon from "react-native-feather";

const ProfileImage = ({imageURI}) => {

  if(imageURI.length > 0) {
    return(
      <View />
    )
  } else {
    return(
      <View style={styles.addProfileImageBlock}>
        <Icon.Camera />
      </View>
    )
  }
}

export default ProfileImage;