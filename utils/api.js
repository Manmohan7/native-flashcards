import { AsyncStorage } from 'react-native'
import { DATA_KEY } from './_data'

export function getData(id) {
  return AsyncStorage.getItem(DATA_KEY)
    .then(data => JSON.parse(data))
    .then(data => id ? data[id] : data)
}

export function addDeck(title) {

}

export function addCard(id, question, answer) {

}