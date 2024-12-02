import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [inp, setInp] = useState("");
  const [todo, setTodo] = useState([]);


  function setTodos(e) {
    e.preventDefault();
    setTodo((prevTodos) => {
      const updatedTodos = [...prevTodos, inp];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }


  function filterTodo(id) {
    setTodo((todo) => {
      const filterTodos = todo.filter((e, i) => i !== id);
      localStorage.setItem("todos", JSON.stringify(filterTodos));
      return filterTodos;
    });
  }

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
      setTodo(JSON.parse(localTodos));
   
  }, []);

  return (
    <>
      <form onSubmit={setTodos}>
        <div className="form_elements">
          <input
            type="text"
            onChange={(e) => setInp(e.target.value)}
            value={inp}

          />
          <button type="submit">Submit</button>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>Todos</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((x, id) => (
            <tr key={id}>
              <td className="item_line">{x}</td>
              <td>
                <button className="delete_btn" onClick={() => filterTodo(id)}>
                  Delete
                </button>
              </td>
              <td>
                <button className="update_btn" >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
