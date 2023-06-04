import React, { useEffect, useState, useRef } from 'react'
import DateDisplay from '../components/DateDisplay'
import { AddTodo, CustomNavbar, ListTodo } from '../components'
import '../styles/global.sass'

interface Task {
  taskId?: number | string
  taskName?: string
}

const HomePage: React.FC = () => {
  const [value, setValue] = useState('');
  // need a state to keep track of todos
  const [info, setInfo] = useState<Task[]>(() => {
    // get the todos from localstorage
    const savedTodos = localStorage.getItem("todos");
    // if there are todos stored
    if (savedTodos) {
      // return the parsed JSON object back to a javascript object
      return JSON.parse(savedTodos);
      // otherwise
    } else {
      // return an empty array
      return [];
    }
  });

  const [checkedArr, setCheckedArr] = useState<Task[]>([]);

  function onChangeText(e: any) {
    // console.log(e.target.value);
    const text = e.target.value;
    setValue(text);
  }

  function onAddClick() {
    if (value === "") {
      alert("The task name cannot be empty");
      return;
    }
    const tempObj = {
      taskId: info.length + 1,
      taskName: value,
    }
    setInfo([
      ...info,
      tempObj
    ])
    setValue("");
  }

  function handleOnChange(e:any, id:any) {
    if (e.target.checked) {
      setCheckedArr([...checkedArr, id]);
   } else {
      setCheckedArr(checkedArr.filter((item) => item !== id));
   }
  }

  function getLabel(id: any): string {
    const label = `complete`;
    if(checkedArr.includes(id)) {
      return 'completed';
    }
    return label
  }

  return (
    <>
      <CustomNavbar />
      <div className='container pt-5'>
        <h1 className='text-center'>Welcome to TodoApp</h1>

        <AddTodo 
          value={value}
          onChangeText={onChangeText}
          onAddClick={onAddClick}
        />
        <ListTodo
          info={info}
          handleOnChange={handleOnChange}
          getLabel={getLabel}
        />
      </div>
    </>
  )
}

export default HomePage
