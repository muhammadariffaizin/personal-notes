import PropTypes from "prop-types";

const Input = ({
  id,
  label,
  type,
  placeholder,
  limitLength,
  value,
  onChangeHandler,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-corn-900 dark:text-gray-100"
      >
        {label}
      </label>
      <div className="relative flex flex-row">
        <button
          id="searchSubmit"
          type="submit"
          className="absolute right-0 flex items-center p-3 text-xs rounded-lg -top-8 text-corn-900 dark:text-gray-100"
        >
          {value.length}/{limitLength}
        </button>
        <input
          type={type}
          name={id}
          id={id}
          className="bg-corn-50 dark:bg-gray-700 text-corn-900 dark:text-gray-100 text-sm rounded-lg focus:ring-corn-400 dark:focus:ring-gray-600 focus:border-corn-400 dark:focus:border-gray-600 block w-full p-2.5 hover:bg-corn-100 dark:hover:bg-gray-600 hover:shadow"
          placeholder={placeholder}
          maxLength={limitLength}
          onChange={onChangeHandler}
          required
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  limitLength: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default Input;
