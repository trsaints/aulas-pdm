import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { createTodoLabel, inputTodoLabel, todoListHeader } from "../../constants/messages";

export function CreateTodo() {
    return (
        <View style={createTodo}>
            <TextInput placeholder={inputTodoLabel} />
            <Button title={createTodoLabel} />
            <Text>{todoListHeader}</Text>
        </View>
    )
}

const { createTodo } = StyleSheet.create({
    createTodo: {
        padding: 30,
    }
})