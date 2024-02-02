import React, { } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainComponenet from './Component/MainComponent'

function App() {
  return(
    <Router>
      <div>
        <Routes>
          <Route path = "/" element = {<MainComponenet />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
