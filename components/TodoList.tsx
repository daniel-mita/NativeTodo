import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, Alert } from "react-native";
import { ToDo } from "../App";
import TodoItem from "./TodoItem";

function TodoList(p:{todosList: ToDo[] ;setTodosList:(todo:ToDo[]) => void}){

    function pressHandler(todo:ToDo){
        const newToDos = p.todosList.filter(todoMatching => todoMatching !== todo);
        p.setTodosList(newToDos);
        }

    return(
        <View>
        <ScrollView>
            {p.todosList.map(todo => (
               <TodoItem todo={todo} pressHandler={pressHandler}/> 
            ))}
        </ScrollView>
        </View>
    );
}

export default TodoList;