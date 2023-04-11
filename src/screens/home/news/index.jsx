import  React, {useEffect, useState} from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { getNewsList } from '../../../apiService/news';
import SingleNews from '../../../components/singleNews';
import routes from '../../../utils/routes';
import styles from './styles';

const News = (props) => {

  let { navigation } = props;

  const [newsList, setNewsList] = useState([]);
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    newListAPI()
  }, [])

  newListAPI = () => {
    getNewsList().then(data => {
      setNewsList(data)
      setLoader(false)
    }).catch(error => {

    })
  }

  if(loader) {
    return(
      <View style={styles.loaderView}>
        <ActivityIndicator animating={true} />
      </View>
    )
  } else {
    return(
      <View style={styles.main}>
        <FlatList
        style={styles.main}
          data={newsList}
          renderItem={({item, index}) => <SingleNews data={item} index={index} openNewsDetails={() => navigation.navigate(routes.newsDetails, {newsData: item})} /> }
        />
      </View>
    )
  }

  
}

export default News;