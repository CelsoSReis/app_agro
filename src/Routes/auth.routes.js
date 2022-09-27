import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//importação de componentes
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

//componente/ Variável responsável pela navegação - rotas
const AuthStack = createStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
            <AuthStack.Screen name="SignUp" component={SignUp} options={{
                headerStyle:{backgroundColor: 'green'},
                headerTintColor: '#fff',
                headerBackTitleVisible: false,
                headerTitle: 'Voltar'
                }}/>
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;