import React, { useState } from 'react';

function useError(validations) {
    const initialState = createInitialState(validations);
    const [errors, setErrors] = useState(initialState);
    function validadeInfos(e) {
        const { name, value } = e.target;
        const newState = { ...errors };
        newState[name] = validations[name](value);
        setErrors(newState);
    }

    function canISend() {
        for (let value in errors) {
            if (!errors[value].valid) {
                return false
            }
        }
        return true;
    }

    function createInitialState(validations) {
        const initialState = {};
        for (let value in validations) {
            initialState[value] = {
                valid: true,
                text: ""
            }
        }
        return initialState;
    }

    return [errors, validadeInfos, canISend];
}

export default useError;