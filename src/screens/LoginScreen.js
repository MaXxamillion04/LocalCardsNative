import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
//import {TextField } from '@material-ui/core/TextField'
import {OutlinedTextField} from 'react-native-material-textfield';
import auth from '@react-native-firebase/auth'

var gS = require('../bits/GlobalStyles');

//import {globalStyles, authStyles} from './../bits/GlobalStyles';

export function LoginScreen({navigation}) {
  const [values, setValues] = useState({
    email: '',
    password: '',
    remember: false,
    emailError: '',
    passwordError: '',
  });

  const submitLogin = async e => {
    e.preventDefault();

    //console.log(e);
    const valid= await validateLogin();

    console.log(valid);

    if (valid) {
      console.log("we're in");
      
      auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then(user => {
          console.log(user);
        })
        .catch(error => {
          switch(error.code) {
          case 'auth/invalid-email':
            setValues({
              ...values,
              emailError: 'Please put in a valid email',
            });
            break;
          case 'auth/user-not-found':
            setValues({
              ...values,
              emailError: 'There is no account at this email address',
            });
            break;
          case 'auth/wrong-password':
            setValues({
              ...values,
              passwordError: 'Incorrect Password!',
            });
            default:
              console.log("other error");
          
          }
          //alert(error);
          console.log(error);
          
        });
        
    }
  };

  async function validateLogin () {
    const emailRegex = /\S+@\S+\.\S+/;
    //const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const badStuff = /[\]\[\/()<>,~`!#$%^&*]/;
    var ret = true;
    //const fakeEmail="klepto@geeg.com";

    var emailErr=values.emailError;
    var passwordErr=values.passwordError;

    //console.log(emailRegex);
    if (values.email.length<=3 || !emailRegex.test(values.email.toLowerCase())) {
      console.log("bad email");

        emailErr= 'Please use a valid email address',

      ret = false;
    } else {
        emailErr='';
    }
    if (values.password.length < 5) {
        passwordErr= 'Password must be 5 character long or more';
      
      ret = false;
    } else {
      passwordErr='';
    }

    setValues({
      ...values,
      emailError: emailErr,
      passwordError: passwordErr,
    });

    return ret;
  };

  const handleInputChange = (name, value) => {
    setValues({...values, [name]: value});
  };

  return (
    <SafeAreaView>
      <Text>Login Here!</Text>
      <View style={gS.Container}>
        <OutlinedTextField
          value={values.email}
          onChangeText={email => handleInputChange('email', email)}
          label="email"
          autoFocus
          style={gS.TextField}
          error={values.emailError}
        />
        <OutlinedTextField
          value={values.password}
          onChangeText={password => handleInputChange('password', password)}
          label="password"
          secureTextEntry
          error={values.passwordError}
        />

        <Button title="Login" onPress={submitLogin} />
        <View />
        <Text> Don't have an account? </Text>
        <Button
          title="Sign Up!"
          onPress={() => {
            navigation.navigate('Sign-Up');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
