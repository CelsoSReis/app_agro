import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//importa componentes
import Login from "./components/login";
import Cadastro from "./components/Cadastro";
import Home from "./components/home";

//componente/ Variável responsável por definir rotas
const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component = { Login } options={{ headerShown: false }} />
        <Stack.Screen name="Cadastrar" component = { Cadastro } />
        <Stack.Screen name="Home" component = { Home } />
      </Stack.Navigator>
   </NavigationContainer>
  )
};