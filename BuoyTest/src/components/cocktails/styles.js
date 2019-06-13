import { StyleSheet, Dimensions } from 'react-native';
import L from '../common/Layout';
const screen = Dimensions.get("window");

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
  },
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row'
  },
  search: {
    height: 40,
    width: screen.width - 40,
    alignSelf: 'flex-start'
  },
  plus: {
    alignSelf: 'flex-end',
    width: 40
  },
  row: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },
  input: {
    height: 40,
    alignSelf: 'flex-start'
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30
  },
  buttonSave: {
    backgroundColor: 'blue',
    color: 'white'
  }
});
