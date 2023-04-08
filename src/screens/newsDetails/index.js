import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { WebView } from 'react-native-webview';

const NewsDetails = (props) => {

  let {url} = props.route.params;
  return(
    <View style={styles.mainContainer}>
      <WebView
        source={{ uri: url }}
        style={styles.webviewContainer}
      />
    </View>
  )
}

export default NewsDetails;