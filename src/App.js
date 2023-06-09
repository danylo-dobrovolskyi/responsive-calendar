/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */

// import { React, useState, useEffect } from 'react';
// import './App.scss';
// import WeeklyScheduler from './components/WeeklyScheduler/WeeklyScheduler';
// import { fetchData } from './utils/fetchData';
// import { sendDataToServer } from './utils/sendDataToServer';
// import { DayData } from './types';

// const App = () => {
//   const [data, setData] = useState<DayData | null>(null);

//   useEffect(() => {
//     const getData = async () => {
//       const fetchedData = await fetchData();

//       setData(fetchedData);
//     };

//     getData();
//   }, []);

//   const handleSaveChanges = async (updatedData: DayData) => {
//     console.log('Data saved:', updatedData);
//     await sendDataToServer(updatedData);
//   };

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="App">
//       <WeeklyScheduler initialData={data} onSaveChanges={handleSaveChanges} />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import './App.scss';
import WeeklyScheduler from './components/WeeklyScheduler/WeeklyScheduler';

const initialData = {
  mo: [],
  tu: [],
  we: [],
  th: [],
  fr: [],
  sa: [],
  su: [],
};

const App = () => {
  const handleSaveChanges = (data) => {
    console.log('Data saved:', data);
  };

  return (
    <div className="App">
      <WeeklyScheduler
        initialData={initialData}
        onSaveChanges={handleSaveChanges}
      />
    </div>
  );
};

export default App;
