import React, {useState} from 'react'
import TestList from './TestList';

function TestPage() {

  const [_name, _setName] = useState('No Name')
  const [name, setName] = useState('')

  return (
    // React Fragement
    <> 
      <TestList/>

      <div>
        Hello World!
          <img src="https://res.cloudinary.com/cae67/image/upload/v1666619535/crave_pzzfpd.png"/>
          <br/>
          <hr/>
      </div>
      <div>
        <input placeholder="Enter your name" onChange={(e)=>{_setName(e.target.value); console.log(_name)}}/>
        <button onClick={(e)=>{setName(_name)}} >Click Me</button>
        <br/>
        Your name is {name}
      </div>
    </>  
  );
}

export default TestPage;
