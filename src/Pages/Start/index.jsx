import React from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import DefaltButton from "../../Components/Common/DefaultButton";
import LifeStatus from "../../Components/Common/LifeStatus";
import { useNavigation } from "@react-navigation/native";

export default function Start(){
    const navigation = useNavigation();

    const handleNavAppExplanation = () => {
        navigation.navigate("AppExplanation");
    }

    return(
        <View style={styles.container}>
            <ScrollView showVerterticalScrollIndicator={false}>
                <View style={{alignItems: "center"}}>
                    <Image source={require("../../assets/icons/logo3.png")}
                    style={styles.logo}
                     />
                    <LifeStatus />
                    <Text style={styles.description}>
                        Vamos transformar sua vida {"\n"} em jogo, buscado
                    sempre {"\n"} o melhor nível.
                    </Text>

                    <DefaltButton buttonText={"Continuar"}
                    handlePress={handleNavAppExplanation}
                    widht={250}
                    height={50}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "rgba(21,21,21,0.98)",
    },
    logo:{
        width:300,
        height: 60,
        marginTop:60,
        marginBottom:20,
    },

    description:{
        color: "#FFFFFF",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 60,
    }
});
