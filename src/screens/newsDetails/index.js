import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { WebView } from 'react-native-webview';
import * as Icon from "react-native-feather";
import { addBookmarkData, getCurrentUser} from '../../dbQueries';
import colors from '../../utils/colors';
import strings from '../../utils/strings';

const NewsDetails = ({navigation, route}) => {

  const[userData, setUserData] = useState({})
  const[bookMarked, setBookMarked] = useState(false)

  let {newsData} = route.params;

  useEffect(() => {
    setNavigationOptions()
  }, [bookMarked])

  useEffect(() => {
    fetchUserData()
  }, [])


  fetchUserData = async () => {
    let uData = await getCurrentUser();
    let bookmarks = JSON.parse(uData.bookmarks);

    let bookmarkedBoolean = bookmarks.some(obj => obj.title === newsData.title);

    setBookMarked(bookmarkedBoolean)
    setUserData(uData);
  }

  setNavigationOptions = () => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => bookMarkNews()}>
          <Icon.Bookmark fill={bookMarked ? colors.blue : colors.white} />
        </TouchableOpacity>
      ),
    });
  }

  bookMarkNews = async () => {
    let uObjAssignData = Object.assign({}, userData);
    let bookmarkData = JSON.parse(uObjAssignData.bookmarks);

    if(bookMarked) {
      bookmarkData = bookmarkData.filter(obj => obj.title !== newsData.title);
    } else {
      bookmarkData.push(newsData);
    }
    
    addBookmarkData(bookmarkData, userData.id).then(() => {
      if(bookMarked) {
        Alert.alert(strings.bookmarkedRemoved);
      } else {
        Alert.alert(strings.newsBookmarked)
      }
      setBookMarked(!bookMarked)
    })
  
  }

  

  return(
    <View style={styles.mainContainer}>
      <WebView
        source={{ uri: newsData.url }}
        style={styles.webviewContainer}
      />
    </View>
  )
}

export default NewsDetails;