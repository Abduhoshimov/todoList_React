import React from 'react'
import { TodoList } from './components/todoList'
import { Card } from './components/card'
import './main.scss'

function App() {
  const [user, setUser] = React.useState([])

  return (
    <>
      <div className="app">
        <div className="container">
          <h1 className='title'>Todo List</h1>
          <TodoList addDate={setUser} />
          <div className="box">
            {user.map((item) => <Card key={item.id} setUser={setUser} {...item} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
