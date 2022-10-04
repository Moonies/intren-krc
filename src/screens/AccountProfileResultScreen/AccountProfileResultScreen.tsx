import React from 'react'
import ListItem from 'components/ListItem'
import { useLocation } from 'react-router-dom'
import Text from 'components/Text'
import SubHeader from 'components/SubHeader'

import styled from './AccountProfileResultScreen.style'
import { AccountProfile } from 'screens/AccountProfileAddressScreen/hooks/useAccount'
import Image from 'components/image'
import RoundButton from 'components/RoundButton'
import { colors } from 'theme'

export default function AccountProfileResultScreen() {
  const location = useLocation()
  const accountProfileResultData = location.state as AccountProfile

  return (
    <div className="flex flex-1 flex-col">
      <SubHeader />
      <div className="flex justify-center font-semibold mt-2">
        <Text fontSize={22}>
          内容にお間違いなければ、{'\n'} 登録ボタンを押してください。
        </Text>
      </div>
      <SubHeader height={2} />
      <styled.Container>
        <div className="flex mt-2">
          <div className="align-top mt-2">
            <ListItem />
          </div>
          <div className="ml-4 w-full">
            <div className="flex w-full">
              <Text fontSize={22}>郵便番号</Text>
            </div>
            <div className="flex flex-col mt-2 items-start ml-12 text-start">
              <Text fontSize={22}>
                {accountProfileResultData?.postCode || '103-0011'}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="align-top mt-2">
            <ListItem />
          </div>
          <div className="ml-4 w-full">
            <div className="flex w-full">
              <Text fontSize={22}>住所</Text>
            </div>
            <div className="flex flex-col mt-2 items-start ml-12 text-start">
              <Text fontSize={22}>
                {accountProfileResultData?.address ||
                  '東京都中央区日本橋大伝馬町１２－１２'}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="align-top mt-2">
            <ListItem />
          </div>
          <div className="ml-4 w-full">
            <div className="flex w-full">
              <Text fontSize={22}>携帯番号</Text>
            </div>
            <div className="flex flex-col mt-2 items-start ml-12 text-start">
              <Text fontSize={22}>
                {accountProfileResultData?.mobileNumber || '999-9999-9999'}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="align-top mt-2">
            <ListItem />
          </div>
          <div className="ml-4 w-full">
            <div className="flex w-full">
              <Text fontSize={22}>ご自宅電話番号</Text>
            </div>
            <div className="flex flex-col mt-2 items-start ml-12 text-start">
              <Text fontSize={22}>
                {accountProfileResultData?.addressNumber || '登録無し'}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="align-top mt-2">
            <ListItem />
          </div>
          <div className="ml-4 w-full">
            <div className="flex w-full">
              <Text fontSize={22}>携帯アドレス</Text>
            </div>
            <div className="flex flex-col  mt-2 items-start ml-12 text-start">
              <Text fontSize={22}>登録済み</Text>
            </div>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="align-top mt-2">
            <ListItem />
          </div>
          <div className="ml-4 w-full">
            <div className="flex w-full">
              <Text fontSize={22}>本人確認資料</Text>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-around mt-6">
          <div className="self-center">
            <Text fontSize={22}>写真・表</Text>
          </div>
          <Image
            fileSrc={accountProfileResultData?.frontSideImage}
            width={150}
          />
        </div>
        <div className="flex w-full justify-around mt-6">
          <div className="self-center">
            <Text fontSize={22}>写真・裏</Text>
          </div>
          <Image
            fileSrc={accountProfileResultData?.backSideImage}
            width={150}
          />
        </div>
        <div className="flex mt-6 justify-center">
          <RoundButton
            title="登録"
            onClick={() => console.log('click')}
            color={colors.darkBlue}
            boxShadowColor={colors.gray[1]}
            fontSize={34}
            width={216}
          />
        </div>
      </styled.Container>
    </div>
  )
}
