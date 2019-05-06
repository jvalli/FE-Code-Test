import { StyleSheet, Dimensions } from 'react-native';
import L from '../../common/Layout';
const screen = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: screen.width - 20
  },
  name: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10
  },
  bigphoto: {
     width: screen.width - 20,
     height: screen.width - 20,
     marginBottom: 10
  },
  details: {
    marginTop: 10,
    marginBottom: 10
  },
  ingredient: {
    fontSize: 14,
  },
  instructions: {
    fontSize: 16,
  },
});
