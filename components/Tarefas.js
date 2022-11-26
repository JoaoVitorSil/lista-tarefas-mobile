import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, FlatList, View, Text} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { db, collection, getDocs} from '../firebase';

export default function Tarefas() {
  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    async function getTasks(db) {
      const tasksCol = collection(db, 'tasks');
      const tasksSnapshot = await getDocs(tasksCol);
      const tasks = tasksSnapshot.docs.map(doc => doc.data());
      console.log(tasks)
      setTasks(tasks);
    }
    getTasks(db);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.buttons}>
        <FontAwesome5 name="check" size={30} color="green" onPress={() => navigation.navigate('Add')}/>
        <FontAwesome5 name="times" size={30} color="red" onPress={() => navigation.navigate('Add')}/>
        
      </View>
    </TouchableOpacity>
  );

  return (
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#bcbcbc',
    padding: 10,
    margin: 10,
    borderRadius: 10
  },
  header:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttons:{
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
});