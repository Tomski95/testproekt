import React from 'react';

const Todo = (props) => {
  return (
    <li>
      <h2>{props.userId}</h2>
      <h3>{props.id}</h3>
      <p>{props.title}</p>
    </li>
  );
};

export default Todo;