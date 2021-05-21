import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CreateWorkout() {
  const [lifts, setLifts] = useState([
    { id: 'squat', title: 'Squat', selected: false },
    { id: 'press', title: 'Press', selected: false },
  ]);

  const clicked = () => {};

  return (
    <div>
      <Link to='/logbook'>Cancel</Link>
      <h1>New Workout</h1>
      <input type='date' />
      <div>
        <h2>Select Your Lifts</h2>
        <div>
          {lifts.map((lift) => {
            return (
              <div onClick={clicked}>
                <li>{lift.title}</li>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CreateWorkout;
