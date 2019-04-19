import React, { Component } from 'react';
import { View, StatusBar, Alert } from 'react-native';
import { connect } from 'react-redux';
import {
    loadCocktails,
    selectCocktail
} from './src/actions';
import {
  CocktailsList,
  CocktailDetails
} from './src/components/cocktails';
import AppService from './src/providers/app/AppService';
import { NavigationActions } from 'react-navigation';

class AppRoot extends Component {
    state = {
      cocktails: [],
      selectedCocktail: null
    };
    componentDidMount() {
      this.loadCocktails();
    }
    loadCocktails() {
        AppService.getCocktails(
            cocktails => {
                this.props.loadCocktails(cocktails);
                this.setState({ cocktails });
            },
            err => {
                const modalProps = {
                    type: 'error',
                    buttonOk: 'OK',
                    message: `Load cocktails error:${err}`
                };
            }
        );
    }
    onItemPress(item) {
      this.props.selectCocktail(item.idDrink);
      this.setState({ selectedCocktail: item });
      this.props.navigation.navigate('Details', {
        cocktailId: item.idDrink,
      });
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="light-content" />
                <CocktailsList
                  emptyMessage={'No Items.'}
                  onItemPress={this.onItemPress.bind(this)}
                  refreshing={false}
                  cocktails={this.state.cocktails}
                />
            </View>
        );
    }
}

const mapStateToProps = ({ appReducer }) => ({
    cocktails: appReducer.cocktails,
    selectedCocktail: appReducer.selectedCocktail
});

export default connect(
    mapStateToProps,
    {
        loadCocktails,
        selectCocktail
    }
)(AppRoot);
