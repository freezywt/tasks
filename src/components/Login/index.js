import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

import firebase from '../../Services/firebaseConnection';

export default function Login({ changeStatus }){
  
  const [ type, setType ] = useState('login');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  function handleLogin(){
    
    if(type === 'login'){
      const user = firebase.auth().signInWithEmailAndPassword(email, password)

      .then((user) => {
        changeStatus(user.user.uid)
      })
      .catch((err) => {
        console.log(err);
        alert('Ops... parece que deu algum erro!');
        return;
      })

    }else{
      const user = firebase.auth().createUserWithEmailAndPassword(email, password)

      .then((user) => {
        changeStatus(user.user.uid)
      })
      .catch((err) => {
        console.log(err);
        alert('Erro ao cadastrar');
        return;
      })
    }

  }

  return(
    <SafeAreaView style={styles.container}>
        
        <TextInput 
            placeholder="email@google.com"
            style={styles.input}
            value={email}
            onChangeText={ (text) => setEmail(text) }
        />

        <TextInput 
            placeholder="*********"
            style={styles.input}
            value={password}
            onChangeText={ (text) => setPassword(text) }
        />

        <TouchableOpacity style={[styles.handleLogin, { backgroundColor: type === 'login' ? '#3EA6F2' : '#1714D4'}]} onPress={handleLogin}>
            <Text style={styles.textLogin}>
              { type  === 'login' ? 'Login' : 'Create'}
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => setType( type => type === 'login' ? 'Create' : 'login')}>
            <Text style={{textAlign: 'center'}}>
              {type === 'login' ? 'Create account' : 'I already have an account'}
            </Text>
        </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#F2F6FC',
    paddingHorizontal: 10,
  },
  input: {
      marginBottom: 10,
      backgroundColor: '#FFF',
      borderRadius: 20,
      height: 45,
      padding: 10,
      paddingLeft: 20,
      elevation: 2
  },
  handleLogin: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      height: 45,
      marginBottom: 10
  },
  textLogin: {
    color: '#fff',
    fontSize: 17,
  }
})