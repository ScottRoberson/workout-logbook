import React from 'react';
import { Link } from 'react-router-dom';

function CreateWorkout() {
  return (
    <div>
      <Link to='/logbook'>Cancel</Link>
      <h1>New Workout</h1>
      <input type='date' />
    </div>
  );
}

export default CreateWorkout;
