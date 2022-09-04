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
    //Botão
    botao: {
        marginTop:35,
        marginBottom: 35,
        width: 240,
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
    }
});
export default styles;