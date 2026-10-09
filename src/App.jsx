import { useState } from "react";

function App() {
  const [draft, setDraft] = useState("Hej");

  function handleChange(e) {
    setDraft(e.target.value);
  }

  function handleClear() {
    setDraft("");
  }


  const [todos, setTodos] = useState([
    { id: 1, text: "Lära useState", completed: false },
    { id: 2, text: "Se re-render", completed: false },
    { id: 3, text: "Exam 2 senare", completed: false },
  ]);

  function addDemo() {
    const newTodo = {
      id: Date.now(),
      text: "Koda är kul",
      completed: false,
    };

    setTodos([...todos, newTodo]);
  }

  function clearlist() {
    setTodos([]);
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

  <ul>
    {todos.map((todo) => (
      <li key={todo.id}>
        <input
          type="checkbox"
          checked={todo.completed}
          on Change={() => toggleTodo(todo.id)}
        />
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.text}
        </span>
      </li>
    ))}
  </ul>

  return (
    <div>
      <input
        type="text"
        value={draft}
        onChange={handleChange}
        placeholder="Skriv uppgift..."
      />

      <button type="button" onClick={handleClear}>Rensa</button>
      <button type="button" onClick={handleAdd}>Lägg till</button>

      <p>Kladd just nu: {draft}</p>

      <main>
        <h1>Övnings-todo</h1>
        <p>Antal uppgifter: {todos.length}</p>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>

        <button onClick={addDemo}>Lägg till rad</button>
        <button onClick={clearlist}>Rensa lista</button>

      </main>
    </div>
  );
}

export default App;
