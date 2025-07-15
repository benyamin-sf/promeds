import translate from '../utils/langMapping';

export default function FormSelect({
  options,
  id,
  name,
  customValue,
  labelText,
  defaultValue,
  onChange,
  required = true,
  disabled = false,
}) {
  const objKeys = Object.keys(options);

  return (
    <div className='form-row'>
      <label htmlFor={id || labelText} className='form-label'>
        {labelText}
      </label>
      <select
        name={name}
        id={id || labelText}
        className='form-select'
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        onChange={onChange}
        value={customValue}
        lang='fa-IR'
      >
        {Object.values(options).map((value, idx) => {
          return (
            <option
              key={idx}
              label={translate(value)}
              value={objKeys[idx] === 'NULL' ? '' : value}
            >
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
}
