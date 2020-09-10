import { ADD_CARD, ADD_DECK, RECEIVE_LIST } from '../actions'

function decks(state = {}, action) {
  switch(action.type) {
    case RECEIVE_LIST:
      return {
        ...state,
        ...action.list
      }

    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      }

    case ADD_CARD:
      const { id, question, answer } = action
      return {
        ...state,
        [id]: {
          ...state[id],
          questions: [ ...state[id].questions, { question, answer } ]
        }
      }

    default:
      return state
  }
}

export default decks