import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
   return (
      <View style={container}>
         <Text>Maxie is gay and stinky!!!!!</Text>
         <StatusBar style='auto' />
      </View>
   );
}

const { container } = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
   }
});
