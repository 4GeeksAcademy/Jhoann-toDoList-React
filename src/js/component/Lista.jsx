import React, {useState} from 'react'
import Footer from "./Footer.jsx";


const Lista = () => {
// STATES
  const [contentInput, setContentInput] = useState("");
  const [valuesKey, setValuesKey] = useState([]);
  const [elements,setElements] = useState(-1);
  const counter = valuesKey.length




  //FUNCTIONS STATES

  const handleEnter = (event) => {
    if(event.key === "Enter"){
      setValuesKey([...valuesKey,contentInput]);
      setContentInput("");
    }
  };

  const handleMouseEnter = (index) => {
    setElements(index);
  };
  const handleMouseLeave = () => {
    setElements(-1);
  };

  const removeElements = (index) => {
    const newValuesKey = [...valuesKey];
    newValuesKey.splice(index, 1);
    setValuesKey(newValuesKey);
  };
  return (

    <>
          <h1 className="text-center mt-5 fs-1">todos</h1>

          <div className='container-fluid z-3 text-center sombra mb-3 bg-body-tertiary  position-relative w-75 border border-dark-subtle border border-1 border-dark-subtle  mb-2 border-opacity-50 px-0'>

          <div className='row inpList w-100 m-0 '>
            <input 
                className=' border-bottom py-2 border-opacity-75 fs-4'
                type="text" 
                placeholder='What needs to be done?' 
                onChange={(evento)=> setContentInput(evento.target.value.trim())}
                onKeyDown={handleEnter}
                value={contentInput}
                />

            <ul className="px-0 pt-0 pb-0 py-2 unOrList w-100 "> {valuesKey.map((obj,index) =>
            (<li
                className='border-bottom border-opacity-75 w-100 px-4'
                key={index}
                onMouseEnter={() => handleMouseEnter(index)} 
                onMouseLeave={handleMouseLeave}>{obj}
                {elements === index && ( 
                  <button 
                    className="closer" 
                    onClick={() => removeElements(index)}>
                  x
                </button>
                  )}  
            </li>
            ))}
            <Footer
              counter={counter} 
            />
            
            </ul>
          </div>
          </div>
            <div className='barra'></div>
            <div className='barra2'></div>
          
            
      
        
    </>
  )
}

export default Lista
