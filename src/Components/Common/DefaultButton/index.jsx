import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function DefaltButton({
    buttonText,
    handlePress,
    widht,
    height,
}) {
    return(
        <TouchableOpacity
        style={[styles.button, {width: widht, height: height}]}

        activeOpacity={0.7}
        onPress={handlePress}
        >
            <Text style={styles.buttonText}>
                {buttonText}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        alignItems: "center",
        justifyContent:"center",
        borderWidth:1,
        borderColor:"#FFFFFF",
        borderRadius:10,
        marginBottom:20,
    },
    buttonText:{
        color:"#FFFFFF",
        fontWeight: "bold",
        fontSize: 20,
    },
});