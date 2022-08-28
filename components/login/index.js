import React from "react";
import{View, Text, StyleSheet} from 'react-native';

//Importando componentes
import Topo from '../cabecalho';

export default function Login(){
    return(
        <View style={styles.container}>
            <Topo />
            <Text style={styles.texto}>Login</Text>
        </View>
    );
}
const styles = StyleSheet.create ({
    container: {
      flex: 1,
      backgroundColor: '#006400',
      alignItems: 'center',
    },
    texto:{
        fontSize:20,
        color: '#fff',
        textAlign: 'center',
    }
});
  