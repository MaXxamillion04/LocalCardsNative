import React,{ useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function HomeScreen({ navigation }) {
  return (
    <View style={localStyles.container}>
      <Text>"Welcome to LocalCards"</Text>
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen; 