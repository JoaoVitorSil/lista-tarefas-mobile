import React from 'react'
import { ActivityIndicator, TouchableOpacity, StyleSheet, View, Text, TextInput } from 'react-native';

import { db, collection, addDoc } from '../firebase';

import uuid from 'react-native-uuid';

export default function Add() {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [showLoader, setShowLoader] = React.useState(false);

  const saveItem = async () => {
    setShowLoader(true);
    if(title) {
      try {
        const task = {
          id: uuid.v4(),
          title: title,
          description: description,
        };
        const docRef = await addDoc(collection(db, "tasks"), task);
        setTitle('');
        setDescription('');
        console.log("Document written with ID: ", docRef.id);
      } catch(e) {
        console.error("Error adding document: ", e);
      }
    }
    setShowLoader(false);
  }

  return (
    <View style={styles.container}>
        <Text style={styles.label}>Titulo</Text>
        <TextInput style={styles.input} onChangeText={setTitle} value={title} />
        <Text style={styles.label}>Descrição</Text>
        <TextInput style={styles.input} onChangeText={setDescription} value={description} multiline={true} />
        <TouchableOpacity
          style={styles.button}
          onPress={saveItem}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <ActivityIndicator animating={showLoader}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 20,
    marginLeft: 20,
  },
  input: {
    backgroundColor: '#DCDCDC',
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#1E90FF',
    alignSelf: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText:{
    fontSize: 15,
    color: 'white'
  }
});