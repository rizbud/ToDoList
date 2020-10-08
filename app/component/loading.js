import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

// styles
import styles from './styles/loadingStyle'

const Loading = () => {
  return (
    <View style={styles.wrap}>
      <ActivityIndicator size="large" />
    </View>
  )
}

export default Loading