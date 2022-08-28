import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

//importa componentes
import Topo from './components/cabecalho';
import Login from './components/login';

export default function App() {
  return (
    <View style={styles.container}>
      <Topo />
      <Login />
      <Text style={styles.texto}>Gestão Rural!</Text>
      <Text style={styles.rodape}>Desenvolvido por Celso Reis</Text>
    </View>
    );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#946400',
  },
  texto:{
    fontSize: 25,
    marginBottom: 200,
    color: '#fff',
  },
  rodape:{
    color: '#fff',
  },});
