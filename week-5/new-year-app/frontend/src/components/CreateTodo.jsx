import { useState } from "react"

export function CreateTodo()  {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return <div>
      <input type="text" placeholder='text' onChange={function(e) {
        const value = e.target.value
        setTitle(value)
    }}></input> <br />
      <input type="text" placeholder='text' onChange={function(e) {
        const value = e.target.value
      setDesc(value)
    }}></input> <br />

      <button onClick={() => {
        fetch("https://localhost:3000/todos", {
          method: "POST",
          body: JSON.stringify({
            title: title,
            desc: desc,
          }),
          headers: {
            "ContentType": "application/json"
          }
        })
          .then(async function(res) {
            const json = await res.json();
          })
      }}>Add todo</button>
    </div>
}

