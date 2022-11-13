import Note from './Note';
import PropTypes from 'prop-types';
import useLocalization from '../hooks/useLocalization';

const NoteList = ({ notes }) => {
  const localization = useLocalization().components.noteList;

  if (notes.length === 0) {
    return (
      <div className='w-full px-6 py-4 text-center text-corn-900 dark:text-gray-100'>
        {localization.notFound}
      </div>
    );
  }
  return (
    <div className='flex flex-col gap-2 md:grid md:grid-cols-4'>
      {notes.map((item) => {
        return (
          <Note
            key={item.id}
            id={item.id}
            title={item.title}
            body={item.body}
            createdAt={item.createdAt}
            archived={item.archived}
          />
        );
      })}
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
