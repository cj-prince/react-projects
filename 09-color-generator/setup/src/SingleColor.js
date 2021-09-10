import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false);
  const ccc = rgb.join(',')
  const hex = rgbToHex(...rgb)
  return <article className={'color'} style={
    {backgroundColor:`rgb(${ccc})`}}>
      <p className='percent-value'>{weight}%</p>
      {/* <p className='color-value'>{hex}</p> */}
      <p className='color-value'>{hexColor}</p>
      </article>
}

export default SingleColor
