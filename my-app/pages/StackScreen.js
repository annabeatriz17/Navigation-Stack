import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default function StackScreen( { navigation } ) {
    return (
        <View styles={styles.container}>
            <Button title= "Ir para outra tela" onPress={() => navigation.navigate("Stack 2")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
