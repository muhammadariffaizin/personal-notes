import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils';

const Note = ({ id, title, body, createdAt }) => {
  return (
    <div
      id={id}
      className='relative flex flex-col overflow-hidden bg-white border rounded-lg border-corn-200 dark:bg-gray-800 dark:border-gray-900'
    >
      <div className='h-full p-4 sm:p-6'>
        <h2 className='mb-3 text-lg font-semibold break-all text-corn-900 md:text-xl dark:text-gray-100'>
          <Link to={'/note/' + id}>{title}</Link>
        </h2>
        <p className='text-sm font-normal text-corn-600 dark:text-gray-400'>
          {showFormattedDate(createdAt)}
        </p>
        <p className='break-all line-clamp-3 text-corn-800 dark:text-gray-200'>
          {body.split(/\n/).map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

Note.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Note;
