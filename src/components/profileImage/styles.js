import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';


const styles = StyleSheet.create({
  addProfileImageBlock: {
    backgroundColor: colors.white,
    height: 125,
    width: 125,
    borderRadius: 62.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.blue,
    alignSelf: 'center',
    marginBottom: 30
  }
});

export default styles;