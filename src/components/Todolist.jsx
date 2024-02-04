import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import Todo from "./Todo";
import Edit from "./Edit";
import './todolist.css'

// uuidv4()

const Todolist = () => {
  const [todoValue, settodoValue] = useState([]);
  const createTodo = (todo) => {
    settodoValue([
      ...todoValue,
      { id: uuidv4(), task: todo, isEditing: false },
    ]); //Dizi olduğu için
  };
  const deleteTodo = (id) => {
    settodoValue(todoValue.filter((todo) => todo.id !== id));
  };
  const editTodo = (id) => {
    settodoValue(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task, id) => {
    settodoValue(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (

    <div  className="todoContainer container"  >
      
      <Form  createTodo={createTodo} />
      {/* //İnputtaki girilen bilgileri todo listesine iletmesi için. */}
      {todoValue.map((todo, idx) =>
        todo.isEditing ? (
          <Edit editTodo={editTask} task={todo} key={idx} />
        ) : (
          <Todo
            task={todo}
            key={idx}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default Todolist;
