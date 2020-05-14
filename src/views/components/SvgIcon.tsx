import React from 'react'
import classnames from 'classnames'

// __WebpackModuleApi.RequireContext
const req = require.context('../../assets/icons', false, /\.svg$/)
req.keys().forEach(req)

type Props = {
  name: string
} & React.SVGAttributes<SVGElement>

function SvgIcon(props: Props) {
  const { name, children, className, ...rest } = props
  return (
    <svg className={classnames('icon', className)} {...rest}>
      < use xlinkHref={`#${name}`
      } />
    </svg >
  )
}

export default SvgIcon
