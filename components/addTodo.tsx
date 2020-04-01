import React, {useState} from 'react' ;
import { StyleSheet, Text, View, TextInput, Button} from "react-native";
import { ToDo } from "../App";

function AddTodo(p:{addTodo: (toDo:ToDo)=> void}){
    const[todo,setTodo]= useState({
        title:"",
        dueDate:"",
    })
   const changeTitle = (val) => {
    setTodo({...todo, title:val})
   } 
   const changeDate = (val) => {
    setTodo({...todo, dueDate:val})
   }
    return(
        <View>
            <TextInput 
            style={styles.input}
            placeholder='Title'
            onChangeText={changeTitle}
            />
            <TextInput 
            style={styles.input}
            placeholder='Date'
            onChangeText={changeDate}
            />
            <Button  onPress={() => p.addTodo(todo) } title='Submit'/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})

export default AddTodo;