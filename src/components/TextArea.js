import PropTypes from 'prop-types';

const TextArea = ({ id, label, placeholder, value, onChangeHandler }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className='block mb-2 text-sm font-medium text-corn-900 dark:text-gray-100'
      >
        {label}
      </label>
      <textarea
        id={id}
        className='bg-corn-50 dark:bg-gray-700 text-corn-900 dark:text-gray-100 text-sm rounded-lg focus:ring-corn-400 dark:focus:ring-gray-600 focus:border-corn-400 dark:focus:border-gray-600 block w-full p-2.5 hover:bg-corn-100 dark:hover:bg-gray-600 hover:shadow'
        placeholder={placeholder}
        rows='4'
        value={value}
        onChange={onChangeHandler}
      ></textarea>
    </div>
  );
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeHandler: PropTypes.func,
};

export default TextArea;
