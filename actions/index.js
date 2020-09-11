export const RECEIVE_LIST = 'RECEIVE_LIST'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function recieveList(list) {
  return {
    type: RECEIVE_LIST,
    list
  }
}

function formatDeck(title) {
  return {
    [title]: {
      title,
      questions: []
    }
  }
}

export function addNewDeck(title) {
  const deck = formatDeck(title)

  return {
    type: ADD_DECK,
    deck
  }
}

export function addNewCard(id, question, answer) {
  return {
    type: ADD_CARD,
    id,
    question,
    answer
  }
}
