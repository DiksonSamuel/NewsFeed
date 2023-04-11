import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const SingleNews = (props) => {

  let { data, openNewsDetails } = props;
  let { title, urlToImage, description } = data;

  return (
    <TouchableOpacity  onPress={() => openNewsDetails()}>
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