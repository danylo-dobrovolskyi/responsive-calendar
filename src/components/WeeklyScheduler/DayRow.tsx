/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import HourCell from './HourCell';
import { DayRowProps } from '../../utils/types';

const DayRow: React.FC<DayRowProps> = ({
  day,
  data,
  setData,
  isMouseDown,
  setIsMouseDown,
}) => {
  const toggleAllDay = () => {
    const dayData = data[day];

    if (dayData.length === 24) {
      setData({ ...data, [day]: [] });
    } else {
      setData({
        ...data,
        [day]: Array.from({ length: 24 }, (_, i) => ({
          bt: i * 60,
          et: (i + 1) * 60 - 1,
        })),
      });
    }
  };

  return (
    <tr>
      <td className={data[day].length > 0 ? 'day-row_selected' : ''}>
        {day.toUpperCase()}
      </td>
      <td
        className={`day-row__all-day ${
          data[day].length === 24 ? 'day-row__all-day_selected' : ''
        }`}
        onClick={toggleAllDay}
      >
        {data[day].length === 24 && <i className="fa fa-check fa-lg"></i>}
      </td>
      {Array.from({ length: 24 }, (_, i) => (
        <HourCell
          key={i}
          day={day}
          bt={i * 60}
          et={(i + 1) * 60 - 1}
          data={data}
          setData={setData}
          isMouseDown={isMouseDown}
          setIsMouseDown={setIsMouseDown}
        />
      ))}
    </tr>
  );
};

export default DayRow;
