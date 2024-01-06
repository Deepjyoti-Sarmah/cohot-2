import { useEffect } from "react";
import { useState } from "react"
import { memo } from 'react';

function App() {
  // const [firstTitle, setFirstTitle] = useState("my name is harkirat");

  // function changeTitle() {
  //   setFirstTitle("My name is " + Math.random())
  // }
  //
// const [todos, setTodos] = useState([{
  //   id: 1, 
  //   title: "go to gym",
  //   desc: "go to gym today"
  // }, {
  //   id: 2, 
  //   title: "eat food",
  //   desc: "eat meal now "
  // },{
  //   id: 3, 
  //   title: "go to class",
  //   desc: "do live class"
  // }
  // ])

  // function addTodo(){
  //   setTodos([...todos, {
  //     id: 4,
  //     title: "learn reat",
  //     desc: "Do assignment"
  //   }])
  // }
  // return (
  //   <div>
  //   {/*   <button onClick={changeTitle}>Click me to change the title</button> */}
  //   {/*   <Header title={firstTitle} /> */}
  //   {/*   <br /> */}
  //   {/*   <Header title="My name is raman" /> */}
  //   {/*   <Header title="My name is raman" /> */}
  //   {/*   <Header title="My name is raman" /> */}
  //   {/*   <Header title="My name is raman" /> */}
  //     <button onClick={addTodo}>Click to  add todo</button>
  //     {todos.map(todo => <Todo key={todo.id} title={todo.title} desc={todo.desc}/>)}
  //   </div>
  // )
  //
  //
  //
  //
  //
  //
  // return <div>
  //   {/* <CardWrapper innerComponent={<TextComponent/>} /> */}
  //   <CardWrapper> hi there</CardWrapper>
  // </div>

  const [todos, setTodo] = useState([]);
  
  useEffect(()=> {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
        .then(async(res) => {
          const json = await res.json();
          setTodo(json.todos);
        })
    }, 10000);
  },[])

  return (
    <>
    {todos.map(todo => <TodoDisplay key={todo.id} title={todo.title} desc={todo.desc}/>)}
    </>
  )
}

function TodoDisplay({title , desc}) {
  return (
    <>
     <div>
      <h4>{title}</h4>
      <h5>{desc}</h5>
     </div> 
    </>
  )
}

// function CardWrapper({children}) {
//   console.log(children)
//   return <div style={{border: "2px solid black", padding: 20}}>
//     {children}
//   </div>
// }

// function CardWrapper({innerComponent}) {
//   return <div style={{border: "2px solid black", padding: 20}}>
//     {innerComponent}
//   </div>
// }

// function TextComponent(){
//   return <div>
//     "Hi there"
//   </div>
// }

// function Todo({title, desc}) {
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h5>
//       {desc}
//     </h5>
//   </div>
// }

// const Header = memo(function ({title}) {
//   return <div>
//     {title}
//   </div>
// })

export default App
