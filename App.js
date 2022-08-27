import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import logo from './assets/logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.img}/>
      <Text style={styles.texto}>Gestão Rural!</Text>
      <Text style={styles.rodape}>Desenvolvido por Celso Reis</Text>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006400',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize: 25,
    marginBottom: 200,
    color: '#fff'
  },
  img:{
    width: 210,
    height: 65,
    marginBottom: 200
  },
  rodape:{
    color: '#fff',
  }
});
