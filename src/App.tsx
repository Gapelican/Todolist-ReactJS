import { Header } from "./components/Header";
import styles from './App.module.css'
import { CreateTask } from "./components/CreateTask";

import './global.css'
import { TaskInfo } from "./components/TaskInfo";
import { Task } from "./components/Task";

const task = [
  {
    id: 1,
    task: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus minus nobis earum ullam excepturi, repudiandae suscipit harum sint magni minima a quod quidem sunt doloribus. Sit a dicta hic modi?",
  },
  {
    id: 2,
    task: "Aprender o React JS",
  },
  {
    id: 3,
    task: "Aprender Git para empresa",
  },   
]



export function App() {

  return (
    <div>
     <Header/>
     <CreateTask/>
    </div>
  )
}


