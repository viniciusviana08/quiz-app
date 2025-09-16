import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";



export default function Exemplo(){

    const [contador, setContador] = useState(0);

    return(
        <View>
            <Text>Contador: {contador}</Text>
            <Button title="Incrementar" onPress={() => setContador(contador + 1)} />
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        marginTop: 20,
    },
});

