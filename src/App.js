import React from 'react';
import { Button } from 'reactstrap';

import './App.css';
import FilterableProductTable from './Components/FilterableProductTable'
import PropTest from './Components/PropTest'
import RoutingExample from './Components/RoutingExample';

function App() {
  return (
    <div className="App">
      <div>
        {/* <PropTest /> */}
        <RoutingExample />
{/* <FilterableProductTable /> */}
      </div>

    </div>
  );
}

export default App;
