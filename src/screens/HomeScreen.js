import React,{ useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector, connect} from 'react-redux';


export function HomeScreen({ navigation }) {

  const user=useSelector((state)=>state.userReducer.user);


  return (
    <View style={localStyles.container}>
      <Text>"Welcome to LocalCards"</Text>
      <Text></Text>
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

export default connect()(HomeScreen); 