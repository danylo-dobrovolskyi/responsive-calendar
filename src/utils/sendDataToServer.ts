/* eslint-disable no-console */
import { DayData } from './types';

export const sendDataToServer = async (data: DayData) => {
  try {
    const response = await fetch('https://your-api-url.com/endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    console.log('Data saved successfully:', result);
  } catch (error) {
    console.error('Error while sending data to server:', error);
  }
};
