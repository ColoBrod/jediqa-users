import React, { useEffect } from 'react';

// Components
import { Outlet } from 'react-router-dom';
import { useGetAllUsersQuery } from './store/api';

const App = () => {
  useGetAllUsersQuery({});

  // const { status, data } = useGetAllUsersQuery();
  // console.log(status);
  // console.log('Data:', data);

  // useEffect(() => {
  //   console.log(data);
  // }, [status])

  // if (status === 'p')

  return <Outlet />;
};

export default App;


