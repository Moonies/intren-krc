import React from 'react'
import SubHeader from 'components/SubHeader'
import styled from './AccountProfileScreen.style'
import ItemList from './components/ItemList'
import Text from 'components/Text'
import InputText from 'components/InputText'
import RoundButton from 'components/RoundButton'
import { colors } from 'theme'
import { useNavigate } from 'react-router-dom'

export default function AccountProfileScreen() {
  const navigation = useNavigate()

  return (
    <div className="flex flex-1 flex-col">
      <SubHeader />
      <div className="flex justify-center font-semibold">
        <Text fontSize={20}>
          現状の登録内容です。{'\n'}
          お間違いなければ暗証番号を入力し、{'\n'}
          ｢次へ｣をタップしてお進みください。
        </Text>
      </div>
      <SubHeader height={2} />

      <styled.Container>
        <ItemList
          left={<Text fontSize={22}>お名前</Text>}
          right={<Text fontSize={22}>三菱 {'    '}太郎</Text>}
          className="flex  text-left"
        />
        <ItemList
          left={<Text fontSize={22}>生年月日</Text>}
          right={<Text fontSize={22}>1919年8月15日</Text>}
          className="flex text-left mt-4"
        />
        <ItemList
          left={<Text fontSize={22}>店番</Text>}
          right={<Text fontSize={22}>001</Text>}
          className="flex text-left mt-4"
        />
        <ItemList
          left={<Text fontSize={22}>店名</Text>}
          right={<Text fontSize={22}>本店</Text>}
          className="flex text-left mt-4"
        />
        <ItemList
          left={<Text fontSize={22}>口座番号</Text>}
          right={<Text fontSize={22}>1234567</Text>}
          className="flex text-left mt-4"
        />
        <ItemList
          left={<Text fontSize={22}>暗証番号</Text>}
          right={
            <InputText
              onChange={e => console.log(e.target.value)}
              placeHolder=""
              size={126}
            />
          }
          className="flex text-left mt-4 align-middle"
        />
        <div className="mt-4">
          <RoundButton
            title="次へ"
            fontSize={32}
            color={colors.darkBlue}
            boxShadowColor={colors.gray[1]}
            width={188}
            onClick={() => navigation('/AccountProfileAddress')}
          />
        </div>
      </styled.Container>
    </div>
  )
}
