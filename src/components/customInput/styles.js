import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors';

let { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  inputStyle: {
    borderRadius: 4,
    backgroundColor: colors.white,
    borderColor: colors.inputBorder,
    height: 40,
    width: width - 40,
    paddingHorizontal: 7.5
  }
});

export default styles;