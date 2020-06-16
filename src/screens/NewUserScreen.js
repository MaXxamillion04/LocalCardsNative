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

var gS = require('../bits/GlobalStyles');

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {OutlinedTextField} from 'react-native-material-textfield';
import functions from '@react-native-firebase/functions';
import auth from '@react-native-firebase/auth';


export function NewUserScreen({ navigation }) {
    const [values, setValues] = useState({
        name: 'MaRX',
        email: 'MaXxamillion04@gmail.com',
        password: 'qwerty',
        passwordVerify: 'qwerty',
        nameError: '',
        emailError: '',
        passwordError: '',
        passwordVerifyError: '',
      });
    
      const submitSignUp = async e => {
        e.preventDefault();
    
        //console.log(e);
        const valid= await validateInfo();
    
        console.log(valid);
    
        if (valid) {
          console.log("we're in");
          
          //await functions().httpsCallable("createUser");
          auth().createUserWithEmailAndPassword(            
            values.email, values.password, values.name
            )
          
            .then((user)=> {
              console.log(user);
              
              setValues({
                ...values,
                successMessage: 'Successfully Created Account! Please sign in',
              });
              setTimeout(() => {
              navigation.push("Login");
            }, 1000);
            })
            .catch( error => {
              if (error.code === 'auth/invalid-email') {
                setValues({
                  ...values,
                  emailError: 'Email Invalid'
                });
                console.log('No account with this address!');
              }else if(error.code === 'auth/email-already-in-use'){
                setValues({
                  ...values,
                  emailError: 'There is already an account with this email address!',
                });
                

              }else{
              //alert(error);
              console.log(error);
              }
            });
            
        }
      };
    
      async function validateInfo () {
        const emailRegex = /\S+@\S+\.\S+/;
    
        const badStuff = /[\]\[\/()<>,~`!#$%^&*]/;
        var ret = true;
        //const fakeEmail="klepto@geeg.com";
        var nameErr=values.nameError;
        var emailErr=values.emailError;
        var passwordErr=values.passwordError;
    

        if(values.name.length < 3){
          nameErr="Name must be 3 characters long or more";
          ret = false;
        }else{
          nameErr="";
        }
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
        } else if(values.password != values.passwordVerify){
            passwordErr="Password confirmation must match!";

        }else{
          passwordErr='';
        }
    
        setValues({
          ...values,
          nameError: nameErr,
          emailError: emailErr,
          passwordError: passwordErr,
        });
    
        return ret;
      };
    
      const handleInputChange = (name, value) => {
        setValues({...values, [name]: value});
      };
    
      return (
        <View>
          <Text>Login Here!</Text>
          <View style={gS.Container}>
            <OutlinedTextField
              value={values.name}
              onChangeText={name=> handleInputChange('name', name)}
              label="Display Name"
              style={gS.TextField}
              error={values.nameError}
            />
            <OutlinedTextField
              value={values.email}
              onChangeText={email => handleInputChange('email', email)}
              label="email"
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
            <OutlinedTextField
              value={values.passwordVerify}
              onChangeText={passwordVerify => handleInputChange('passwordVerify', passwordVerify)}
              label="Confirm Password"
              secureTextEntry
              error={values.passwordVerifyError}
            />
    
            <Button title="Sign Up" onPress={submitSignUp} />
            <View />
            <Text>Already have an account?</Text>
            <Button
              title="Login"
              onPress={() => {
                navigation.navigate('Login');
              }}
            />
          </View>
        </View>
      );
}

 export default NewUserScreen;