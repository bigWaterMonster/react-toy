import React from 'react'

// __WebpackModuleApi.RequireContext
const req = require.context('../../assets/icons', false, /\.svg$/)
req.keys().forEach(req)

type Props = {
  name: string
}

function SvgIcon(props: Props) {
  return (
    <svg className="icon">
      <use xlinkHref={ `#${props.name}` }/>
    </svg>
  )
}

export default SvgIcon
