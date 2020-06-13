/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function TodoItem({ item, deleteTodo }) {
    return (
        <View>
            <TouchableOpacity
                onPress={() => deleteTodo(item.id)}
                style={styles.item}
            >
                <Text>{item.text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 2.5,
        borderStyle: 'dashed',
        borderRadius: 10,
        backgroundColor: 'coral',
    },
});
