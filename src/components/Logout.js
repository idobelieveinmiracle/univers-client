import React from 'react'

export default function Logout(props) {
  props.logout();
  props.history.push('/login');
}
