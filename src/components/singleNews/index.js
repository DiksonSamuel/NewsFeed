import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const SingleNews = (props) => {

  let { data, openNewsDetails } = props;
  let { title, urlToImage, url, author, description } = data;

  return (
    <TouchableOpacity  onPress={() => openNewsDetails(url)}>
      <View style={styles.newContainer}>
        <Image source={{ uri: urlToImage }} style={styles.newImage} />
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.title}>{title}</Text>
          <Text numberOfLines={4} style={styles.description}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>

  )
}

export default SingleNews;