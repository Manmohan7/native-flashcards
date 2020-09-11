import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from '../utils/styles'

function ViewQuestion(props) {
  const { question, flipQuestion } = props
  const { hCenter, heading, subHeading } = styles

  return (
    <View style={hCenter}>
      <Text style={heading}>{question}</Text>

      <TouchableOpacity onPress={() => flipQuestion()}>
        <Text style={subHeading}>Show Answer</Text>
      </TouchableOpacity>
    </View>
  )
}

function ViewAnswer(props) {
  const { answer, flipQuestion } = props
  const { hCenter, heading, subHeading } = styles

  return (
    <View style={hCenter}>
      <Text style={heading}>{answer}</Text>

      <TouchableOpacity onPress={() => flipQuestion()}>
        <Text style={subHeading}>Question</Text>
      </TouchableOpacity>
    </View>
  )
}

class Card extends Component {
  state = {
    flipped: false
  }

  flipQuestion = () => {
    this.setState(({ flipped }) => ({
      flipped: !flipped
    }))
  }

  render() {
    const { card } = this.props
    const { flipped } = this.state

    return (
      <View>
        {
          flipped
            ? <ViewAnswer answer={card.answer} flipQuestion={this.flipQuestion} />
            : <ViewQuestion question={card.question} flipQuestion={this.flipQuestion} />
        }
      </View>
    )
  }

}

export default Card