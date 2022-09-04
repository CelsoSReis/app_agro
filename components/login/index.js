import React from "react";
import{View, Button, Pressable, Text, Image, ImageBackground} from 'react-native';

//Importando componentes
import Topo from '../cabecalho';

//Importação de estilos
import styles from './style';

//imagens
import icoEntrar from './imgLogin/entrar.png';
import imgFundo from './imgLogin/fundo.png';

export default function Login (props) {
    return (
        <ImageBackground source={imgFundo} style={styles.container}>
            <View>                
                <View style={styles.header}>
                    <Topo />
                </View>
                
                <View>
                    <Pressable style={styles.botao} onPress = { ()=>{props.navigation.navigate( 'Home' )} }>
                        <Image style={styles.iconBotao} source={icoEntrar}/>
                        <Text style={styles.textoBotao}>Entrar</Text>
                    </Pressable>
                </View>
                <View style={styles.button}>    
                    <Button 
                        title="Cadastrar"
                        onPress = { ()=>{props.navigation.navigate( 'Cadastrar' )} }
                    />
                </View>

            </View>
        </ImageBackground>
    );
};