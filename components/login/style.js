import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

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
    },
    //Botão Login
    botao: {
        marginTop:30,
        marginBottom: 35,
        width: 260,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#ff0000',
        borderRadius: 20,
        flexDirection: "row"
    },
    textoBotao:{
        fontSize:18,
        fontWeight: 'bold',
        color: '#fff',
    },
    iconBotao:{
        width: 25,
        height: 25,
        margin: 5
    },

    header:{
        marginTop: 45,
    },
    //BOX INPUT LOGIN
    boxInputLogin:{
        marginVertical:140
    },
    //Login Input
    inputUsuario: {
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#fff',
        borderRadius: 30,
        height: 40,
        width: 260,
        padding: 10,
        margin: 7,
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 17,
    },
    inputSenha:{
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: '#fff',
        height: 40,
        width: 260,
        padding: 10,
        margin: 7,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 17,
    },
    textInputLogin:{
        color: '#fff',
        fontWeight: '500',
    }
});
export default styles;