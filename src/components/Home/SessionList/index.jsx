import PropTypes from 'prop-types';
import React from 'react';
import SessionStatus from '../SessionStatusBox';
import './styles';

const SessionList = ({
  sessions, title, push, path,
}) => {
  const cards = sessions
  && sessions.map(session => <SessionStatus session={session} push={push} path={path} />);
  return (
    <div className="sessionList">
      <h2>{title}</h2>
      <div className="cardHolders">
        { cards }
      </div>
    </div>
  );
};

SessionList.propTypes = {
  sessions: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  push: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};
export default SessionList;
