import React from "react";

function FormInput({ label, name, placeholder, type }) {
  return (
    <label className="form-control w-full ">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full "
      />
    </label>
  );
}

export default FormInput;
