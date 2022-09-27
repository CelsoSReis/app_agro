import React, { useState, useContext } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Button, Pressable, Text, Image, ImageBackground, TextInput, StatusBar } from 'react-native';
import { AuthContext } from '../../Contexts/auth';

//Importando componentes
import Topo from '../cabecalho';

//Importação de estilos
import styles from './style';

//imagens
import icoEntrar from './imgLogin/entrar.png';
import imgFundo from './imgLogin/fundo.png';
import { color } from "react-native-reanimated";

export default function SignIn(props) {
    const navigation = useNavigation();

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');


    function handleLogin() {
        
    }

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
                        <TextInput style = { styles.inputUsuario } value={usuario} onChangeText={ (Text) => setUsuario(Text) } />
                    </View>
                    <View>
                        <Text style={ styles.textInputLogin }>Senha </Text>
                        <TextInput style = { styles.inputSenha } value={senha} onChangeText={ (Text) => setSenha(Text) }/>
                    </View>
                    <View>
                        <Pressable style={ styles.botao } onPress = {handleLogin} >
                            <Image style={ styles.iconBotao } source={icoEntrar}/>
                            <Text style={ styles.textoBotao }>Entrar</Text>
                        </Pressable>
                    </View>
                </View>

                
                <View style={styles.button}>    
                    <Button 
                        title="Cadastrar"
                        onPress = { ()=>{props.navigation.navigate( 'SignUp' )} }
                    />
                </View>

            </View>
        </ImageBackground>
    );
};