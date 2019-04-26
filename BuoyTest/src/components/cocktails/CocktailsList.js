import React, { Component } from 'react';
import { Stylesheet, View, FlatList, Text, Image, TouchableWithoutFeedback, TextInput } from 'react-native';
import styles from './styles';

class CocktailsList extends Component {
  state = {}
  tableHeader = () => (
    <View>
      <TextInput
          style={{height: 40}}
          placeholder="Type to search cocktails..."
          onChangeText={(text) => this.props.onSearch(text)}
        />
    </View>
  )

  renderRow = ({item, index}) => {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.onItemPress(item)} >
        <View style={styles.cell}>
          <Image
            style={styles.photo}
            source={{uri: item.strDrinkThumb}}
          />
          <Text>{item.strDrink}</Text>
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
          renderItem={this.renderRow}
        />
      </View>
    );
  }
}

export default CocktailsList;
