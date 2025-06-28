import React from 'react'
import DynamicPage from '../../components/DynamicPage'
import { useGetUsersQuery } from '../../../Redux/services/Userservice';
function Users() {
  let {data, isLoading, isError} = useGetUsersQuery({ page: 1, size: 10 });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading users</p>;

//   const dataSource = [
//   {
//     key: '1',
//     name: 'Mike',
//     age: 32,
//     address: '10 Downing Street',
//   },
//   {
//     key: '2',
//     name: 'John',
//     age: 42,
//     address: '10 Downing Street',
//   },
// ];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Surname',
    dataIndex: 'surname',
    key: 'surname',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
];
  return (
  <DynamicPage columns={columns} data={data} />
  )
}

export default Users