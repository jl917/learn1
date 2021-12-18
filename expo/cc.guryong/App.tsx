import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from './src/Container'

const TTex = (props:object) => <View style={styles.container}><Text>{props.name}</Text></View>

export default function App() {
  return <TTex name="daolan23g"></TTex>
  /*
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app2asdfsdaf!</Text>
    </View>
  );*/
}



const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
