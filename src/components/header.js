/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todo List</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: 'coral',
        alignSelf: 'stretch',
        justifyContent: 'center',
    },

    title: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
});
