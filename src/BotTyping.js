import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function BotTyping() {
  return (
    <div style={{ padding: '20px 20px 20px 20px' }}>
      <Spinner animation="grow" variant="secondary" size="sm" /> &nbsp;
      <Spinner animation="grow" variant="secondary" size="sm" /> &nbsp;
      <Spinner animation="grow" variant="secondary" size="sm" /> &nbsp;
      {/* <div class="spinner-grow text-secondary" role="status" size="sm">
        <span class="sr-only">Loading...</span>
    </div>&nbsp;&nbsp;
    <div class="spinner-grow text-secondary" role="status" size="sm">
        <span class="sr-only">Loading...</span>
    </div>&nbsp;&nbsp;
    <div class="spinner-grow text-secondary" role="status" size="sm">
        <span class="sr-only">Loading...</span>
    </div> */}
    </div>
  );
}
