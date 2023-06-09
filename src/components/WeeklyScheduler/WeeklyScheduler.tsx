/* eslint-disable jsx-a11y/control-has-associated-label */

import React, { useState, useEffect } from 'react';
import './styles/WeeklyScheduler.scss';
import DayRow from './DayRow';
import { WeeklySchedulerProps, DayData } from '../../utils/types';
import { sendDataToServer } from '../../utils/sendDataToServer';

const WeeklyScheduler: React.FC<WeeklySchedulerProps> = ({
  initialData,
  onSaveChanges,
}) => {
  const [data, setData] = useState<DayData>(initialData);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    window.addEventListener('mouseup', () => setIsMouseDown(false));

    return () => window.removeEventListener('mouseup', () => setIsMouseDown(false));
  }, []);

  const days = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];

  return (
    <div>
      <h1 className="weekly-scheduler__title">SET SCHEDULE</h1>
      <div className="weekly-scheduler">
        <table className="weekly-scheduler__table">
          <thead>
            <tr>
              <th></th>
              <th className="weekly-scheduler__table--header">ALL DAY</th>
              {Array.from({ length: 24 }, (_, i) => (
                <th key={i}>{i % 3 === 0 ? `${i}:00` : ''}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((day) => (
              <DayRow
                key={day}
                day={day}
                data={data}
                setData={setData}
                isMouseDown={isMouseDown}
                setIsMouseDown={setIsMouseDown}
              />
            ))}
          </tbody>
        </table>
        <div className="button__container">
          <button
            type="button"
            className="button__container--clear-button"
            onClick={() => setData(days.reduce((acc, day) => ({ ...acc, [day]: [] }), {}))}
          >
            Clear
          </button>
          <button
            type="button"
            className="button__container--save-button"
            onClick={() => {
              onSaveChanges(data);
              sendDataToServer(data);
            }}
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeeklyScheduler;
