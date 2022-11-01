const Input = ({
  id,
  label,
  type,
  placeholder,
  limitlength,
  value,
  ...rest
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-corn-900"
      >
        {label}
      </label>
      <div className="relative flex flex-row">
        <button
          id="searchSubmit"
          type="submit"
          className="absolute right-0 flex items-center p-3 text-xs rounded-lg -top-8"
        >
          {value.length}/{limitlength}
        </button>
        <input
          type={type}
          name={id}
          id={id}
          className="bg-corn-50 text-corn-900 text-sm rounded-lg focus:ring-corn-400 focus:border-corn-400 block w-full p-2.5 hover:bg-corn-100 hover:shadow"
          placeholder={placeholder}
          {...rest}
          required
        />
      </div>
    </div>
  );
};

export default Input;
