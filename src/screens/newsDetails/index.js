import React, { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import styles from './styles';
import { WebView } from 'react-native-webview';
import * as Icon from "react-native-feather";

const NewsDetails = ({navigation, route}) => {

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => alert("hi")}>
          <Icon.Bookmark />
        </TouchableOpacity>
      ),
    });
  }, [])

  let {url} = route.params;
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