import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';


const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.backgroundGrey,
    flex: 1,
  },
  closeButton: {
    padding: 20,
    alignSelf: 'flex-end'
  },
  focusBlock: {
    marginHorizontal: 20
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.black,
    marginHorizontal: 20,
    marginBottom: 40
  },
  

});

export default styles;