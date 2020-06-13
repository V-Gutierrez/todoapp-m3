/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Alert,
    Keyboard,
    TouchableWithoutFeedback,
    ImageBackground,
} from 'react-native';
import Header from './src/components/header';
import TodoItem from './src/components/todoItem';
import AddTodo from './src/components/addTodo';

const App = () => {
    const [todoList, setTodo] = useState([]);

    const PressHandler = (id) => {
        setTodo(todoList.filter((item) => item.id !== id));
    };

    const handleNewTodo = (text) => {
        if (text !== '') {
            setTodo([
                ...todoList,
                { id: Math.random().toString(), text: text },
            ]);
        } else {
            Alert.alert(
                'Sempre há algo a ser feito...',
                'Insira o nome da tarefa para inserir à lista',
                [{ text: 'Entendido' }],
            );
        }
    };

    return (
        <>
            <ImageBackground
                style={{
                    width: null,
                    height: null,
                }}
                source={{
                    uri: 'https://source.unsplash.com/random',
                }}
            >
                <TouchableWithoutFeedback
                    style={styles.background}
                    onPress={() => Keyboard.dismiss()}
                >
                    <View style={styles.container}>
                        <Header />
                        <View style={styles.content}>
                            <AddTodo handleNewTodo={handleNewTodo} />
                            <View style={styles.list}>
                                <FlatList
                                    keyExtractor={(item) => item.id}
                                    data={todoList}
                                    extraData={todoList}
                                    renderItem={({ item }) => (
                                        <TodoItem
                                            deleteTodo={PressHandler}
                                            item={item}
                                        />
                                    )}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff70',
        minHeight: 800,
    },
    doText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        padding: 40,
    },
    list: {
        flex: 0.9,
    },
});

export default App;
