import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'


export default function TestList() {
    const {myList} = useContext(AppContext)

  return (
    <ul>
    {myList.map((item, index)=><li key={index}>{item}</li>)}
   </ul>
  )
}
