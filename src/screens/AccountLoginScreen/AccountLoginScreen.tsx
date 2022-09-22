import React, { useState } from 'react'
import SubHeader from 'components/SubHeader'
import RoundButton from 'components/RoundButton'
import styled from './AccuntLoginScreen.style'
import { colors } from 'theme'
import InputText from 'components/InputText'
import { useNavigate } from 'react-router-dom'
export default function AccountLoginScreen() {
  const [receiptNumber, setReceiptNumber] = useState('')
  const navigation = useNavigate()
  return (
    <div className="flex flex-1 flex-col">
      <SubHeader />
      <styled.Container className="flex flex-col ">
        <p className="text-xl font-light mt-6">受付番号を入力ください。</p>
        <div className="mt-6">
          <InputText
            onChange={e => setReceiptNumber(e.target.value)}
            placeHolder=""
          />
        </div>
        <div className="flex justify-center mt-14">
          <RoundButton
            title="次へ"
            fontSize={34}
            color={colors.darkBlue}
            boxShadowColor={colors.gray[1]}
            width={216}
            onClick={() =>
              navigation('/AccountProfile', { state: receiptNumber })
            }
          />
        </div>
      </styled.Container>
    </div>
  )
}
