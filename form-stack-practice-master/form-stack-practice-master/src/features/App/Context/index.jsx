import React, {useReducer, createContext } from 'react'

const FormContext = createContext();

const init = {
    
        // forms:[
        //     currentform =  id,
        //     {
                // id: String,
                // title: String,
                // descriptiom: String,
                formData: [
                   {
                            // id: Math.random(),
                            type: 'text',
                        // inputDatas: {
                            title: null,
                            placeholder: null,
                            required: false,
                            helperText: null
                            // data: {
                            //     id: String,
                            //     field: String
                            // }
                        // }
                    },
                    {
                        // id: Math.random(),
                        type: 'text',

                    // type: String,
                    // inputDatas: {
                        title: null,
                        placeholder: null,
                        required: false,
                        helperText: null
                        // data: {
                        //     id: String,
                        //     field: String
                        // }
                    // }
                }
                ]
        //     },
        // ]
}

const reducer = (state,action) => {
    switch(action.type) {
        case 'ADD_INPUT' : {
            let {formData} = state;



            formData.push(action.payload);
            console.log(formData)
            return {
                ...state,
                formData
            }
            // console.log(formData)
        };
        case 'ADD_FIELD' : {
            let {formData} = state;
            // let [obj] = formData;
            // obj.title = action.payload
            // obj.placeholder = action.payload.placeholder;
            // obj.required = action.payload.required
            // obj.placeholder = action.payload.placeholder;
            // obj.required = action.payload.required;

            let obj = formData.find((form) => form.id ===action.payload.id);
            console.log(obj)
            obj.title = action.payload.field
            return {
                ...state,
                formData
            }

        }
        case 'ADD_PLACEHOLDER' : {
            let {formData} = state;
            // let [obj] = formData;
            let obj = formData.find((form) => form.id ===action.payload.id)

            // obj.title = action.payload.title;
            // obj.required = action.payload.required
            obj.placeholder = action.payload.placeholder
            // obj.required = action.payload.required;
            return {
                ...state,
                formData
            }

        }
        case 'ADD_HELPERTEXT' : {
            let {formData} = state;
            let obj = formData.find((form) => form.id ===action.payload.id)

            // let [obj] = formData;
            // obj.title = action.payload.title;
            // obj.placeholder = action.payload.placeholder;
            obj.helperText = action.payload.helperText
            // obj.placeholder = action.payload.placeholder;
            // obj.required = action.payload.required;
            return {
                ...state,
                formData
            }

        }
        case 'ADD_REQUIRED' : {
            let {formData} = state;
            // let [obj] = formData;
            let obj = formData.find((form) => form.id ===action.payload.id)

            // obj.title = action.payload.title;
            // obj.placeholder = action.payload.placeholder;
            obj.required = action.payload
            // obj.placeholder = action.payload.placeholder;
            // obj.required = action.payload.required;
            return {
                ...state,
                formData
            }

        }
        default :{
            return state
        }
    }
}

export function FormProvider({children}) {
    const [state, dispatch] = useReducer(reducer, init)
    return (
        <FormContext.Provider value={{state, dispatch}}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext
