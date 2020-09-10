import React, { Component } from 'react'
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AppLoading } from 'expo'

import { getData } from '../utils/api'

function DeckPreview({ item }, navigation, list) {
  function openDeck() {
    navigation.navigate('Deck', {
      id: item
    })
  }

  return (
    <TouchableOpacity onPress={openDeck}>
      <View style={styles.container}>
        <Text style={styles.title}>{list[item].title}</Text>
        <Text style={styles.count}>{list[item].questions.length} cards</Text>
      </View>
    </TouchableOpacity>
  )
}

class DeckList extends Component {
  state = {
    list: {},
    ready: false
  }

  componentDidMount() {
    getData()
      .then((data) => {
        this.setState({
          list: data,
          ready: true
        })
      })
  }

  render() {
    if(!this.state.ready) {
      return <AppLoading />
    }

    const { list } = this.state
    const { navigation } = this.props

    return (
      <FlatList
        data={Object.keys(list)}
        renderItem={(item) => DeckPreview(item, navigation, list)}
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


export default DeckList