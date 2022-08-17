import React from "react";

const FormInput = ({label, ...otherProps}) => {
    return <div className="label-input-pair">
        <label>{label}</label>
        <input {...otherProps} />
    </div>
}
export default FormInput;