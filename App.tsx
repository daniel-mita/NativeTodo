import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Header from "./components/header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/addTodo";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./routes/navigator";

type TdsContextType = {
  todosList: ToDo[];
  setTodosList: (newToDos: ToDo[]) => void;
  addTodo: (todo: ToDo) => void;
};

export const TdsContext = React.createContext<TdsContextType>({
  todosList: [],
  setTodosList: () => {},
  addTodo: () => {}
});

export default function App() {
  const [todosList, setTodosList] = useState([] as ToDo[]);

  function addTodo(todo: ToDo) {
    setTodosList([todo, ...todosList]);
    Alert.alert("GOOD", "You submited a ToDo", [{ text: "Ok got it" }]);
  }

  var contextValue = { todosList, setTodosList, addTodo };
  return (
    <NavigationContainer>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <TdsContext.Provider value={contextValue}>
          <Navigator />
        </TdsContext.Provider>
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
