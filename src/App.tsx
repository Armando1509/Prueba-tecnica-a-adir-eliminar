import { useState } from "react";
import "./App.css";

interface Item {
  id: `${string}-${string}-${string}-${string}-${string}`;
  timestamp: number;
  text: string;
}

const INITIAL_ITEMS: Item[] = [
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: "Videojuegos",
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: "Libros",
  },
];

function App() {
  const [items, setItems] = useState(INITIAL_ITEMS);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { elements } = event.currentTarget;
    const input = elements.namedItem("item");
    const isInput = input instanceof HTMLInputElement;
    if (!isInput || input == null) return;

    const newItem: Item = {
      id: crypto.randomUUID(),
      text: input.value,
      timestamp: Date.now(),
    };

    setItems((prevItems) => {
      return [...prevItems, newItem];
    });

    input.value = "";
  };

  return (
    <main>
      <aside>
        <h1>Prueba tecnica de React</h1>
        <h1>Añadir y eliminar elemetos a una lista</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Elemento a introducir:
            <input name="item" required type="text" placeholder="videojuegos" />
          </label>
          <button>Añadir elemento a la lista</button>
        </form>
      </aside>
      <section>
        <h2>Lista de elemetos</h2>
        <ul>
          {
            items.length === 0 ? (<p><strong>No hay elementos en la lista</strong></p>):(


          items.map((item) => {
            return (
              <li key={item.id}>
                {item.text}
                <button
                  onClick={() => {
                    setItems((prevItems) => {
                      return prevItems.filter(
                        (currentItem) => currentItem.id !== item.id
                      );
                    });
                  }}
                >
                  Eliminar elemento
                </button>
              </li>
            );
          }))} 
        </ul>
      </section>
    </main>
  );
}

export default App;
