import {BrowserRouter} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import AppRouter from './routers/index.jsx'

function App() {

  return (
      <>
          <BrowserRouter>
              <Toaster/>
              <AppRouter/>
          </BrowserRouter>
      </>
  )
}

export default App
