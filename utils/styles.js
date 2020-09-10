import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  hCenter: {
    alignItems: 'center',
  },

  vCenter: {
    justifyContent: 'center'
  },

  darkBtn: {
    backgroundColor: 'black',
    color: 'white',
    padding: 25,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
  },

  lightBtn: {
    backgroundColor: 'black',
    color: 'white',
    padding: 25,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingTop: 50,
  },

  divider: {
    borderBottomColor: '#eee',
    borderBottomWidth: 2,
  },

  heading: {
    fontSize: 48,
  },

  subHeading: {

  },

  title: {
    fontSize: 24,
  },

  subTitle: {

  },

  count: {
    fontSize: 16,
    color: '#555',
  },

  textInput: {
    paddingVertical: 10,
    marginTop: 100,
    marginBottom: 25,
    fontSize: 28,
    width: '80%',
  },

  textGroup: {
    paddingVertical: 10,
    marginVertical: 25,
    fontSize: 28,
    width: '80%',
  }
})

export default styles