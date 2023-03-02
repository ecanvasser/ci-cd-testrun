import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await fetch('https://ci-cd-backend-weczbghftq-uw.a.run.app/name');
        const data = await response.json()
        setName(data)
      } catch (err) {
        setError(err)
      }
    }
    fetchName()
  }, [])

  if (error) {
    <div>Sorry, the API isn't working</div>
  }

  if (name) {
    return (
      <div className="App">
        Hi, my name is {name}
      </div>
    );
  }
}

export default App;
