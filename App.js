import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [name, setName ] = useState('Ahmed');
  const [age,setAge] = useState('30');
  const clickHandler = () =>{
    setName('Ahmed Hammad Shindy');
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText} > Hello Shindy!</Text>
        <Text>Lorem ipsum <Text style={styles.boldText}>dolor</Text> sit amet.</Text>
        <Text>Lorem ipsum dolor sit amet.</Text>
        <Text>Lorem ipsum dolor sit amet.</Text>
      </View>

      <View>
        <Text style= {styles.boldText}>{name}</Text>
        <Button title='print full name' onPress={clickHandler }  />

      </View>
      <Text>Enter name:</Text>
      <TextInput 
        placeholder='e.g. 99' 
        style={styles.input}
        onChangeText={(value) => setAge(value)} />

      <Text>Enter age:</Text>
      <TextInput 
        placeholder='e.g. John Doe' 
        style={styles.input}
        onChangeText={(value) => setName(value)} />
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding:20,
  },
  boldText: {
     fontWeight: 'bold'
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  },
  input: {
    borderWidth:1,
    borderColor:'#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});


// npm start