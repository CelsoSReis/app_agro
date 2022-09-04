import React from "react";
import{View, Button} from 'react-native';

//Importando componentes
import Topo from '../cabecalho';

//Importação de estilos
import styles from './style';

export default function Login (props) {
    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Topo />
            </View>
            
            <View style={styles.button}>
                <Button 
                    title="Entrar"
                    onPress = { ()=>{props.navigation.navigate( 'Home' )} }
                />
            </View>

        </View>
    );
};