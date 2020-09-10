import React, { Component } from 'react'
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AppLoading } from 'expo'

import { recieveList } from '../actions'
import { connect } from 'react-redux'

import { getData } from '../utils/api'

function DeckPreview({ item }, navigation, decks) {
  function openDeck() {
    navigation.navigate('Deck', {
      id: item
    })
  }

  return (
    <TouchableOpacity onPress={openDeck}>
      <View style={styles.container}>
        <Text style={styles.title}>{decks[item].title}</Text>
        <Text style={styles.count}>{decks[item].questions.length} cards</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 2,
    padding: 20,
  },
  title: {
    fontSize: 24
  },
  count: {
    fontSize: 16,
    color: '#555'
  }
});


export default connect((decks) => ({ decks }))(DeckList)