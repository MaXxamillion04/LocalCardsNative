/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import AppNavigation from './AppNavigation';
import Auth from './Auth';
import auth from '@react-native-firebase/auth';
import LoadingScreen from './src/screens/LoadingScreen'


function App () {
  const [isLoading, setIsLoading] = useState(true);
  //const userToken = false;
  const [userToken, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    setTimeout(()=>{
      setIsLoading(false);
    },500);
    
  //  if (initializing) setInitializing(false);
  }
  
  
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if(isLoading){
    return (
      <LoadingScreen />
    );
  }else
  return (
    <NavigationContainer>
      {userToken ? <AppNavigation /> : <Auth />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  blackAndWhite: {
    backgroundColor: 'gray',
  },
  black: {
    backgroundColor: 'silver',
  },
  floatingNavBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },

});

export default App;


/*
<View style={{flex:1}}>
    
      <View style={styles.content}>
        <Text>Hello G World!</Text>
        <Greeting name="Jojoba-milk-towel" colorSwitch={gray}/>
        <Greeting name="WEEKEKEEKE" colorSwitch={gray}/>
        <Greeting name="Valerie" colorSwitch={gray}/>
        <Button
          onPress={() => setGray(!gray)}
          title="Old film?"
          />
          <View style={styles.halfTop}>
            
          </View>
          <View style={styles.halfBottom}>
            <View style={styles.halfWide}>

            </View>
            <View style={styles.halfWideAgain}>

            </View>
          </View>
      </View>
    <NavBar style={styles.floatingNavBar}/>
    </View>
*/

/*
<StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
      */
