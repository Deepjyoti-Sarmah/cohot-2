// import React, {Component, useEffect, useState} from "react";
// import { render } from "react-dom";
// // class MyComponent extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = { count: 0 };
// //   }

// //   incrementCount = () => {
// //     this.setState({ count: this.state.count + 1 });
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <p>{this.state.count}</p>
// //         <button onClick={this.incrementCount}>Increment</button>
// //       </div>
// //     );
// //   }
// // }

// class MyComponent extends React.Component {

//   componentDidMount() {
//     // Perform setup or data fetching here
//     console.log("component will mount");
//   }

//   componentWillUnmount() {
//     // Clean up (e.g., remove event listeners or cancel subscriptions)
//     console.log("Component will unmount");
//   }

//   render() {
//     // Render UI
//     return <div>
//       hi there
//     </div>
//   }
// }


// // function MyComponent() {
// //   useEffect(() => {
// //     // Perform setup or data fetching here
// //     console.log("Component mount");

// //     return () => {
// //       // Cleanup code (similar to componentWillUnmount)
// //     console.log("Component unmount");
// //     };
// //   }, []);

// //   // Render UI
// //   return (
// //     <div>
// //       Hi there
// //     </div>
// //   )
// // }

// function App() {

//   // const [render, setRender]  = useState(true);

//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     setRender(r => !r);
//   //   },5000)
//   // },[])

//   return (
//   <div>
//     <MyComponent />
//     {/* {render ? <MyComponent /> : <div></div> } */}
//   </div>
//   
//   )
// }

// export default App
//
//

import { useEffect, useState } from 'react'
import axios from 'axios'

// function useTodo(time) {
//   const [todos, setTodos] = useState([])
//   const [loading, setLoading] = useState(true);

//   function getData() {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setLoading(false);
//       })
//   }

//   useEffect(() => {
//     const value = setInterval(() => {
//       getData();
//     }, time * 1000);

//     return () => {
//       clearInterval(value);
//     }
//   }, [time])

//   return {todos, loading};
// }


// function useIsOnline() {
//   const [isOnline, setIsOnline] = useState(window.navigator.onLine);

//   useEffect(() => {
//     window.addEventListener("online", () => {
//       setIsOnline(true);
//     });
//     
//     window.addEventListener("offline", () => {
//       setIsOnline(false);
//     });
//   }, [])

//   return isOnline
// }
//

// const useInterval = (callback, delay) => {
//   useEffect(() => {
//     const intervalId = setInterval(callback, delay);
//     return () => clearInterval(intervalId);
//   }, [callback, delay]);
// };
//
//import React, { useState } from 'react';
// import useDebounce from './useDebounce';
//
function useDebounce(input, time) {

  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const value = setTimeout(() => {
      setDebouncedValue(input);
    }, time);

    return () => {
      clearTimeout(value);
    }
  }, [input]);

  return debouncedValue;   
}

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  useEffect(() => {
    //
  }, [debouncedValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />

      <div>
        <p>
          {debouncedValue}
        </p>
      </div>
    </>
  );
};

// export default SearchBar;

function App() {

  // const {todos, loading} = useTodo(5);
  // const isOnline = useIsOnline();

  // if(loading) {
  //   return <div>Loading...</div>
  // }

// return (
  //   <>
  //     {/* {loading ? <div>Loading</div>: } */}
  //     {/* {todos.map(todo => <Track key={todo.title} todo={todo} />)} */}
  //     {isOnline? <div>
  //       "You are online" 
  //     </div> : <div>
  //       "You are offline"
  //     </div>}
  //   </>
  // )
  //
  // const [count, setCount] = useState(0);

  // useInterval(() => {
  //   setCount(c => c + 1);
  // }, 1000)

  // return (
  //   <>
  //     Timer is at {count}
  //   </>
  // )
  //
  return (
  <div>
    <SearchBar />
  </div>
  )

}

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }

export default App
