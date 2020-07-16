import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export default function dashboard() {
  return (
    <Card bg="light" style={{ width: '8rem', height: '8rem' }}>
      <Card.Body>
        <Card.Text>Kitchen</Card.Text>
        <Card.Title>25°C</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">57% hum</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
