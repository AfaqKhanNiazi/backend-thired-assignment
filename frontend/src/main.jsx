import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
      <Provider store={store}>
    <BrowserRouter
    future={{
      v7_startTransition: true,
    }}>
      <App />
      <Toaster/> 
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
