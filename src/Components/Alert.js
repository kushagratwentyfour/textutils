import React from 'react'

export default function Alert(props) {
    return (
       // <div>
         props.alert &&   <div class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>{props.alert.message}  </strong>   { props.alert.type}        
            </div>
      //  </div>
    )
}
