import React from "react";
import { View, StyleSheet } from "react-native";

import Lottie from "lottie-react-native"

export default function LifeStatus(){
/*
    100-MAXIMO
    50-MÉDIO
    25-BAIXO
    00-CURTO (GAME OVER)
    No robot, temos primeiro Felicidade e depois Saúde xx-xx
*/
    return(
        <View style={styles.container}>
            <Lottie source={require("../../../assets/education/education-100.json")}
            autoPlay
            loop
            style={styles.educacaoAnimacao}/>
            <Lottie source={require("../../../assets/money/money-100.json")}
            autoPlay
            loop
            style={styles.financasAnimacao}/>
            <Lottie source={require("../../../assets/robot/robot-100-100.json")}
            autoPlay
            loop
            style={styles.roboAnimacao}/>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        width:300,
        height:300,
    },
    roboAnimacao:{
        width:190,
        marginTop:30,
        marginLeft:25,
    },
    educacaoAnimacao:{
        width:100,
        marginTop:50,
        marginLeft:5,
        position: "absolute"
    },
    financasAnimacao:{
        width:100,
        marginTop:50,
        marginLeft:95,
        position: "absolute"
    },
});