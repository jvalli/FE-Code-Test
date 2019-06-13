import React, { Component } from 'react';
import { Stylesheet, View, Text, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

class CocktailAdd extends Component {
  onPhotoPress() {

  }
  onSavePress() {

  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text>Cocktail Name</Text>
          <TextInput
              style={styles.input}
              placeholder="Name"
              //onChangeText={(text) => this.props.onSearch(text)}
            />
        </View>
        <View style={styles.row}>
          <Text>Category</Text>
          <TextInput
              style={styles.input}
              placeholder="Category"
              //onChangeText={(text) => this.props.onSearch(text)}
            />
        </View>
        <View style={styles.row}>
          <Text>Instructions</Text>
          <TextInput
              style={styles.input}
              placeholder="Instructions"
              //onChangeText={(text) => this.props.onSearch(text)}
            />
        </View>
        <View style={styles.row}>
          <Text>Photo</Text>
          <TouchableOpacity style={styles.centered}>
            <Entypo name="drink" size={40} color="#01a699" onPress={() => this.onPhotoPress() }  />
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <Button onPress={() => this.onSavePress()}
                     style={styles.buttonSave}
                     title="Save"
             />

        </View>
      </View>
    );
  }
}

export default CocktailAdd;
