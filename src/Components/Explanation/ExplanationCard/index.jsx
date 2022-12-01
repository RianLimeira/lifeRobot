import React from "react";
import {View, Text, StyleSheet, Image} from "react-native"
//Card com as infromações da tela
export default function ExplanationCard(){
    return(
        <View style={styles.container}>
         <Text style={styles.title}>
            Através desse APP voce vai consolidar {"\n"} 4 hábitos de áreas
            fundamentais:
         </Text>

         <View style={styles.explanationContainer}>
            <Image source={require("../../../assets/icons/educationIcon.png")}
            style={styles.icon}
            />
            {/* descrição para icone imagem inserida */}
            <Text style={styles.description}>
                <Text style={styles.mind}>
                    Mente: 
                    <Text>
                        Hábitos para melhorar sua inteligencia/sabedoria
                    </Text>
                </Text>
            </Text>
         </View>


         <View style={styles.explanationContainer}>
            <Image source={require("../../../assets/icons/moneyIcon.png")}
            style={styles.icon}
            />
            {/* descrição para icone imagem inserida */}
            <Text style={styles.description}>
                <Text style={styles.money}>
                    Finanças: 
                    <Text>
                        Hábitos para melhorar seu controle financeiro
                    </Text>
                </Text>
            </Text>
         </View>


         <View style={styles.explanationContainer}>
            <Image source={require("../../../assets/icons/bodyIcon.png")}
            style={styles.icon}
            />
            {/* descrição para icone imagem inserida */}
            <Text style={styles.description}>
                <Text style={styles.body}>
                    Saúde: 
                    <Text>
                        Hábitos para melhorar sua saúde
                    </Text>
                </Text>
            </Text>
         </View>

         <View style={styles.explanationContainer}>
            <Image source={require("../../../assets/icons/funIcon.png")}
            style={styles.icon}
            />
            {/* descrição para icone imagem inserida */}
            <Text style={styles.description}>
                <Text style={styles.fun}>
                    Humor: 
                    <Text>
                        Hábitos para melhorar seu humor e felicidade
                    </Text>
                </Text>
            </Text>
         </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#010101",
        width:350,
        borderRadius:25,
        padding:30, 
    },
    title:{
        fontWeight: "bold",
        color:"#fff",
        textAlign:"center",
        fontSize:16,
    },
    explanationContainer:{
        flexDirection: "row",
        marginTop: 30,
    },
    icon:{
        width:40,
        height:40,
        marginRight:5,
    },
    mind:{
        color:"#90B7F3",
        fontWeight:"bold",
    },
    money:{
        color:"#85BB65",
        fontWeight:"bold",
    },
    body:{
        color:"#FF0044",
        fontWeight:"bold",
    },
    fun:{
        color:"#FE7F23",
        fontWeight:"bold",
    },
    description:{
        color:"#fff",
    },
});