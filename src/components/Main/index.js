import React from 'react'

import db from '../../dbPlan.json'
import dbEq from '../../dbPlanEquip.json'

const operations = db.operations.map(op=>{
  return (
    {
      "operation": op.textobutton,
      "description": op.textoOperation
    }
  )})

  const equipamentos = dbEq.operations.map(op=>{
    return (
      {
        "operation": op.textobutton,
        "description": op.textoOperation
      }
    )})

export default function Main() {
  
  function handleCopyOperation(){
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

  function handleEscolha(event){
   const esc = event.target.value;
   setEscolha(esc)
   console.log(esc)
  }
  

  const [informations, setInformations ] = React.useState();
  const [escolha, setEscolha] = React.useState("OM Vermelha");

  React.useEffect(() => {
   
  }, [informations, escolha])

  return (
    <div className="container">
    <div className="header">
      <h1>Apoio ao planejamento</h1>
      <button onClick={handleEscolha} value="OM Vermelha">OM Vermelha</button>
      <button onClick={handleEscolha} value="Equipamentos">Equipamentos</button>
      
    </div>
    <div className="main">
      <div className="sidebar">
        {escolha === "OM Vermelha" ?
          operations.map(op=>{
            return (
              <div key={op.description}>
                <button className='buttons' onClick={handleOperations} value={op.description}>
                  {op.operation}
                </button>
              </div>
              )
              })
          : (equipamentos.map(eq=>{
            return (
              
                <button key={eq.operation} className='buttons' onClick={handleOperations} value={eq.description}>
                  {eq.operation}
                </button>
              
              )
          }))
          }
      </div>
      <div className="buttonAndTextarea">
        <button onClick={handleCopyOperation} className="buttonCopy" id="input">COPIAR TEXTO</button>
        <textarea id="input" className='descriptions' value={informations} />
      </div>
    </div>
    </div>
  )
}
