import SubHeader from 'components/SubHeader'
import React from 'react'

export default function AccountProfileScreen() {
  return (
    <div className="flex flex-1 flex-col">
      <SubHeader />
      <p>
        現状の登録内容です。お間違いなければ暗証番号を入力し、｢次へ｣をタップしてお進みください。
      </p>
    </div>
  )
}
