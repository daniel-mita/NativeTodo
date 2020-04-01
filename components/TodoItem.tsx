import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ToDo } from "../App";

function TodoItem(p: { todo: ToDo ; pressHandler:(todo:ToDo)=>void}) {
  return (
    <TouchableOpacity onPress={() => p.pressHandler(p.todo)}>
      <View style={styles.item}>
        <Text style={styles.title}>{p.todo.title}</Text>
        <Text style={styles.date}>{p.todo.dueDate}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10
  },
  title: {
      marginBottom: 1,
      fontSize:14
  },
  date: {
      marginTop:0,
      fontSize:10
  }
});

export default TodoItem;
