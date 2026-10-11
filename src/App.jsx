import { useState } from "react";

function App() {
  const [draft, setDraft] = useState("");
  const [todos, setTodos] = useState([]);

  function handleAdd() {
    const text = draft.trim();

    if (text === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setDraft("");
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function clearList() {
    setTodos([]);
  }

  return (
    <main className="shopping-box">
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
                textDecoration: todo.completed
                  ? "line-through"
                  : "none",
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
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
          placeholder="Skriv vilken vara..."
        />

        <button onClick={handleAdd}>
          Lägg till
        </button>

        <button onClick={clearList}>
          Rensa listan
        </button>
      </div>
    </main>
  );
}

export default App;