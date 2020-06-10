import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
//spinning loading logo image

import { useLinkProps } from '@react-navigation/native';


export default function LoadingScreen({ navigation }){

    //const [initializing, setInitializing] = useState(true);
   // const [userToken, setUser] = useState();

    return(
        <View style={{width:'100%', height:'100%'}}>
            <Text>Loading...</Text>
            <Text>{1/*spinning loading logo*/}</Text>
        </View>
    );
}

