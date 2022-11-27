import React, { useState } from 'react'
import { ActivityIndicator, TouchableOpacity, StyleSheet, View, Text, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { db, collection, addDoc, doc, updateDoc } from '../firebase';


export default function Add({navigation}) {
  const [title, setTitle] = React.useState('');
  const [showLoader, setShowLoader] = React.useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Casa', value: 'casa'},
    {label: 'Trabalho', value: 'trabalho'},
    {label: 'Escola', value: 'escola'}
  ]);

  const saveItem = async () => {
    setShowLoader(true);
    if(title) {
      try {
        const task = {
          title: title,
          category: value,
          status: false,
        };
        const docRef = await addDoc(collection(db, "tasks"), task);
        updateDoc(doc(db, 'tasks',`${docRef.id}`),{id:docRef.id});
        setTitle('');
        setValue(null);
        console.log("Document written with ID: ", docRef.id);
      } catch(e) {
        console.error("Error adding document: ", e);
      }
    }
    setShowLoader(false);
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
        <Text style={styles.label}>Titulo</Text>
        <TextInput style={styles.input} onChangeText={setTitle} value={title} />
        <Text style={styles.label}>Categoria</Text>
        <View style={styles.dropdown}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Selecione uma categoria"
          />
        </View>
        
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
  dropdown:{
    margin: 20,
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