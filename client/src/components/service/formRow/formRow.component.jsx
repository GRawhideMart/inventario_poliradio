import React from "react";

const GenericField = ({
  type,
  id,
  min,
  value,
  tag,
  onChange,
  placeholder,
  required,
}) => (
  <input
    type={type}
    id={tag}
    min={min}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
  />
);

const SelectField = ({ value, tag, onChange, options, lower }) => (
  <select value={value} id={tag} onChange={onChange}>
    {options.map((option) => (
      <option
        value={lower ? option.toLowerCase() : option}
        key={options.indexOf(option)}
      >
        {option}
      </option>
    ))}
  </select>
);

const TextAreaField = ({ tag, value, onChange }) => (
  <textarea id={tag} cols="60" rows="5" value={value} onChange={onChange} />
);

const FormRow = ({
  tag,
  label,
  value,
  onChange,
  type,
  placeholder,
  min,
  required,
  options,
  lower,
}) => {
  return (
    <div className="control-group">
      <label htmlFor={tag} className="control-label">
        <strong>{label}</strong>
      </label>
      <div className="controls">
        {type === "textarea" ? (
          <TextAreaField tag={tag} value={value} onChange={onChange} />
        ) : type === "select" ? (
          <SelectField
            value={value}
            tag={tag}
            onChange={onChange}
            options={options}
            lower
          />
        ) : (
          <GenericField
            type={type}
            id={tag}
            min={min}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
          />
        )}
      </div>
    </div>
  );
};

export default FormRow;
