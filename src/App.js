import './App.css';
import React , {useEffect}from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'


const alanKey = '22b36abd0e2e1ac15e09fb0554a7f2b12e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = ()=>{

  useEffect(()=> {
    alanBtn({
      key: alanKey,
      onCommand: ({command})=> {
        if(command === 'testCommand') {
          alert('This command was executed')
        }
      }
    })
  },[])

  return (
    <div><h1>
      Alan Ai App</h1></div>
  )
}

export default App;
