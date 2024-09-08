import React from 'react';

import { StyleSheet, Text, View, Pressable } from 'react-native';

const styles = StyleSheet.create({
    centeredText: {
        color: "cyan",
        fontSize: 100,
        textAlignVertical: "center",
        textAlign: "center"
    },

    textStyle: {
        color: "cyan",
        fontSize: 100
    },

    centeredView: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const Contador = () => {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <Pressable onPress={() => setCount(0)}>
                <Text style={styles.centeredText}>Reset</Text>
            </Pressable>

            <View style={styles.centeredView}>

                <Pressable onPress={() => setCount(prev => prev + 1)}>
                    <Text style={styles.textStyle}>+</Text>
                </Pressable>

                <Pressable onPress={() => { if (count - 1 < 0) { return }; setCount(prev => prev - 1); }}>
                    <Text style={styles.textStyle}>-</Text>
                </Pressable>

            </View>

            <Pressable onPress={() => setCount(prev => prev + 1)}>
                <Text style={styles.centeredText}>{`${count}`}</Text>
            </Pressable >
        </>
    );
}

export default Contador