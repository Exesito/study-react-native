import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Texto = ({style}) => {
  const [texto, setTexto] = useState("Hola Mundo!");
  const actualizaTexto = () => {
    setTexto('Chao Mundo')
  }

  return (
    <Text style={ [styles.text, style] } onPress={actualizaTexto}>{ texto }</Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>

      <Texto style={styles.red}/>
      <Texto style={styles.blue}/>
      <Texto style={styles.green}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: 'white',
    height: 100,
    width: 100
  },
  red: {
    backgroundColor: 'red'
  },
  blue: {
     backgroundColor: 'blue'
  },
  green: {
    backgroundColor: 'green'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
