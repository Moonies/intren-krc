import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import SubHeader from 'components/SubHeader'
import RoundButton from 'components/RoundButton'
import styled from './AccuntLoginScreen.style'
import { colors } from 'theme'
import InputText from 'components/InputText'
export default function AccountLoginScreen() {
  const [receiptNumber, setReceiptNumber] = useState('')
  return (
    <div>
      <SubHeader />
      <styled.Container>
        <p>受付番号を入力ください。</p>
        <InputText onChange={e => setReceiptNumber(e.target.value)} />
        <RoundButton
          title="text"
          fontSize={24}
          color={colors.primary}
          width={256}
          onClick={() => console.log('click')}
        />
      </styled.Container>
    </div>
  )
}
