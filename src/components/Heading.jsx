import React from 'react'

const Heading = (props) => {
  return (
    <props.as className={`${props.type == "banner"? "font-pop font-semibold":"font-frank font-bold"} text-large`}>{props.text}</props.as>
  )
}

export default Heading