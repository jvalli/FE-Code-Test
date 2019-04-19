import React, { Component } from 'react';
import { Stylesheet, View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';

class CocktailView extends Component {
  state = {}
  render() {
    const { cocktail } = this.props;
    if (cocktail != null) {
      let arrayIngredients = []
      for (let index = 1; index <= 15; index++) {
          const keyIngredient = "strIngredient"+index
          const keyMeasure = "strMeasure"+index
          if (cocktail[keyIngredient] && cocktail[keyMeasure]) {
              arrayIngredients.push(<Text key={index} style={styles.ingredient}>{cocktail[keyMeasure]+" "+cocktail[keyIngredient]}</Text>)
          }
      }
      return (
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.name}>{cocktail.strDrink}</Text>
            <Image
              style={styles.bigphoto}
              source={{uri: cocktail.strDrinkThumb}}
            />
            <View style={styles.details}>
              {arrayIngredients}
              <Text style={styles.instructions}>{"\u2022"} How to prepare?</Text>
              <Text style={styles.instructions}>{cocktail.strInstructions}</Text>
            </View>
          </View>
        </ScrollView>
      );
    }
    return (
      <View style={styles.container}>
        <Text>Loading Details...</Text>
      </View>
    );
  }
}

export default CocktailView;
