import React from 'react';
import { View, Text, ScrollView, Pressable, Image, ImageBackground } from 'react-native';

//importação de componentes
import Topo from '../cabecalho';

//importação de estilos
import styles from './style';

//importação de Imagens
import iconAnimais from './assets/iconAnimais.png';
import iconMaquinas from './assets/iconMaquinas.png';
import iconBenfeitorias from './assets/iconBenfeitorias.png';
import iconRelatorios from './assets/iconRelatorios.png';
import imgFundo from '../login/imgLogin/fundo.png'

export default function Home(){
    return(
        <ImageBackground source={imgFundo} style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Topo />
                </View>
                    <View style={{alignItems: 'center'}}>
                    
                    <Pressable style={styles.homeBotoes}>
                        <Image source={ iconAnimais } style={ styles.imgIcons}/>
                        <Text>Animais</Text>
                    </Pressable>
                    
                    <Pressable style={styles.homeBotoes}>
                    <Image source={ iconMaquinas } style={ styles.imgIcons}/>
                        <Text>Máquinas</Text>
                    </Pressable>

                    <Pressable style={styles.homeBotoes}>
                        <Image source={ iconBenfeitorias } style={ styles.imgIcons}/>
                        <Text>Benfeitorias</Text>
                    </Pressable>

                    <Pressable style={styles.homeBotoes}>
                        <Image source={ iconRelatorios } style={ styles.imgIcons}/>
                        <Text>Relatórios</Text>
                    </Pressable>
                    
                </View>
                
            </ScrollView>
        </ImageBackground>
    );
}