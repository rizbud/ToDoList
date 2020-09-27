import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

const Loading = () => {
  return (
    <View style={styles.wrap}>
      <ActivityIndicator size="large" />
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Loading