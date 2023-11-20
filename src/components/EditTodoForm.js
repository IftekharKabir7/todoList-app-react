import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setvalue] = useState(task.task)

    const handleSubmit = (e) => {
        e.preventDefault();

        editTodo(value, task.id);

        setvalue('');
    }
  return (
    <form className='Todoform' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} 
        placeholder='Update task' onChange={(e) => setvalue(e.target.value)}/>
        <button type='submit' className='todo-btn'>
            UPDATE Task 
        </button>
        </form>
  )
}
