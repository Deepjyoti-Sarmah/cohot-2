import axios from "axios";
import { useEffect, useMemo } from "react";
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

  // const [todos, setTodo] = useState([]);
  // 
  // useEffect(()=> {
  //   setInterval(() => {
  //     fetch("https://sum-server.100xdevs.com/todos")
  //       .then(async(res) => {
  //         const json = await res.json();
  //         setTodo(json.todos);
  //       })
  //   }, 10000);
  // },[])

//   return (
//     <>
//     {/* {todos.map(todo => <TodoDisplay key={todo.id} title={todo.title} desc={todo.desc}/>)} */}
//     </>
//   )
// }
//   const [todo, setTodo] = useState({}); 
//   useEffect(() => { axios("https://sum-server.100xdevs.com/todo")
//       .then(function(res) {
//         setTodo(res.data.todos);
//       })
//   },[]); 

//   return <div>
//     {/* <Todo id={1} /> */}
//     {todo.map(todo => <Todo key={todo.id} title={todo.title} desc={todo.desc}/>)}
//   </div>

// }

// function Todo({title, desc}) {

//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h4>
//       {desc}
//     </h4>
//   </div>
// }

// function App() {

  // const [count, setCoount] = useState(1);

  // function increaseCount() {
  //   setCoount()
  // }

  // return <div>
  //   <button type="" onClick={function(){
  //     setCoount(1)
  //   }}>1</button>
  //   <button type="" onClick={function(){
  //     setCoount(2)
  //   }}>2</button>
  //   <button type="" onClick={function(){
  //     setCoount(3)
  //   }}>3</button>
  //   <button type="" onClick={function(){
  //     setCoount(4)
  //   }}>4</button>

  //   <Todo id={count} />
  // </div>

  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  // const [count, setCount] = useState(0);

// let count =  useMemo(() => {
   //  let finalcount = 0; 
   //  for (let i = 0; i < inputValue; i++) {
   //    finalcount = finalcount + i;
   //  }
   //  }, [inputValue]) 
    //

  // useEffect(() => {
  //   let finalcount = 0; 
  //   for (let i = 0; i < inputValue; i++) {
  //     finalcount = finalcount + i;
  //   }
  //   setCount(finalcount);
  // }, [inputValue])

   let count =  useMemo(() => {
    let finalcount = 0; 
    for (let i = 0; i < inputValue; i++) {
      finalcount = finalcount + i;
    }
    return finalcount;
  }, [inputValue]);



 return <div> 
    <input onChange={
      function(e) { setInputValue(e.target.value)}}>
    </input> <br/> 
    Sum from 1 to {inputValue} is {count}  
    <br /> 
    <button onClick={
      function(){ setCounter(counter + 1) }} type="">
      Counter: {counter}
    </button>
  </div> 
}

// function Todo({id}) {
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todo?id=" + id)
//       .then(async function(res) {
//         const json = await res.json();
//         setTodo (json.todo);
//       })
//   }, [id])

{/*   return <div> */}
{/*     Id: {id} */}
{/*     <h1> */}
{/*       {todo.title} */}
{/*     </h1> */}
{/*     <h4> */}
{/*       {todo.description} */}
{/*     </h4> */}
{/*   </div> */}
{/* } */}


// function TodoDisplay({title , desc}) {
//   return (
//     <>
//      <div>
//       <h4>{title}</h4>
//       <h5>{desc}</h5>
//      </div> 
//     </>
//   )
// }

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

// function App() {
//   const [count, setcount] = useState(0);
//   const [text, settext] = useState(0);
//   const [ans, setans] = useState(0)

//   const calculateSum = (n) => {
//     // console.log(n);
//     setans((n*(n+1))/2);
//   };
//   
//   return (
//    
//     <div>
//       <input placeholder="SUm k liye no daalo" value={text} onChange={(e) => {
//         settext(settext(e.target.value))
//         calculateSum(parseInt(e.target.value));
//       }}></input>
//       Answer of sum is {ans}  
//       <button onClick={() => setcount(count+1)}>{"Count is " + count}</button>
//     </div>
//     
//   );
// }

// function ToDo({id}) {
//   const [Todo, setTodo] = useState({})
//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todo?id=" + id).then(async (res) => {
//       const json = await res.json();
//       setTodo(json.todo)
//     })
//     
//   }, [id])
//   return <>
//     <h1>{Todo.title}</h1>
//     <h3>{Todo.description}</h3>
//   </>
// }

export default App
