import PropTypes from 'prop-types';
import { BiFilterAlt, BiSearch } from 'react-icons/bi';
import useLocalization from '../hooks/useLocalization';

const NoteSearch = ({ title, setSearchParamsHandler }) => {
  const localization = useLocalization().components.noteSearch;

  return (
    <section id='search_section' className='w-full'>
      <div className='relative flex flex-col p-4 overflow-hidden bg-white border rounded-lg border-corn-200 dark:bg-gray-800 dark:border-gray-900'>
        <h2 className='mb-3 text-base font-semibold text-corn-900 md:text-xl dark:text-gray-100'>
          <BiFilterAlt className='inline mr-2 text-2xl' />
          {localization.title}
        </h2>
        <p className='text-sm font-normal text-corn-600 dark:text-gray-400'>
          {localization.description}
        </p>
        <form
          id='searchNote'
          className='flex flex-row mt-3 space-x-2 rounded-lg hover:bg-corn-100 hover:shadow dark:hover:bg-gray-900'
        >
          <div className='relative grow'>
            <button
              id='searchSubmit'
              type='submit'
              className='absolute inset-y-0 right-0 flex items-center p-3 rounded-lg hover:bg-corn-200 dark:hover:bg-gray-600 text-corn-900 dark:text-gray-100'
            >
              <BiSearch />
            </button>
            <input
              type='text'
              id='searchNoteTitle'
              className='bg-corn-50 text-corn-900 dark:text-gray-100 dark:bg-gray-700 text-sm rounded-lg focus:ring-corn-500 focus:border-corn-500 dark:focus:ring-gray-600 dark:focus:border-gray-500 block w-full px-4 py-2.5 hover:bg-corn-100 dark:hover:bg-gray-600'
              placeholder={localization.placeholder}
              value={title}
              onChange={(event) => setSearchParamsHandler(event.target.value)}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

NoteSearch.propTypes = {
  title: PropTypes.string.isRequired,
  setSearchParamsHandler: PropTypes.func.isRequired,
};

export default NoteSearch;
