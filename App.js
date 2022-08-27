import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import logo from './assets/logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.barraInicio}>
        <Image source={logo} style={styles.img}/>        
      </View>
      <Text style={styles.texto}>Gestão Rural!</Text>
      <Text style={styles.rodape}>Desenvolvido por Celso Reis</Text>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#946400',
  },
  texto:{
    fontSize: 25,
    marginBottom: 200,
    color: '#fff'
  },
  img:{
    width: 185,
    height: 55,
    marginBottom: 20,
    marginTop: 35,
  },
  rodape:{
    color: '#fff',
  },
  barraInicio:{
    height: 100,
    backgroundColor: '#006400',
    alignItems: 'center',
  }
});
