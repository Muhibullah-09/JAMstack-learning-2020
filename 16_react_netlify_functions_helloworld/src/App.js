import React , {useState, useEffect} from 'react';
import './App.css';

function App() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () =>{
      const reponse = await fetch(`.netlify/functions/hello?name=From Serverless Functions`);
      const tempdata = await reponse.json();
      setData(tempdata)
    }
    )();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
          {data.message}
      </header>
    </div>
  );
}

export default App;
