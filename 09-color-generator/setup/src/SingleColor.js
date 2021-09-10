import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false);
  const ccc = rgb.join(',')
  const hex = rgbToHex(...rgb)
  useEffect(()=>{
    const timeout = setTimeout(() => {
      setAlert(false)
    },2000)
    return() => clearTimeout(timeout)
  },[alert])
  return <article className={'color'} style={
    {backgroundColor:`rgb(${ccc})`}}
    onClick={() => {
      setAlert(true); navigator.clipboard.writeText(hex)
    }}
    >
      <p className='percent-value'>{weight}%</p>
      {/* <p className='color-value'>{hex}</p> */}
      <p className='color-value'>#{hexColor}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
      </article>
}

export default SingleColor
