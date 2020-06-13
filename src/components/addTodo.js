/* eslint-disable prettier/prettier */
import React, { useState, useRef } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';

export default function AddTodo({ handleNewTodo }) {
    const [text, setText] = useState('');
    const myInput = useRef();

    const changeHandle = (val) => {
        setText(val);
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Novo todo..."
                placeholderTextColor="white"
                onChangeText={changeHandle}
                ref={myInput}
            />
            <TouchableOpacity
                onPress={() => {
                    handleNewTodo(text);
                }}
                style={styles.button}
            >
                <Text style={styles.BtnText}> Adicionar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        color: 'white',
    },
    button: {
        borderRadius: 5,
        alignSelf: 'center',
        textAlign: 'center',
        margin: 10,
        backgroundColor: 'white',
        width: 200,
        padding: 20,
    },
    BtnText: {
        alignSelf: 'center',
    },
});
