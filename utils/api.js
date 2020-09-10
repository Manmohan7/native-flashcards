import AsyncStorage from '@react-native-community/async-storage'
import { DATA_KEY } from './_data'

export function getData(id) {
  try {
    return AsyncStorage.getItem(DATA_KEY)
      .then(data => JSON.parse(data))
      .then(data => id ? data[id] : data)
  } catch(e) {
    return {}
  }
}

function formatNewDeck(title) {
  return {
    [title]: {
      title,
      questions: []
    }
  }
}

export function addDeck(title) {
  AsyncStorage.mergeItem(
    DATA_KEY,
    JSON.stringify(formatNewDeck(title)
  ))

}

export function addCard(id, question, answer) {
  getData()
    .then(data => {

      data[id] && data[id].questions
        .push({ question, answer })

      AsyncStorage.setItem(DATA_KEY, JSON.stringify(data))
    })
}