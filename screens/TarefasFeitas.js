
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { StyleSheet, FlatList, View, Text} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { db, collection, getDocs, deleteDoc, doc} from '../firebase';

export default function TarefasFeitas({ navigation }) {
    const [tasks, setTasks] = useState([]);
    const checked = [];
  
    useEffect(() => {
      async function getTasks(db) {
        const tasksCol = collection(db, 'tasks');
        const tasksSnapshot = await getDocs(tasksCol);
        const tasks = tasksSnapshot.docs.map(doc => doc.data() );
        tasks.forEach((task)=>{
          if(task.status){
            checked.push(task)
          }
        });
        setTasks(checked);
      }
      getTasks(db);
    }, [tasks]);
  
    function del (id){
      deleteDoc(doc(db,'tasks',id))
    };
  
    const renderItem = ({ item }) => (
      <View style={styles.card}>
        <View style={styles.headerCard}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.buttons}>
          <FontAwesome5 name="times" size={30} color="red" onPress={() => del(item.id)}/>
          </View>
        </View>
    );
  
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <View style={styles.header}>
                <Text style={styles.titleHeader}>Tarefas Concluidas</Text>
            </View>
        
            <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
  titleHeader: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  header: {
    backgroundColor: '#1E90FF',
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
  },
  card: {
    backgroundColor: '#bcbcbc',
    padding: 10,
    margin: 10,
    borderRadius: 10
  },
  headerCard:{
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