import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './Store';
import AppRoot from './AppRoot';
import {
  CocktailsList,
  CocktailDetails,
  CocktailAdd
} from './src/components/cocktails';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <AppRoot navigation={this.props.navigation} dispatch={store.dispatch} />
      </Provider>
    );
  }
}

const BuoyTest = createStackNavigator({
  App: { screen: App },
  Details: { screen: CocktailDetails },
  Add: { screen: CocktailAdd }
}, {
  initialRouteName: 'App',
  headerMode: 'screen',
  cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
  navigationOptions: ({navigation}) => ({
    statusBarStyle: 'light-content',
  }),
});

export default createAppContainer(BuoyTest);
