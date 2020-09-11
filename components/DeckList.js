import React, { Component } from 'react'
import { FlatList, View, Text, TouchableOpacity } from 'react-native'
import { AppLoading } from 'expo'

import { recieveList } from '../actions'
import { connect } from 'react-redux'

import { getData } from '../utils/api'
import styles from '../utils/styles'

function DeckPreview({ item }, navigation, decks) {
  function openDeck() {
    navigation.navigate('Deck', {
      id: item
    })
  }

  const { title, subTitle, divider, container, hCenter } = styles

  return (
    <TouchableOpacity onPress={openDeck}>
      <View style={[divider, container, hCenter, { paddingBottom: 25 }]}>
        <Text style={title}>{decks[item].title}</Text>
        <Text style={subTitle}>{decks[item].questions.length} cards</Text>
      </View>
    </TouchableOpacity>
  )
}

class DeckList extends Component {
  state = {
    ready: false
  }

  componentDidMount() {
    getData()
      .then((data) => this.props.dispatch(recieveList(data)))
      .then(() => this.setState({ ready: true }))
  }

  render() {
    if(!this.state.ready) {
      return <AppLoading />
    }

    const { navigation, decks } = this.props

    return (
      <FlatList
        data={Object.keys(decks)}
        renderItem={(item) => DeckPreview(item, navigation, decks)}
        keyExtractor={item => item}
      />
    )
  }
}

export default connect((decks) => ({ decks }))(DeckList)