import React from "react";
import {Text, Image, Pressable, View, ScrollView} from "react-native";

//import estilos
import styles from './style.js';

export default function Animais (props) {
    return(
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <View style={styles.header}>
                        
                    </View>
                    <View style={{flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>

                        <Pressable style={styles.homeBotoes} onPress = { ()=>{props.navigation.navigate( 'Animais' )} } >
                            
                            <Text>Animais</Text>
                        </Pressable>
                    
                        <Pressable style={styles.homeBotoes} onPress = { ()=>{props.navigation.navigate( 'Maquinas' )} }>
                            
                            <Text>Máquinas</Text>
                        </Pressable>

                        <Pressable style={styles.homeBotoes}onPress = { ()=>{props.navigation.navigate( 'Benfeitorias' )} } >
                            
                            <Text>Benfeitorias</Text>
                        </Pressable>

                        <Pressable style={styles.homeBotoes} onPress = { ()=>{props.navigation.navigate( 'Relatorios' )} } >
                            
                            <Text>Relatórios</Text>
                        </Pressable>
                    
                </View>
                
            </ScrollView>
        </View>    
    );
};