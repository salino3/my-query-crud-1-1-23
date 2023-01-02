import React from 'react'
import { TaskForm } from './components/TaskForm'
import TasksList from './components/TasksList'
import './App.css'

const App = () => {
  return (
    <>
    <TaskForm />
    <TasksList />
    </>
  )
}

export default App