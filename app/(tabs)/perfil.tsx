import React from 'react';

import { Alert, Button, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const styles2 = StyleSheet.create({
    viewStyles: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textStyles: {
        backgroundColor: 'black',
        color: "white",
        fontSize: 50,
        padding: 40,
        margin: 40,
        textAlignVertical: "center",
        textAlign: "center",
        borderRadius: 20
    },
})

const Perfil = () => {
    const [nombre, setNombre] = React.useState("Nombre");
    const [apellido] = React.useState("Apellido");
    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <View style={styles2.viewStyles} >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TextInput onChangeText={setNombre} value={nombre} />

                        <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Guardar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Button title="Cambiar nombre" onPress={() => setModalVisible(true)}></Button>

            <Text style={styles2.textStyles}>{`${nombre}`}</Text>
            <Text style={styles2.textStyles}>{`${apellido}`}</Text>
        </View>
    );
}

export default Perfil

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        height: 200,
        width: 300,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});