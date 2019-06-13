import React, { Component } from 'react';
import { Stylesheet, View, FlatList, Text, Image, TouchableWithoutFeedback, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

class CocktailsList extends Component {
  state = {}
  tableHeader = () => (
    <View style={styles.header}>
      <TextInput
          style={styles.search}
          placeholder="Type to search cocktails..."
          onChangeText={(text) => this.props.onSearch(text)}
        />
      <TouchableOpacity style={styles.plus}>
        <Entypo name="plus" size={40} color="#01a699" onPress={() => this.props.onAddPress() }  />
      </TouchableOpacity>
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
