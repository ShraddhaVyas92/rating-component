import { useState } from 'react';

import './App.css';
import Hero from "./components/Hero/Hero";

function App() {
  const [count,setCount] = useState(0);
  return (
    <>
      <div className='app'>
         <main>
              <Hero /> 
         </main>
      </div>
    </>
  )
}

export default App;
