import React from 'react'
import StatefulCounter from './components/StatefullCounter';
import StatelessMessage from './components/StatelessMessage';
import ClassStatefulCounter from './components/ClassStatefulCounter';


function App() {
  return (
    <div>
    <StatefulCounter />
    <StatelessMessage message="Stateless Component" />
    <ClassStatefulCounter />
    </div>)
}

export default App
