import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'
import { addNewDeck } from '../actions'

import styles from '../utils/styles'
import { addDeck } from '../utils/api'

class NewDeck extends Component {
  state = {
    value: ''
  }

  handleAdd = () => {
    const { navigation, dispatch } = this.props

    dispatch(addNewDeck(this.state.value))

    addDeck(this.state.value)

    this.setState(() => ({
      value: ''
    }))

    navigation.navigate('Decks')
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
          onPress={this.handleAdd}
          disabled={value === ''}
        >
          <Text style={darkBtn}>Add Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(NewDeck)