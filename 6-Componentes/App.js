import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Modal, StatusBar, Button, Alert} from 'react-native';

const crearAlerta = () => Alert.alert(
  '¡Alerta!',
   'Esta es una prueba de alerta',
   [
    {
      text: 'Cancelar',
      onPress: () => {},
      style: 'cancel'
   },
   {
      text: 'Aceptar',
      onPress: () => console.log('Aceptado'),
   }
  ],
  {cancelable: false},
  )

export default function App() {

  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        >
          <View style={styles.center}>
            <View style={styles.content}>
              <Text>Soy un modal</Text>
              <Button title="Cerrar Modal" onPress={ () => setModal(!modal) }/>
            </View>
          </View>
        </Modal>

      <Text>Agregando imagenes</Text>
      
      <ImageBackground
      style={styles.photo}
      source={{ uri:'http://placekitten.com/200/300'}}>
        <Text>Probando el background</Text>
      </ImageBackground>
      <Button title="Abrir Modal" onPress={ () => setModal(!modal) }/>
      <Button title="Abrir Alerta" onPress={crearAlerta}/>
      <StatusBar style="auto" />
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
  photo: {
    width: 200,
    height: 300
  },
  center: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  content:{
    backgroundColor: '#eee',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    margin: 60
  },
});
