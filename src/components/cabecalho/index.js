import React from 'react';
import {View, Image} from 'react-native';

// importa estilos
import styles from './style';
// importa imagens
import logo from '../../assets/logo.png';

export default function Topo(){
    return (
        <View style={styles.barraInicio}>
            <Image source={logo} style={styles.img}/>        
        </View>
    );
}
