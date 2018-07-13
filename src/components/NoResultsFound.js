import React from 'react';

const NoResultsFound = ({searchTerm}) => {
  return (
    <div>
      <center>
        <h1>
          SORRY, NO RESULTS FOUND FOR "{searchTerm}"
        </h1>
      </center>
    </div>
  );
};

export default NoResultsFound;
