import { UsersInterface } from './UserInterface';
import React, { Fragment, FunctionComponent } from 'react'; // importing FunctionComponent
import { Button, Card, Table } from 'react-bootstrap';

interface users {
  users: UsersInterface[];
}
export const Users: FunctionComponent<users> = ({ users }) => {
  return (
    <Fragment>
      <Table striped bordered hover style={{ margin: '15px' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Profile Link</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.login}</td>
              <td>
                <img
                  src={user.avatar_url}
                  style={{ height: '50px', width: '50px' }}
                />
              </td>
              <td>
                <a
                  style={{ color: 'black', textDecoration: 'none' }}
                  href={user.html_url}
                >
                  {user.html_url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {users.map((user) => {
        <p>{user.login}</p>;
      })}
    </Fragment>
  );
};
