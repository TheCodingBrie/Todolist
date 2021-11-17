
import {useState, useEffect} from 'react'
import { v4 } from 'uuid';
import './App.css';
import Form from "./Form.js";
import Section from "./Section.js";
import Trash from "./Trash.js";



function App() {

  const [task, setTask] = useState({
    state: "todo",
    id: v4(),
    title: "",
    tag: "",
    deadline: "",
    userid: ""
  });

  const LOCAL_STORAGE_KEY = "todolist.todo";


  const sections = ["todo", "in-progress", "completed"];

  const task2 = {
    state: "in-progress",
    id: "123",
    title: "",
    tag: "",
    deadline: "",
    userid: ""
  }

  const task3 = {
    state: "completed",
    id: "345",
    title: "",
    tag: "",
    deadline: "",
    userid: ""
  }

  const [tasks, setTasks] = useState([task, task2, task3]);
  
  // useEffect(()=> {
  //   const loadTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (loadTasks) setTasks(loadTasks)
  // },[])
  
  // useEffect(()=> {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  // },[tasks])

  console.log(tasks)
  return (
    <div className="App">
      <Form />
      <Trash />
      
      <div className="sections">
        {
          sections.map((section) => {
            return (
              <Section key={section} section={section} tasks={tasks} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
