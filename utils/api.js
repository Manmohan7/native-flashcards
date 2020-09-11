import AsyncStorage from '@react-native-community/async-storage'
import { DATA_KEY, NOTIFICATION_KEY } from './_data'
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'

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

function createNotification () {
  return {
    title: 'Ready for Quiz!',
    body: "Don't forget to practice today!",
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(13)
              tomorrow.setMinutes(56)

              Notifications.scheduleNotificationAsync({
                content: createNotification(),
                trigger: tomorrow
              })

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}