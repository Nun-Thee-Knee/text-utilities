import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div>
      <div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Sucess</strong>: {props.alert}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
    </div>
  )
}
