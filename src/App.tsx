import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import RecipeApp from './pages/RecipeApp/RecipeApp';
import RecipePage from './pages/RecipePage/RecipePage';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<RecipeApp/>}/>
          <Route path='/details' element={<RecipePage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
