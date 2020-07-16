import React from 'react';
import Container from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Container';
import styles from './NavBar.module.css';
import Link from 'next/link';

export default function NavBar() {
  return (
    <div>
      <Col md={2} className={`${styles.sidebar} d-none`}></Col>
    </div>
  );
}
