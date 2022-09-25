import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//firebase
import firebase from './src/services/firebaseConnection';

//importa componentes
import Login from "./src/components/login";
import Cadastro from "./src/components/cadastro";
import Home from "./src/components/home";
import Animais from "./src/components/home/pages/animais";
import Maquinas from "./src/components/home/pages/maquinas";
import Agricola from "./src/components/home/pages/agricola";
import Benfeitorias from "./src/components/home/pages/benfeitorias";
import Relatorios from "./src/components/home/pages/relatorios";

//componente/ Variável responsável por definir rotas
const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component = { Login } options={{ headerShown: false }} />
        <Stack.Screen name="Cadastrar" component = { Cadastro } />
        <Stack.Screen name="Home" component = { Home } />
        <Stack.Screen name="Animais" component={ Animais } />
        <Stack.Screen name="Maquinas" component={ Maquinas } />
        <Stack.Screen name="Agricola" component={ Agricola } />
        <Stack.Screen name="Benfeitorias" component={ Benfeitorias } />
        <Stack.Screen name="Relatorios" component={ Relatorios } />
      </Stack.Navigator>
   </NavigationContainer>
  )
};