import React, {useState,useRef, useEffect} from 'react'
import Component from './Component'
import 'bootstrap/dist/css/bootstrap.css';
import { FormProvider } from './Context';
import OutputContainer from './OutputContainer';

// import Component from './Component'

export default function App() {
    // let {rr} = Component
    // const [isOpen, setisOpen] = useState(false)
    // let outref = useRef();
    // const handle = (e) =>{
    //     if(outref.current.contains(e.target)){
    //         return
    //     }
    //     setisOpen(false)
    // }
    // useEffect(()=>{
    //     const getClicked =  document.addEventListener('click', handle);
    //     console.log(Document)
    //     return () => {
    //         getClicked()
    //     }
    // }, [])
    // return(
    //     <div className="app" ref={outref} style={{opacity: isOpen=== true ? '5.0' : '1', background: 'gray'}} >
            
    //     <div style={{margin: '0 auto', textAlign: 'center' }} >
    //         <button onClick={()=>{
    //             setisOpen(!isOpen)
    //         }}>
    //             Open Modal
    //         </button>
    //         {isOpen && (
    //             <Component 
    //             outref={outref}
    //         />
    //         )}
    //         </div>
    //     </div>
    // )
    return(
        <FormProvider>
            <div className='row'>
          
                <div className="col-6">
                    <Component/>
                </div>
                <div className="col-6">
                    <OutputContainer/>
                </div>
            
            </div>
        </FormProvider>
    )
}
