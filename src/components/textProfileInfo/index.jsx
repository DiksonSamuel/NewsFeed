import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const TextProfileInfo = ({title, value}) => {

  return(
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}

export default TextProfileInfo;