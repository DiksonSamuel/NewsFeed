import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import * as Icon from "react-native-feather";

const ProfileImage = ({imageURI, onPress}) => {

  renderMain = () => {
    if(imageURI.length > 0) {
      return(
        <Image style={styles.addProfileImageBlock} source={{uri: imageURI}} />
      )
    } else {
      return(
        <View style={styles.addProfileImageBlock}>
          <Icon.Camera />
        </View>
      )
    }
  }

  return(
    <TouchableOpacity onPress={onPress}>
      {renderMain()}
    </TouchableOpacity>
  )
}

export default ProfileImage;