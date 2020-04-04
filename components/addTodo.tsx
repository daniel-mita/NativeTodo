import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { TdsContext } from "../App";

function AddTodo() {
  const [todo, setTodo] = useState({
    title: "",
    dueDate: ""
  });
  const changeTitle = val => {
    setTodo({ ...todo, title: val });
  };
  const changeDate = val => {
    setTodo({ ...todo, dueDate: val });
  };
  return (
    <TdsContext.Consumer>
      {({ addTodo }) => (
        <View style={styles.container}>
          <View style={styles.content}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Title"
                onChangeText={changeTitle}
              />
              <TextInput
                style={styles.input}
                placeholder="Date"
                onChangeText={changeDate}
              />
              <Button onPress={() => addTodo(todo)} title="Submit" />
            </View>
          </View>
        </View>
      )}
    </TdsContext.Consumer>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    textAlign: "center",
    padding: 40
  }
});

export default AddTodo;
