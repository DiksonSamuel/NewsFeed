import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },  
  button: {
    backgroundColor: 'blue',
    marginTop: 2000
  },
  focusBlock: {
    marginVertical: 20,
    marginHorizontal: 20
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.black,
    marginHorizontal: 20,
    marginTop: 20
  },
  button: {
    marginHorizontal: 20,
    marginTop: 20
  },
});

export default styles;