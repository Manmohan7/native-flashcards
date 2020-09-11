import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import styles from '../utils/styles'
import Card from './Card'

class Quiz extends Component {
  state = {
    correct: 0,
    currentQuestion: 0,
  }

  correctAnswer = () => {
    this.setState((state) => ({
      correct: state.correct + 1,
      currentQuestion: state.currentQuestion + 1
    }))
  }

  wrongAnswer = () => {
    this.setState((state) => ({
      currentQuestion: state.currentQuestion + 1
    }))
  }

  resetTest = () => {
    this.setState(() => ({
      correct: 0,
      currentQuestion: 0
    }))
  }

  render() {
    const { container, hCenter, heading, btnGroup, correctBtn, incorrectBtn, title, subTitle, btn } = styles
    const { questions, navigation } = this.props
    const { currentQuestion, correct } = this.state

    if (currentQuestion >= questions.length) {
      return (
        <View style={[container, hCenter]}>
          <Text style={heading}>Quiz Completed!</Text>

          <Text style={title}>Score</Text>
          <Text style={heading}>{correct}</Text>
          <Text style={subTitle}>out of</Text>
          <Text style={heading}>{questions.length}</Text>

          <View style={btnGroup}>
            <TouchableOpacity
              onPress={this.resetTest}
              style={btn}
            >
              <Text>Try Again</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={btn}
            >
              <Text>Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }

    return (
      <View style={[container, hCenter]}>
        <Text>{`Question ${currentQuestion + 1} of ${questions.length}`}</Text>

        <Card
          card={questions[currentQuestion]}
        />

        <View style={btnGroup}>
          <TouchableOpacity onPress={this.correctAnswer}>
            <Text style={correctBtn}>Correct</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.wrongAnswer}>
            <Text style={incorrectBtn}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

function mapStoreToProps(decks, props) {
  const { deck } = props.route.params
  return {
    questions: decks[deck].questions
  }
}

export default connect(mapStoreToProps)(Quiz)