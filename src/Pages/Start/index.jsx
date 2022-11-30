import React from "react";
import { View, ScrollView, Text, Image } from "react-native";

export default function Start(){
    return(
        <View>
            <ScrollView showVerterticalScrollIndicator={false}>
                <View>
                    <Image source={require("../../assets/icons/logo3.png")}></Image>
                    <Text>Vamos transformar sua vida {"/n"} em jogo, buscado
                    sempre {"/n"} o melhor nível.</Text>
                </View>
            </ScrollView>
        </View>
    )
}