import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Stack2() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem vindo a tela 2</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f652a0",
    },
    text: {
        fontSize: 30,
        color: "white",
    },
});