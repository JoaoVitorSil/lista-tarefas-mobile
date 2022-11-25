import React, { useEffect } from 'react';
import { TouchableOpacity, StyleSheet, FlatList, View, Text} from 'react-native';

import { db, collection, getDocs} from './firebase';

export default function Tarefas() {
  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    async function getTasks(db) {
      const tasksCol = collection(db, 'tasks');
      const tasksSnapshot = await getDocs(tasksCol);
      const tasks = tasksSnapshot.docs.map(doc => doc.data());
      setTasks(tasks);
    }
    getTasks(db);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );

  return (
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
  )
}
