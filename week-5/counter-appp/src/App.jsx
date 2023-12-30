import { useState } from 'react'
// import './App.css'

// let state = {
//   count: 0
// }

// function onClickHandler() {
//   state.count ++;
//   console.log(state.count);
// }
//
//
// todo application 
//

function App() {
  // let [count, setCount] = useState(0);
  // console.log(count);
  // console.log(setCount);

  // function onClickHandler() {
  //   setCount(count++);
  // }
  //
  const [todos, setTodos] = useState([
    {
      title: "hi",
      desc: "kdjfdasl;f",
      completed: false
    }, 
    {
      title: "hello",
      desc: "kdjfdasl;f",
      completed: true
    }
  ])

  function addTodo(){
    setTodos([...todos, {
      title: "new todo",
      desc: "desc of new todo"
    }])
    
  }

  return (
    <div>
      <button type="" onClick={addTodo}>Add a random todo</button>
      {/* <button onClick={onClickHandler} type="">Counter {count}</button> */}
      {/* <CustomButton count = {count} setCount={setCount}></CustomButton> */}
      {/* <Todo title={todos[0].title} desc={todos[0].desc}></Todo> */}
      {/* <Todo title={todos[1].title} desc={todos[1].desc}></Todo> */}
      {todos.map(function(todo){
        return <Todo title={todo.title} desc={todo.desc}></Todo>
      })}
    </div>
  )
}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h1>{props.desc}</h1> 
  </div>
}

//components
// function CustomButton(props) {

//   function onClickHandler() {
//     props.setCount(props.count+1);
//   }

//   return <button onClick={onClickHandler}>
//     Counter {props.count}
//   </button>
// }

export default App
