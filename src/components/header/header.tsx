import React from 'react'
// import { GroupRoute } from '../../navigation'\

// const bannerHeader = require('../../asset/images/iseto.png')
export type HeaderTypeParams = {
  groupHeader?: string
}
export default function Header({ groupHeader }: HeaderTypeParams) {
  console.log(groupHeader)
  return (
    <>
      <img src={require('../../asset/images/iseto.png')}></img>
      {/* {groupHeader === 'register' ? <p>Header Register</p> : null} */}
    </>
  )
}
