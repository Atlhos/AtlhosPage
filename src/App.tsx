import './App.css'
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routesApp';
import "./index.css";
import LanguageProvider from './contexts/languageContexts';


function App() {

  return (
    <div className='text-neutral-600'>
      <LanguageProvider>
        <BrowserRouter>
          <RoutesApp/>
        </BrowserRouter>
      </LanguageProvider>
    </div>
  )
}

export default App
