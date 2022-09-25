import React from "react";
import{View, Button, Pressable, Text, Image, ImageBackground, TextInput, StatusBar} from 'react-native';

//Importando componentes
import Topo from '../cabecalho';

//Importação de estilos
import styles from './style';

//imagens
import icoEntrar from './imgLogin/entrar.png';
import imgFundo from './imgLogin/fundo.png';
import { color } from "react-native-reanimated";

export default function Login (props) {
    return (
        <ImageBackground source={imgFundo} style={styles.container}>
            <View>
                <StatusBar backgroundColor="green" Color="#fff" />
                <View style={styles.header}>
                    <Topo />
                </View>
                
                <View style= { styles.boxInputLogin }>
                    <View>
                        <Text style={ styles.textInputLogin }>Usuário</Text>
                        <TextInput style = { styles.inputUsuario } />
                    </View>
                    <View>
                        <Text style={ styles.textInputLogin }>Senha </Text>
                        <TextInput style = { styles.inputSenha }/>
                    </View>
                    <View>
                        <Pressable style={ styles.botao } onPress = { ()=>{props.navigation.navigate( 'Home' )} }>
                            <Image style={ styles.iconBotao } source={icoEntrar}/>
                            <Text style={ styles.textoBotao }>Entrar</Text>
                        </Pressable>
                    </View>
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