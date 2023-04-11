import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import SingleNews from '../../../components/singleNews';
import { getCurrentUser } from '../../../dbQueries';
import routes from '../../../utils/routes';
import strings from '../../../utils/strings';
import { useIsFocused } from '@react-navigation/native';
import styles from './styles';

const Bookmark = ({ navigation }) => {

  const [userData, setUserData] = useState({});
  const [bookmarkList, setBookmarkList] = useState([])
  const [loader, setLoader] = useState(true)

  const isFocused = useIsFocused();


  useEffect(() => {
    fetchUserData()
  }, [isFocused]);


  fetchUserData = async () => {
    let uData = await getCurrentUser();
    let bookmarks = JSON.parse(uData.bookmarks);
    setUserData(uData);

    setBookmarkList(bookmarks)
    setLoader(false)

  }

  if (loader) {
    return (
      <View style={styles.loaderAndEmptyStateView}>
        <ActivityIndicator animating={true} />
      </View>
    )
  } else if (bookmarkList.length > 0) {

    return (
      <View style={styles.main}>
        <FlatList
          style={styles.main}
          data={bookmarkList}
          renderItem={({ item, index }) => <SingleNews data={item} index={index} openNewsDetails={() => navigation.navigate(routes.newsDetails, { newsData: item })} />}
        />
      </View>
    )
  } else {
    return (
      <View style={styles.loaderAndEmptyStateView}>
        <Text>{strings.bookmarkEmptyState}</Text>
      </View>
    )
  }


}

export default Bookmark;