import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'

import styles from '../utils/styles'

class Deck extends Component {
  render() {
    const { navigation, deck } = this.props
    const { btn, container, heading, subHeading, hCenter } = styles

    return (
      <View style={[ container, hCenter ]}>
        <Text style={heading}>{deck.title}</Text>
        <Text style={subHeading}>{deck.questions.length} cards</Text>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('NewCard', {
              deck: deck.title
            })}>
            <Text style={btn}>Add Card</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Quiz', {
              deck: deck.title
            })}
            disabled={deck.questions.length === 0}
          >
            <Text style={btn}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

function mapStoreToProps(decks, props) {
  const { id } = props.route.params

  return {
    deck: decks[id]
  }
}

export default connect(mapStoreToProps)(Deck)