/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import { HourCellProps } from '../../utils/types';

const HourCell: React.FC<HourCellProps> = ({
  day,
  bt,
  et,
  data,
  setData,
  isMouseDown,
  setIsMouseDown,
}) => {
  const isCellSelected = () => {
    return data[day].some(
      (interval: { bt: number; et: number }) => interval.bt === bt && interval.et === et,
    );
  };

  const toggleCell = () => {
    const dayData = data[day];
    const index = dayData.findIndex(
      (interval: { bt: number; et: number }) => interval.bt === bt && interval.et === et,
    );

    if (index === -1) {
      setData({ ...data, [day]: [...dayData, { bt, et }] });
    } else {
      setData({
        ...data,
        [day]: dayData.filter((_, i: number) => i !== index),
      });
    }
  };

  return (
    <td
      className={isCellSelected() ? 'hour-cell_selected' : ''}
      onMouseDown={() => {
        setIsMouseDown(true);
        toggleCell();
      }}
      onMouseOver={() => {
        if (isMouseDown) {
          toggleCell();
        }
      }}
    >
    </td>
  );
};

export default HourCell;
