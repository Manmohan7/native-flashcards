import React, { Component } from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'

import { data } from '../utils/Data'

function DeckPreview({ item }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {data[item].title} </Text>
      <Text style={styles.count}> {data[item].questions.length} cards </Text>
    </View>
  )
}


class DeckList extends Component {
  render() {
    return (
      <FlatList
        data={Object.keys(data)}
        renderItem={DeckPreview}
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