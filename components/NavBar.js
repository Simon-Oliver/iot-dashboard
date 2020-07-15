import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

export default function NavBar() {
  return (
    <Container>
      <Nav fill variant="pill" defaultActiveKey="/">
        <Nav.Item>
          <Link href="/" passHref>
            <Nav.Link active>Active</Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/dashboard" passHref>
            <Nav.Link eventKey="link-1">Dashboard</Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/" passHref>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}
