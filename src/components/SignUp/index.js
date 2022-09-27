import React, {useState, useContext} from "react";
import{View, Button, Pressable, Text, Image, ImageBackground, TextInput, StatusBar} from 'react-native';

//cadastro usuário
import { AuthContext } from '../../Contexts/auth';

//Importando componentes
import Topo from '../cabecalho';

//Importação de estilos
import styles from './style';

//imagens
import icoEntrar from './imgLogin/entrar.png';
import imgFundo from './imgLogin/fundo.png';
import { color } from "react-native-reanimated";

export default function SignUp(props) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const { cadastrar } =  useContext(AuthContext);

    function handleCadastrar() {
        cadastrar(email, password, nome);
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
                        <Text style={ styles.textInputLogin }>Nome</Text>
                        <TextInput style = { styles.inputUsuario } value={nome} onChangeText={ (Text) => setNome(Text) } />
                    </View>
                    <View>
                        <Text style={ styles.textInputLogin }>Usuário </Text>
                        <TextInput style = { styles.inputSenha } value={email} onChangeText={ (Text) => setEmail(Text) }/>
                    </View>
                    <View>
                        <Text style={ styles.textInputLogin }>Senha </Text>
                        <TextInput style = { styles.inputSenha } value={password} onChangeText={ (Text) => setPassword(Text) }/>
                    </View>
                    <View>
                        <Pressable style={ styles.botao } onPress = { handleCadastrar }>
                            <Image style={ styles.iconBotao } source={icoEntrar}/>
                            <Text style={ styles.textoBotao }>Cadastrar</Text>
                        </Pressable>
                    </View>
                </View>

            </View>
        </ImageBackground>
    );
};