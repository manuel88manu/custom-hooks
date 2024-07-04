import { useState } from "react";


export const useForm = (inicialForm={}) => {
    const [formState, setformState] = useState(inicialForm)
    const onResetForm=()=>{
        setformState(inicialForm)
    }

    const onInputChange=({target})=>{
        const {name,value}=target;
        setformState({
            ...formState,
            [name]:value
        })
    }


  return {
            ...formState,
            formState,
            onInputChange,
            onResetForm

  }
}
