import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';


const styles = StyleSheet.create({
  inputStyle: {
    marginBottom: 15
  },
  mainContainer: {
    flex: 1,
  },
  button: {
    marginHorizontal: 20,
    marginTop: 20
  },
  focusBlock: {
    margin: 20,

  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.black,
    marginHorizontal: 20,
    marginTop: 20
  },
  bottomText: {
    fontSize: 16,
    color: colors.darkGrey,
  },
  highlightedText: {
    color: colors.blue
  },
  bottomContainer: {
    alignItems: 'center',
  }
});

export default styles;