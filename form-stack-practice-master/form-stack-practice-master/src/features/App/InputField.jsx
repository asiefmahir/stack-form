import React, { useState, useContext } from 'react';
// import { FormContext } from '../context/FormContext';
import FormContext from './Context/index'

function InputField({ type, id, }) {
    const {dispatch} = useContext(FormContext)
    // console.log(dispatch)
//   const {
//     state: { editableInput },
//     dispatch,
//   } = useContext(FormContext);

//   const titleState = editable ? editableInput.title : '';
//   const placeholderState = editable ? editableInput.placeholder : '';
//   const helperState = editable ? editableInput.helperText : '';
//   const requiredState = editable ? editableInput.required : false;
//   const optionState = editable ? editableInput.option : '';
//   const dataState = editableInput ? editableInput.data : [];

  const [title, setTitle] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [helperText, setHelperText] = useState('');
  const [isRequired, setRequired] = useState(false);
  const [option, setOption] = useState([]);

  const [data, setData] = useState([]);

  // const editableData = editable ? editableInput : null;

  const addOption = () => {
    option.length > 1 &&
      setData((prev) => [...prev, { id: Math.random(), field: option }]);
    setOption('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted now time to dispatch');

    const obj = {
      type,
      title,
      placeholder,
      helperText,
      required: isRequired,
      data,
    };
    dispatch({
            type: 'ADD_INPUT',
            payload: obj,
          });

    

    // if (editable) {
    //   dispatch({
    //     type: 'UPDATE_INPUT',
    //     payload: obj,
    //   });
    // } else {
    //   dispatch({
    //     type: 'ADD_INPUT',
    //     payload: obj,
    //   });
    // }
    // canceled();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='mt-3 border border-primary p-3'>
        <div className='lead text-center text-bold'>Add {type}</div>

        <input
          className='form-control mt-2'
          type='text'
          placeholder='Title'
          value={title}
          onChange= {(e) => {
            setTitle( e.target.value)
            dispatch({
              type:'ADD_FIELD',
              payload: {
                id: id,
                field: title
              }
            })
            console.log(title)
          }
          } //setTitle(e.target.value)}
        />
        <input
          className='form-control mt-2'
          type='text'
          placeholder='Placeholder Text'
          value={placeholder}
          onChange={(e) => {
            setPlaceholder(e.target.value)
            dispatch({
              type: 'ADD_PLACEHOLDER',
              payload: placeholder
            })
          }}
        />

        <textarea
          placeholder='Helper Text'
          value={helperText}
          onChange={(e) => {
            setHelperText(e.target.value)
            dispatch({
              type: 'ADD_HELPERTEXT',
              payload: helperText
            })
          }}
          cols='5'
          className='form-control mt-2'
          rows='2'
        ></textarea>

        <div className='input-group mt-2 d-flex align-items-center'>
          <label>Required? </label>
          <input
            value={isRequired}
            checked={isRequired}
            onChange={() => {
              
              setRequired((prev) => !prev)
              dispatch({
                type: 'ADD_REQUIRED',
                payload: isRequired
              })
            }}
            className='ml-2'
            type='checkbox'
          />
        </div>

        {type === 'radio' || type === 'checkbox' ? (
          <>
            <div className='form-group mt-2 form-inline'>
              <input
                value={option}
                onChange={(e) => setOption(e.target.value)}
                type='text'
                className='form-control'
              />
              <button
                type='button'
                onClick={addOption}
                className='btn btn-primary ml-2 '
              >
                +
              </button>
            </div>
            <div className='list-group'>
              {data &&
                data.map((d) => (
                  <li key={d.id} className='list-group-item'>
                    {d.field}
                  </li>
                ))}
            </div>
          </>
        ) : (
          ''
        )}

        <button className='btn btn-dark mr-2 mt-2' type='submit'>
          Add Input
        </button>
        {/* <button className='btn btn-dark mr-2 mt-2' onClick={() => canceled()}>
          Cancel
        </button> */}
      </form>
    </>
  );
}

export default InputField;
