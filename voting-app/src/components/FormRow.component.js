import React from 'react'

const FormRow = ({ type, name, value, handelChange, labelText, error }) => {
    return (
        <div className='form-row'>
            <label htmlFor={name}>
                {labelText || name}
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={handelChange}
                    className={`form-input ${error && 'error'}`}
                />
            </label>
        </div>
    )
}

export default FormRow;