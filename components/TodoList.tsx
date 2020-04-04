import React, { useState, useContext } from "react";
import { StyleSheet, View, ScrollView, Button } from "react-native";
import { ToDo, TdsContext } from "../App";
import TodoItem from "./TodoItem";

function TodoList({ navigation }) {
  const contextValue = useContext(TdsContext);

  function navHandler() {
    navigation.navigate("Form");
  }

  function pressHandler(todo: ToDo) {
    const newToDos = contextValue.todosList.filter(
      todoMatching => todoMatching !== todo
    );
    contextValue.setTodosList(newToDos);
  }

  return (
    <TdsContext.Consumer>
      {({ todosList }) => (
        <View style={styles.container}>
          <View style={styles.content}>
            <Button onPress={navHandler} title="Add a todo" />
            <View>
              <ScrollView>
                {todosList.map(todo => (
                  <TodoItem todo={todo} pressHandler={pressHandler} />
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      )}
    </TdsContext.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    textAlign: "center",
    padding: 40
  }
});
export default TodoList;
