import React, {useState, useContext, useEffect} from 'react';
import TestPage from './components/TestPage';
import { AppContext } from './context/AppContext';


function App() {
  const [listItem, setListItem] = useState('')
  const [color, setColor] = useState('red')
  const {setMyList, myList} = useContext(AppContext)

  useEffect(()=>{
    console.log('This function runs on page load')
    return ()=>{console.log('This return function runs with the page unmounts')}
  },[])

  useEffect(()=>{
      switch(myList.length){
        case 0:
          setColor('cyan');
          break;
        case 1:
          setColor('blue');
          break;
        case 2:
          setColor('tomato');
          break;
        case 3:
          setColor('indigo');
          break;
        case 4:
          setColor('lawngreen');
          break;                                                  
        default:
          setColor('cornflowerblue');

      }
  },[myList])


  return (
    // React Fragement
    <> 
      <h1 style={{backgroundColor:color}}>Hello this will change colors</h1>
      <TestPage />
      <input placeholder="thing to add to list" onChange={(e)=>setListItem(e.target.value)}/>
      <button onClick={()=>setMyList([...myList, listItem ])}>Add to List</button>

    </>  
  );
}

export default App;
