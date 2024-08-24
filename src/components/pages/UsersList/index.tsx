import React from 'react';
import Users from '~/components/blocks/Users';
import { useGetAllUsersQuery } from '~/store/api';

const UsersList = () => {
  const { data, status } = useGetAllUsersQuery({});
  const users = data?.results || [];

  return (
    <div className="page page__users-list">
      <h1>UsersList</h1>
      <Users list={users}/>
    </div>
  );
}

export default UsersList;
