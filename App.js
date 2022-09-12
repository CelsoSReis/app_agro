import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//importa componentes
import Login from "./components/login";
import Cadastro from "./components/cadastro";
import Dashboard from "./components/login/dashboard";
import Home from "./components/home";
import Animais from "./components/home/pages/animais";
import Maquinas from "./components/home/pages/maquinas";
import Agricola from "./components/home/pages/agricola";
import Benfeitorias from "./components/home/pages/benfeitorias";
import Relatorios from "./components/home/pages/relatorios";

//componente/ Variável responsável por definir rotas
const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component = { Login } options={{ headerShown: false }} />
        <Stack.Screen name="Cadastrar" component = { Cadastro } />
        <Stack.Screen name="Dashboard" component = { Dashboard } />
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