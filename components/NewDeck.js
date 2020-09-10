import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import styles from '../utils/styles'
import { addDeck } from '../utils/api'

class NewDeck extends Component {
  state = {
    value: ''
  }

  addNewDeck = () => {
    addDeck(this.state.value)

    this.setState(() => ({
      value: ''
    }))

    this.props.navigation.navigate('Decks')
  }

  render() {
    const { container, hCenter, darkBtn, heading, divider, textInput } = styles
    const { value } = this.state

    return (
      <View style={[ container, hCenter ]}>
        <Text style={heading}>Enter the name for your new deck</Text>

        <TextInput
          style={[divider, textInput ]}
          placeholder='Deck name'
          maxLength={20}
          onChangeText={(value) => this.setState({ value })}
          value={value}
        />

        <TouchableOpacity
          onPress={this.addNewDeck}
          disabled={value === ''}
        >
          <Text style={darkBtn}>Add Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default NewDeck