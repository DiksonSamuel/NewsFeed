import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';


const styles = StyleSheet.create({
  newContainer: {
    backgroundColor: colors.white,
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    flexDirection: 'row',
    flex: 1
  },
  newImage: {
    height: 100,
    width: 100
  },
  textContainer: {
    paddingLeft: 10,
    flex: 1
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1
  },
  description: {
    paddingTop: 5
  }
});

export default styles;