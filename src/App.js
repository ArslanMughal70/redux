import Navbar from '../src/components/Navbar';
import Count from '../src/components/Count';
import { Provider } from 'react-redux';
import { store } from './state/store'
import { createContext } from 'react';
const usedata=createContext();
function App() {
  return (
    <>

   <Navbar/>
   <Count/>

    </>
  );
}

export default App;
export {usedata};