import React, { useCallback } from 'react'
// import { GroupRoute } from '../../navigation'\
import TitleHeader from './components/TitleHeader'
export type HeaderTypeParams = {
  groupHeader?: string
}
export default function Header({ groupHeader }: HeaderTypeParams) {
  const textGroupHeader = useCallback(() => {
    switch (groupHeader) {
      case 'register':
        return '登録内容変更フォーム'

      default:
        ''
        break
    }
  }, [groupHeader])
  return (
    <>
      <img
        src={require('../../asset/images/iseto.png')}
        className="w-full"
      ></img>
      <TitleHeader title={textGroupHeader()} />
    </>
  )
}
