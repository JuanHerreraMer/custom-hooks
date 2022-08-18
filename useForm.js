import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
  
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value, //Prop computada de objeto, variable entre corchetes
        })
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    const onResetFormWithFocusRef = (focusRef) => {
        setFormState(initialForm);
        focusRef.current.select();
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        onResetFormWithFocusRef,
    }
}
