import React, { useState } from "react";
import { StyleSheet, Text, View ,Alert,TouchableWithoutFeedback,Keyboard} from "react-native";
import Header from "./components/header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/addTodo";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  const [todosList, setTodosList] = useState([] as ToDo[]);

  function addTodo(todo:ToDo) {
    setTodosList([todo,...todosList]);
    Alert.alert('GOOD', 'You submited a ToDo', [
      {text:'Ok got it'}
  ])
  }
  
  return (
    <NavigationContainer>
    <TouchableWithoutFeedback onPress={()=> {
      Keyboard.dismiss();
      }}
    >
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo addTodo={addTodo}/>
        <TodoList todosList={todosList} setTodosList={setTodosList} />
      </View>
    </View>
    </TouchableWithoutFeedback>
    </NavigationContainer>
  );
}

export type ToDo = {
  title: string;
  dueDate: string;
};

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
