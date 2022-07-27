import React from 'react'

export const CustomerForm = ({firstName}) =>
    <form id="customer">
        <input readOnly type="text" name="firstName" value={firstName}/>
    </form>

