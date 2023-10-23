import './App.css'

function App() {
  

  return (
    <main>
      <aside>
        <h1>Prueba tecnica de React</h1>
        <h1>Añadir y eliminar elemetos a una lista</h1>
        <form>
          <label>
            Elemento a introducir: {(' ')}
            <input
              name='item'
              required
              type='text'
              placeholder='videojuegos'
            />
          </label>
          <button>Añadir elemento a la lista</button>
        </form>
      </aside>
      <section>
        <h2>Lista de elemetos</h2>
        <ul>
          <li>Videojuegos</li>
          <li>Libors</li>
          <li>Series</li>
          <li>Peliculas</li>

        </ul>
      </section>
    </main>
  )
}

export default App
