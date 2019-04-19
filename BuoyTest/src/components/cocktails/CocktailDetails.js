import React, { Component } from 'react';
import { Stylesheet, View, Text, Image } from 'react-native';
import AppService from '../../providers/app/AppService';
import { NavigationActions } from 'react-navigation';
import CocktailView from './details/CocktailView';

class CocktailDetails extends Component {
  state = {
    cocktail: null
  };
  componentDidMount() {
    this.loadCocktailDetails();
  }
  loadCocktailDetails() {
      AppService.getCocktailDetails(
          this.props.navigation.getParam('cocktailId', ''),
          cocktail => {
              this.setState({ cocktail: cocktail });
          },
          err => {
              const modalProps = {
                  type: 'error',
                  buttonOk: 'OK',
                  message: `Load cocktail details error:${err}`
              };
          }
      );
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CocktailView
          cocktail={this.state.cocktail}
        />
      </View>
    );
  }
}

export default CocktailDetails;
