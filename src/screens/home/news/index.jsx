import  React, {useEffect, useState} from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { getNewsList } from '../../../apiService/news';
import SingleNews from '../../../components/singleNews';
import routes from '../../../utils/routes';

const news = (props) => {

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
      <View>
        <ActivityIndicator animating={true} />
      </View>
    )
  } else {
    return(
      <View>
        <FlatList
          data={newsList}
          renderItem={({item, index}) => <SingleNews data={item} index={index} openNewsDetails={(url) => navigation.navigate(routes.newsDetails, {url: url})} /> }
        />
  
      </View>
    )
  }

  
}

export default news;