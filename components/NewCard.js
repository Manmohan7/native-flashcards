import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'
import { addNewCard } from '../actions'

import styles from '../utils/styles'
import { addCard } from '../utils/api'

class NewCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  handleAdd = () => {
    const { question, answer } = this.state
    const { route, dispatch } = this.props
    const { deck } = route.params

    dispatch(addNewCard(deck, question, answer))

    addCard(deck, question, answer)

    this.props.navigation.goBack()
  }

  render() {
    const { container, hCenter, darkBtn, heading, divider, textGroup } = styles
    const { question, answer } = this.state

    return (
      <View style={[container, hCenter]}>
        <Text style={heading}>Enter details</Text>

        <TextInput
          style={[divider, textGroup, { marginTop: 100 }]}
          placeholder='Question'
          maxLength={200}
          onChangeText={(value) => this.setState({
            question: value
          })}
          value={question}
        />

        <TextInput
          style={[divider, textGroup]}
          placeholder='Answer'
          maxLength={200}
          onChangeText={(value) => this.setState({
            answer: value
          })}
          value={answer}
        />

        <TouchableOpacity
          onPress={this.handleAdd}
          disabled={question === '' || answer === ''}
        >
          <Text style={darkBtn}>Add Card</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(NewCard)