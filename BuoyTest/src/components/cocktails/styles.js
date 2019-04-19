import { StyleSheet } from 'react-native';
import L from '../common/Layout';

export default StyleSheet.create({
  emptyListStyle: {
    opacity: 0.7,
    paddingVertical: L.hProm(50),
    paddingHorizontal: L.hProm(50),
  },
  separatorStyle: {
    borderColor: 'lightgrey',
    borderWidth: 0.4
  },
  cell: {
     flexDirection: 'row',
     alignSelf: 'flex-start'
  },
  photo: {
     width: 60,
     height: 60
  }
});
