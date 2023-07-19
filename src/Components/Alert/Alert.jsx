import React from 'react';
import Alert from 'react-bootstrap/Alert';

function AccountInactiveMessage() {
  return (
    <Alert variant="danger">
      This account is inactive.
    </Alert>
  );
}

export default AccountInactiveMessage;
