import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { createTodoLabel, inputTodoLabel, todoListHeader } from "./labels";

export function CreateTodo() {
  return (
    <View style={createTodo}>
      <View style={inputCreateForm}>
        <TextInput style={inputCreateTodo} placeholder={inputTodoLabel} />

        <Pressable style={buttonCreateTodo} onPress={() => {}}>
          <Text style={buttonCreateTodoText}>{createTodoLabel}</Text>
        </Pressable>
      </View>
    
      <View>
        <Text>{todoListHeader}</Text>
      </View>
    </View>
  );
}

const {
  createTodo,
  inputCreateForm,
  inputCreateTodo,
  buttonCreateTodo,
  buttonCreateTodoText,
} = StyleSheet.create({
  createTodo: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  inputCreateForm: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  inputCreateTodo: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingBlock: 4,
    paddingInline: 8,
  },
  buttonCreateTodo: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignItems: "center",
  },
  buttonCreateTodoText: {
    color: "white",
    fontWeight: "600",
  },
});
