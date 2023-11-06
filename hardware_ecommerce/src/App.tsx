import { Navbar } from './components/Navbar';
import { AppRouter } from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App