import React from 'react';

import { Pressable, StyleSheet, Text, View } from 'react-native';

function TarjetaComponent(props: { mensaje: string }) {
    let [cambiarColor, setColor] = React.useState(true);
    return (
        <Pressable onPress={() => setColor(cambiarColor = !cambiarColor)}>
            <Text style={cambiarColor ? styles.textStyles1 : styles.textStyles2}>{props.mensaje}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    viewStyles: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    viewStyles2: {
        backgroundColor: 'green',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textStyles1: {
        backgroundColor: 'gray',
        color: "white",
        fontSize: 50,
        padding: 40,
        margin: 40,
        textAlignVertical: "center",
        textAlign: "center",
        borderRadius: 20
    },

    textStyles2: {
        backgroundColor: 'black',
        color: "white",
        fontSize: 50,
        padding: 40,
        margin: 40,
        textAlignVertical: "center",
        textAlign: "center",
        borderRadius: 20
    }
})

const Tarjeta = () => {
    return (
        <View style={styles.viewStyles} >
            <TarjetaComponent mensaje={"Tarjeta 1"} />
            <TarjetaComponent mensaje={"Tarjeta 2"} />
            <TarjetaComponent mensaje={"Tarjeta 3"} />
        </View>
    );
}

export default Tarjeta