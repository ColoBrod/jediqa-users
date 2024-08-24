import React from 'react';
import { useGetAllUsersQuery } from '~/store/api';

const FavoriteUsers = () => {
  const { data, status } = useGetAllUsersQuery({});

  return (
    <div className="page page__favorite-users">
      <h1>FavoriteUsers</h1>
    </div>
  );
}

export default FavoriteUsers;
