import { useState } from 'react';
import './App.css';
import { Form } from '@/components';

function App() {
  const [count, setCount] = useState(0);
  const arrStringOptions = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'}
  ];
  const GroupsOptions = [
    {
      label: 'names',
      options: [
        {value: 'yaman3bd', label: 'Yaman'},
        {value: 'hussam3bd', label: 'Hussam'},
        {value: 'ali3bd', label: 'Ali'}
      ]
    },
    {
      label: 'Jobs',
      options: [
        {value: 'react', label: 'Frontend'},
        {value: 'laravel', label: 'Backend'},
        {value: 'react, laravel', label: 'Fullstack'}
      ]
    },
  ];

  return (
    <div className="App">
      <Form.Select options={GroupsOptions} onChange={(option)=>{
        console.log(option);
      }}/>
    </div>
  );
}

export default App;
