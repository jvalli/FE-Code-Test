import React, { Component } from 'react';
import { Stylesheet, View, FlatList, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

class CocktailsList extends Component {
  state = {}
  tableHeader = () => (
    <View>
    </View>
  )

  renderRows(object, indexRow) {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.onItemPress(object)} >
        <View style={styles.cell}>
          <Image
            style={styles.photo}
            source={{uri: object.strDrinkThumb}}
          />
          <Text>{object.strDrink}</Text>
        </View>
      </TouchableWithoutFeedback >
    );
  }

  render() {
    const { cocktails, refreshing, emptyMessage } = this.props;
    return (
      <View>
        {this.tableHeader()}
        <FlatList
          refreshing={refreshing}
          data={cocktails}
          ItemSeparatorComponent={() => <View style={styles.separatorStyle} />}
          keyExtractor={(item) => item.idDrink}
          ListEmptyComponent={() => <Text style={styles.emptyListStyle}>{emptyMessage}</Text>}
          renderItem={({ item, index }) => this.renderRows(item, index)}
        />
      </View>
    );
  }
}

export default CocktailsList;
