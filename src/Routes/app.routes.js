import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//importação de componentes
import Home from '../components/Home';

//componente/ Variável responsável pela navegação - rotas
const AppStack = createStackNavigator();

function AppRoutes(){
    return(
        <AppStack.Navigator>
            <AppStack.Screen name="Home" component={Home} />
        </AppStack.Navigator>
    );
}

export default AppRoutes;