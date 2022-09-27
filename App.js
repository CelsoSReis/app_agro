import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/Contexts/auth';


//firebase
import firebase from './src/services/firebaseConnection';

//importa componentes
import Routes from './src/Routes';
//import Animais from "./src/components/rhome/pages/animais";
//import Maquinas from "./src/components/rhome/pages/maquinas";
//import Agricola from "./src/components/rhome/pages/agricola";
//import Benfeitorias from "./src/components/rhome/pages/benfeitorias";
//import Relatorios from "./src/components/rhome/pages/relatorios";

export default function App () {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
    /*<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Animais" component={ Animais } />
        <Stack.Screen name="Maquinas" component={ Maquinas } />
        <Stack.Screen name="Agricola" component={ Agricola } />
        <Stack.Screen name="Benfeitorias" component={ Benfeitorias } />
        <Stack.Screen name="Relatorios" component={ Relatorios } />
      </Stack.Navigator>
   </NavigationContainer>*/
  );
}