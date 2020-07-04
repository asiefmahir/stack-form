import React, {useContext} from 'react'
import Title from './Title';
// import FormContext from './Context';
import FormContext from './Context/index'

export default function OutputContainer() {
    const {state} = useContext(FormContext);
    let {formData} = state;
    // let [obj] = formData;
    // let obj = formData.find((form) => form.id ===action.payload.id)

    return (
        <div>
            {formData.map((obj) => {
                if(obj.type === 'text') {
                    return (
                        <div>
            <Title key={obj.id} title = {obj.title} placeholder={obj.placeholder} required={obj.required} helperText={obj.helperText}/>
        </div>
                    )
                }
            } )}
        </div>
    )
}
