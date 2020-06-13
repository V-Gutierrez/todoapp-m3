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
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        minHeight: 800,
        height: 1000,
        maxHeight: 1200,
    },
    doText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    content: {
        padding: 40,
    },
    list: {
        flex: 0.95,
    },
});

export default App;
