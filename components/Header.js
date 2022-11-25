import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header({navigation}) {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>Minhas Tarefas</Text>
        <FontAwesome5 name="plus" size={30} color="white" onPress={() => navigation.navigate('Add')}/>
    </View>
  )
}
const styles = StyleSheet.create({
    header: {
      backgroundColor: '#1E90FF',
      height: 70,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: 20,
    },
    title: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold'
    },
  });