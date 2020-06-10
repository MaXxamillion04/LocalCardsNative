import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, StatusBar, Colors } from 'react-native';

/*import HomeIcon from "@material-ui/icons/Home";
import ForumIcon from "@material-ui/icons/Forum";
import SettingsIcon from "@material-ui/icons/Settings";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
*/
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export function NavBar({numUnreadMessages}) {
  //const iconSize=22;
  const [iconSize, setIconSize] = useState(26);
  const upSize = () => {
    setIconSize(iconSize + 2);
    console.log(iconSize);
  };

  function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }



  return (
    <>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    <View style={styles.container}>
      <View style={styles.alignLeft}>
        <Text style={styles.Banner}>
          "Local Cards"
          {Icon.hasIcon('home') ? 'PBJ' : 'NoJ'}
        </Text>
        <Text>  </Text>
        <TouchableOpacity
          onPress={() => upSize}
          style={iconButtonStyle}>
          <Icon name="info" size={iconSize} style={styles.NavBarIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.alignRight}>
        {/*<Button
                    title="home"
                        onPress={()=>
                        console.log("Home")
                    }>
                        
                </Button>*/}

        <TouchableOpacity
          onPress={() => upSize}
          style={iconButtonStyle}>
          <Icon name="home" size={iconSize} style={styles.NavBarIcon} />
        </TouchableOpacity>
        <Text>  </Text>

        <TouchableOpacity
          onPress={() => upSize}
          style={iconButtonStyle}>
          <Icon name="forum" size={iconSize} style={styles.NavBarIcon} />
        </TouchableOpacity>
        <Text>  </Text>
        <TouchableOpacity
          onPress={() => upSize}
          style={iconButtonStyle}>
          <Icon name="settings" size={iconSize} style={styles.NavBarIcon} />
        </TouchableOpacity>
        <Text>  </Text>
        <TouchableOpacity
          onPress={() => upSize}
          style={iconButtonStyle}>
          <Icon name="exit-to-app" size={iconSize} style={styles.NavBarIcon} />
        </TouchableOpacity>
        <Text>  </Text>
      </View>
    </View>
    </>
    
  );
}

  const iconButtonStyle=()=> {
    return {
        ...styles.iconButton,
        width: {iconSize},
    height: {iconSize},
    backgroundColor: '#fff',
    borderRadius: (iconSize+10),
    }
}

const styles = StyleSheet.create({
    Banner : {

        color: 'white',

    },
    container: {
        flexDirection: 'row', 
        backgroundColor: 'black',
        color: 'white',

    },
  alignLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  alignRight: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginLeft: 'auto',
  },
  NavBarIcon: {
    fontFamily: 'MaterialIcons',
    color: '#ffffff',
//    color: '#afafaf'
  },
  iconButton: {
    borderWidth: 0,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    
  }
});
