import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type WeatherData = {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
};

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState<WeatherData[]>(null);

  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5057/WeatherForecast');
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
      {data ? (
        <div>
          WeatherData:
          <h2>{data[0].date}</h2>
          <p>{data[0].temperatureC ? 'Completed' : 'Not Completed'}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
