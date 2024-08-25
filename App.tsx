import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ListComponant from './componants/ListComponant'

const App = () => {
  return (
    <View>
      <Text style={styles.text}>
        This is Our List
      </Text>
      <ListComponant />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
  }
})

