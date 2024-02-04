import React from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';

const Todo = ({task,deleteTodo,editTodo}) => {
  return (
    <div className='d-flex justify-content-between align-items-center p-3'>
      <p className='text-white fs-4'>{task.task}</p>
      <div className=' d-flex gap-3'>
        <AiFillEdit className=' text-warning fs-4 ' onClick={()=>editTodo(task.id)} />
        <BsFillTrashFill className=' text-danger fs-4 ' onClick={()=>deleteTodo(task.id)} />
      </div>
    </div>
  )
}

export default Todo
