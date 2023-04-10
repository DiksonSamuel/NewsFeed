import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';


const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey
  },
  title: {
    fontSize: 16,
    color: colors.lightGrey,
    fontWeight: 'bold'
  },
  value: {
    fontSize: 20,
    color: colors.blue,
    fontWeight: '500'
  }

});

export default styles;