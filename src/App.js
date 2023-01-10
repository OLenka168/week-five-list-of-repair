import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [work, setWork] = useState(0);
  const {id, image, name, executor, term} = data[work];
  
  const previousWork = () => {
    setWork((work => {
      work--;
      if(work < 0) {
        return data.length - 1;
      }
      return work;
    }))
  }

  const nextWork = () => {
    setWork ((work => {
      work++;
      if (work > data.length-1) {
        work=0;
      }
      return work;
    }))
  }
  

  return (
    <div>
      <div className='container'>
        <img src={image} width='350px' alt='pic' />
      </div>
      <div className='container'>
        <h1>Наименование работ: {id}. {name}</h1>
      </div>
      <div className='container'>
        <h2>Исполнитель: {executor}</h2>
      </div>
      <div className='container'>
        <h3>Срок выполнения: {term}</h3>
      </div>
      <div className='btn'>
        <button onClick={previousWork}>previous</button>
        <button onClick={nextWork}>next</button>
      </div>
    </div>
  );
}

export default App;
