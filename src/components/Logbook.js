import React from 'react';
import { Link } from 'react-router-dom';

const Logbook = () => {
  return (
    <div>
      <h1>Logbook</h1>
      <button>
        <Link to='/workout/create'> New Workout </Link>
      </button>
    </div>
  );
};

export default Logbook;
