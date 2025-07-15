export default function FormInput({
  id,
  labelText,
  name,
  type = 'text',
  defaultValue = '',
  onChange,
  isRequired = false,
}) {
  return (
    <div className='form-row'>
      <label htmlFor={id} className='form-label'>
        {labelText}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        className='form-input'
        defaultValue={defaultValue}
        required={isRequired}
        onChange={onChange}
        autoComplete={name}
      />
    </div>
  );
}
