import { UsersInterface } from './UserInterface';
import React, { Fragment, FunctionComponent } from 'react'; // importing FunctionComponent
import { Button, Card, Table } from 'react-bootstrap';

interface users {
  users: UsersInterface[];
}
export const Users: FunctionComponent<users> = ({ users }) => {
  return (
    <Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Profile Link</th>
            <th>Details</th>
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
                <a href={user.html_url}>{user.html_url}</a>
              </td>
              <td>
                <Button variant="dark">Details</Button>
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
