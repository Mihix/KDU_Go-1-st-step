// App.js
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { colors } from './src/global/styles';

import RootNavigation from './src/navigation/RootNavigation';
export default function App() {

// console.log(fbApp);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.StatusBar}
      />
  
<RootNavigation/>



   
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 }
})
