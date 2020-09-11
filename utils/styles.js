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

  btn: {
    padding: 20,
    borderColor: '#666',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 5,
    fontSize: 18,
    textAlign: 'center'
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

  correctBtn: {
    backgroundColor: 'green',
    color: 'white',
    padding: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
  },

  incorrectBtn: {
    backgroundColor: 'red',
    color: 'white',
    padding: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
  },

  btnGroup: {
    marginTop: 50,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
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
    marginBottom: 12,
  },

  subHeading: {
    fontSize: 24,
    color: '#555',
  },

  title: {
    fontSize: 24,
  },

  subTitle: {
    fontSize: 16,
    color: '#555'
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