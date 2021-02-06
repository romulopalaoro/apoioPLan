import React from 'react'
import db from '../../dbPlan.json'

const operations = db.operations.map(op=>{
  return (
    {
      "operation": op.textobutton,
      "description": op.textoOperation
    }
  )})

export default function Main() {
  
  function handleCopyOperation(event){
    let op = document.querySelector("textarea")
    console.log(op)
    // let op1 = toString(event.target.nextSibling.textContent)
    // console.log(op1)   -  não funcionou, mas um bom jeito de pegar o textContent da proxima <tag>
    op.select()
    document.execCommand('copy')
  }
  function handleOperations(event){
    setInformations(event.target.value)
  }

  const [informations, setInformations ] = React.useState();

  return (
    <div className="main">
      <div className="sidebar">
          {operations.map(op=>{
            return (
              <div >
                <button className='buttons' onClick={handleOperations} value={op.description}>
                  {op.operation}
                </button>
              </div>
              )
              })
          }
      </div>
      <div className="buttonAndTextarea">
        <button onClick={handleCopyOperation} className="buttonCopy" id="input">COPIAR TEXTO</button>
        <textarea id="input" className='descriptions' value={informations}/>
      </div>
    </div>
  )
}
