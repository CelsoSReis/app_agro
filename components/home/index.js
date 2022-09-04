import react from 'react';
import {View, Text} from 'react-native';
//importação de componentes
import Topo from '../cabecalho';
//importação de estilos
import styles from './style';

export default function Home(){
    return(
        <View style={styles.container}>
            <Topo />
            <Text>Home</Text>
        </View>
    );
}