import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import { data } from '../utils/Data'

class Deck extends Component {
  startQuiz = () => {
    console.log('quiz started')
  }

  render() {
    const { navigation, route } = this.props
    const { id } = route.params
    const deck = data[id]

    return (
      <View style={styles.container}>
        <Text style={styles.title}> {deck.title} </Text>
        <Text style={styles.count}> {deck.questions.length} cards </Text>

        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('NewCard', {
              deck: id
            })}>
            <Text> Add Card </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={this.startQuiz}
          >
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
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 48,
  },
  count: {
    fontSize: 24,
    color: '#666',
    marginBottom: 50,
  },
  btn: {
    padding: 15,
    borderColor: '#666',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 5,
    fontSize: 20,
  }
})

export default Deck