import React from 'react'
import {View, Text, Button} from 'react-native'
import auth from "@react-native-firebase/auth"
const globalStyles = require('../bits/GlobalStyles');

export function SettingsScreen({ navigation }) {

    const signOut = () =>{
        auth().signOut();

    };

    return(
        <View>
            <Text styles={globalStyles.H1}> Edit Settings Here!</Text>

            <Button
            onPress={signOut}
            title="Sign Out"></Button>
        </View>
    );
}

export default SettingsScreen;
