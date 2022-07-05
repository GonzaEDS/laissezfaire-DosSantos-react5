import './main.css'

import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer greeting="Welcome to LaizzesFaire.com" />
    </div>
  )
}

export default App
