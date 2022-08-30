export default function Input({
  id,
  label,
  type,
  placeholder,
  limitlength,
  value,
  ...rest
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-corn-900"
      >
        {label}
      </label>
      <div className="flex flex-row relative">
        <button
          id="searchSubmit"
          type="submit"
          className="flex absolute -top-8 right-0 items-center p-3 rounded-lg text-xs"
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
}
