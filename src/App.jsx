import { useState } from "react";

function App() {
  const [draft, setDraft] = useState("");

  function handleChange(e) {
    setDraft(e.target.value);
  }

  function handleClear() {
    setDraft("");
  }

  const [todos, setTodos] = useState([]);


  function toggleTodo(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }


  function handleAdd() {
    const text = draft.trim();

    if (text === "") return;

    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setDraft("");
  }



  return (


    <main>
      <h1>Inköpslista</h1>
      <p>Antal varor: {todos.length}</p>


      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>
              Ta bort
            </button>
          </li>
        ))}
      </ul>



      <div>
        <input
          type="text"
          value={draft}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
          placeholder="Skriv vilken vara..."
        />


        <button type="button" onClick={handleClear}>
          Rensa
        </button>

        <button type="button" onClick={handleAdd}>
          Lägg till
        </button>
      </div>
    </main>
  );
}

export default App;