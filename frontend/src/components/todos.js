import React, { useEffect, useState } from 'react';
import Todo from './todo';

function Todos(props) {
  const transformedTodos = ''
  const [todos, setTodos] = useState([]); 

  const dummytodos = [
    {
      uid: 1,
      id: 1,
      title: "Prvo todo"
    },
    {
      uid: 2,
      id: 2,
      title: "Vtoro todo"
    }
  ]

  async function getTodos() {
    const id = 7
    //
    fetch('http://localhost:5000/api/places/products/' + id)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
      const transformedTodos = data.map(todo => {
        return {
          uid: todo.userId,
          id: todo.id,
          title: todo.title
        }
      })
      console.log(transformedTodos[1]);
      console.log(typeof(dummytodos))
    })
  }

  return (
    <div>
          <h1>Tomas</h1>
          <button onClick={getTodos}>Click me</button>
          {/* <ul>
            {props.dummytodos.values.map((todo) => (
              <Todo>
                userId={todo.uid},
                id={todo.id},
                title={todo.title}
              </Todo>
            ))}
          </ul> */}
    </div>
  )
}

export default Todos