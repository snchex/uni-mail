import React from 'react'
import { Navigate } from 'react-router-dom';

export function LoginPage() {
  const onLogin = () => {
    Navigate('/mail/list', {
      replace: true,
    });
  };
  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />
      <button className='btn btn-primary' onClick={onLogin}>Login</button>
    </div>
  )
}
