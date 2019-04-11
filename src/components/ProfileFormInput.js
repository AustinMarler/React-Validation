import React from 'react'

const ProfileFormInput = (props) => (
  <div className="flex-column">
    <label htmlFor={props.inputName.toLowerCase()}>{props.inputName} <span id="nameErr" className="hidden">{props.errorStr}</span></label>
    <input onChange={props.onChange} type={props.inputType} id={props.inputName.toLowerCase()} name={props.inputName.toLowerCase()} placeholder={props.inputName + " " + props.errorStr} value={props.value} />
  </div>
)

export default ProfileFormInput