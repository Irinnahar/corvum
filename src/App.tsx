import React, { Fragment } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UsersInterface } from './components/UserInterface';
import Container from 'react-bootstrap/Container';
import { Button, Card } from 'react-bootstrap';
import { Header } from './components/Header';
import { Users } from './components/Users';

// import { Users } from './components/Users';

function App() {
  const baseUrl = 'https://api.github.com';
  const defaultUsers: UsersInterface[] = [];

  const [users, setUsers]: [
    UsersInterface[],
    (users: UsersInterface[]) => void
  ] = React.useState(defaultUsers);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] =
    React.useState('');

  React.useEffect(() => {
    axios
      .get<UsersInterface[]>(`${baseUrl}/users`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((ex) => {
        const error =
          ex.response.status === 404
            ? 'Resource Not found'
            : 'An unexpected error has occurred';
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <Fragment>
      <Header />
      <Container>
        <Users users={users} />;{error && <p className="error">{error}</p>}
      </Container>
    </Fragment>
  );
}

export default App;
