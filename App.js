import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//importa componentes
import Login from './components/login';
import Cadastro from './components/Cadastro';

//componente/ Variável responsável por definir rotas
const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Login" component = { Login }/>
        <Tabs.Screen name="Cadastro" component = { Cadastro } />
      </Tabs.Navigator>
    </NavigationContainer>
    
    );
}