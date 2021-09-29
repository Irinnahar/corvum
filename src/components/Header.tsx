import { Nav } from 'react-bootstrap';

export const Header = () => {
  return (
    <Nav activeKey="/home" style={{ padding: '10px' }}>
      <Nav.Item>
        <img src={'Octocat.png'} style={{ width: '100px' }} />
        <span style={{ fontSize: '2rem', fontWeight: 400 }}> Github Users</span>
      </Nav.Item>
    </Nav>
  );
};
