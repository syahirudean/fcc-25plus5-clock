import React, { useContext, useState } from 'react';
import Button from './Button';
import { SettingContext } from '../context/SettingsContext';

const SetPomodoro = () => {
  const { updateExecute } = useContext(SettingContext);
  const [newTimer, setNewTimer] = useState({
    work: 0.3,
    short: 0.2,
    long: 1,
    active: 'work',
  });

  const handleChange = (input) => {
    const { name, value } = input.target;
    switch (name) {
      case 'work':
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;
      case 'short':
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        });
        break;
      case 'long':
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        });
        break;
      default:
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer)
  };

  return (
    <div>
      <form>
        <input
          type="number"
          name="work"
          className="form-control"
          onChange={handleChange}
          value={newTimer.work}
        />
        <input
          type="number"
          name="short"
          className="form-control"
          onChange={handleChange}
          value={newTimer.short}
        />
        <input
          type="number"
          name="long"
          className="form-control"
          onChange={handleChange}
          value={newTimer.long}
        />
        <Button title="Set Timer" _callback={handleSubmit} />
      </form>
    </div>
  );
};

export default SetPomodoro;
