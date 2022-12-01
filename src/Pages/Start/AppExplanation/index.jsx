import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native-gesture-handler";

export default function AppExplanation(){
    //vai para Home com as explicações
    function handleSetShowHome(){
        console.log("Botão proxima pagina clicado")
    }

    //retorna os elementos como HTML estilizados
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.title}>Antes deixe {"\n"}
                    eu te explicar...
                    </Text>
                    <Text style={styles.descriptionCta}>
                        Pronto(a) para subir de nível na vida ?
                    </Text>
                    <Text style={styles.description}>
                    Na proxima tela voce vai pode escolher {"\n"} seus 4
                    hábitos de forma individual
                    </Text>
                    
                    <DefaultButton
                        //aqui dentro vem as configurações do botão pardrão(Comum)
                        buttonText={"Continuar"}
                        handlePress={handleSetShowHome}
                        widht={250}
                        height={50}
                    />
                </View>
            </ScrollView>
        </View>
    );
}
//estilos CSS
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "rgba(21,21,21,0.98)"
    },
    title:{
        fontSize:30,
        fontWeight:"bold",
        color: "#FFF",
        textAlign: "center",
        marginVertical: 40,
    },
    descriptionCta:{
        color: "#FFF",
        fontWeight:"bold",
        fontSize: 16,
        marginTop: 20,
        marginBottom:10,
    },
    description:{
        color: "#FFF",
        textAlign:"center",
        marginBottom:30,
    },
});