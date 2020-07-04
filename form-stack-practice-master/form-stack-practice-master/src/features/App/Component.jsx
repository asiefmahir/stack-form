// import React from 'react'
// import React, {useState,useRef, useEffect} from 'react'

// export default function Component({outref}) {
//     let rr = useRef()
//     console.log(rr)
    
//     return (
        
//         <div ref = {rr}>
//                 <div
                
//                 style={{width: '100px', background: 'gray',margin: '0 auto', marginTop:'20px'}}
//                 >
//                     This is Modal
//                 </div>
            
//         </div>
//     )
// }

// let data ={
//     forms:[
//         {
//             id: String,
//             title: String,
//             descriptiom: String,
//             formData: [
//                 {
//                     inputid: String,
//                     type: String,
//                     inputDatas: {
//                         title: String,
//                         placeholder: String,
//                         required: Boolean,
//                         data: {
//                             id: String,
//                             field: String
//                         }
//                     }
//                 }
//             ]
//         },
//         {
//             id: String,
//             title: String,
//             descriptiom: String,
//             formData: [
//                 {
//                     inputid: String,
//                     type: String,
//                     inputDatas: {
//                         title: String,
//                         placeholder: String,
//                         required: Boolean,
//                         data: {
//                             id: String,
//                             field: String
//                         }
//                     }
//                 }
//             ]
//         }
//     ]
// }


// return(
//     <App>
//         <Forms>
//             <FormNAmeList>
                
//             </FormNAmeList>
//             <Modal>

//             </Modal>
//         </Forms>
//     </App>
// )


import React, { useState, useContext } from 'react';
import InputField from './InputField';
// import { FormContext } from '../context/FormContext';
// import InputField from './InputField';

// const INPUT_TYPES = ['text', 'email', 'number'];



function Component() {
//   const { state, dispatch } = useContext(FormContext);

//   const { editable, editableInput } = state;

  // console.log(state.editableInput);

  const [selectedButton, setSelectedButton] = useState(null);
const [dddd, setddd] = useState([])


//   const canceled = () => {
//     setSelectedButton(null);
//     dispatch({
//       type: 'CANCEL_EDIT',
//     });
//   };

  const handleClick = (type) => {
    setSelectedButton(type);
    setddd((prev) => [...prev, type]);
    console.log(dddd)
    console.log(type)
    // dispatch({
    //   type: 'CANCEL_EDIT',
    // });
  };

//   const onNameChange = (e) => {
//     // dispatch({
//     //   type: 'NAME_CHANGE',
//     //   payload: e.target.value,
//     // });
//   };

  return (
    <>
      {/* <input
        type='text'
        onChange={onNameChange}
        className='form-control'
        placeholder='Form name'
      /> */}

      <div>
        <button
          className='btn btn-danger mr-1 mt-2'
          onClick={() => handleClick('text')}
        >
          Text Input
        </button>
        <button
          className='btn btn-danger mr-1 mt-2'
          onClick={() => handleClick('email')}
        >
          Email
        </button>
        <button
          className='btn btn-danger mr-1 mt-2'
          onClick={() => handleClick('number')}
        >
          Number
        </button>
        <button
          className='btn btn-danger mr-1 mt-2'
          onClick={() => handleClick('radio')}
        >
          Single Choice
        </button>
        <button
          className='btn btn-danger mr-1 mt-2'
          onClick={() => handleClick('checkbox')}
        >
          Multiple Choice
        </button>

        { selectedButton &&(
             dddd.map(d =>(
                <InputField id ={Math.random()} type = {d} key = {d}/>
            ))
        )
           
        }

        {/* {!editable && selectedButton && (
          <Inpucanceled={canceled}tField  type={selectedButton} />
        )} */}
      </div>
    </>
  );
}

export default Component;
