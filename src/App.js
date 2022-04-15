
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './compunant/Header/Header';
import Shop from './compunant/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        
      </Routes>
   
    
    </div>
  );
}

export default App;
