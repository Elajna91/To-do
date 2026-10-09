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
    "Lära useState",
    "Se re-render",
    "Exam 2 senare",
  ]);

  function addDemo() {
    setTodos([
      "Lära useState",
      "Se re-render",
      "Exam 2 senare",
      "Koda är kul",
    ]);
  }

  function clearlist() {
    setTodos([]);
  }

  function handleAdd () {
    const text = draft.trim();

    if (text === "") return;

    setTodos([...todos, text]);
    setDraft("");
  }

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
          <li>{todos[0]}</li>
          <li>{todos[1]}</li>
          <li>{todos[2]}</li>
          <li>{todos[3]}</li>
          <li>{todos[4]}</li>
        </ul>

        <button onClick={addDemo}>Lägg till rad</button>
        <button onClick={clearlist}>Rensa lista</button>
        
      </main>
    </div>
  );
}

export default App;
