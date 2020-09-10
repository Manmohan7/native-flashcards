import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

class Deck extends Component {
  someCall = () => {
    console.log('clicked')
  }

  render() {
    return(
      <View style={styles.container}>
        <Text> udacicards </Text>
        <Text> 3 cards </Text>

        <View>
          <TouchableOpacity onPress={this.someCall}>
            <Text> Add Card </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.someCall}>
            <Text> Start Quiz </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#eee',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,

  }
})

export default Deck