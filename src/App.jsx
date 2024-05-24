
import './App.css'
import Users from './Users'

function App() {
    function handleClick(){
      alert('button clicked')
    }

  return (
    <>

      <h1>React core Concepts 2</h1>
      <Users></Users>
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App
