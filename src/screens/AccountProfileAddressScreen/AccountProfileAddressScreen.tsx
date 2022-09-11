import React from 'react'
import InputFile from 'components/InputFile'
import InputText from 'components/InputText'
import InputTextArea from 'components/InputTextArea'
import ListItem from 'components/ListItem'
import RoundButton from 'components/RoundButton'
import SubHeader from 'components/SubHeader'
import Text from 'components/Text'
import { colors } from 'theme'
import styled from './AccountProfileAddressScreen.style'
import useAccount from './hooks/useAccount'
import { useNavigate } from 'react-router-dom'

export default function AccountProfileAddressScreen() {
  const { accountData, setAccountData } = useAccount()
  const navigation = useNavigate()

  return (
    <div className="flex flex-1 flex-col">
      <SubHeader />
      <div className="flex justify-center font-semibold mt-2">
        <Text fontSize={18}>変更内容を入力ください。</Text>
      </div>
      <SubHeader height={2} />
      <styled.Container>
        <div className="flex ">
          <div className="align-top mt-2">
            <ListItem />
          </div>
          <div className="ml-4">
            <div className="flex w-full">
              <Text fontSize={18}>郵便番号（ハイフン不要）</Text>
            </div>
            <div className="flex flex-col  items-start mt-2">
              <InputText
                onChange={e =>
                  setAccountData({ ...accountData, postCode: e.target.value })
                }
                placeHolder=""
              />
            </div>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="align-top mt-2">
            <ListItem />
          </div>
          <div className="ml-4">
            <div className="flex w-full">
              <Text fontSize={18}>住所</Text>
            </div>
            <div className="flex flex-col  items-start mt-2">
              <InputTextArea
                onChange={e =>
                  setAccountData({ ...accountData, address: e.target.value })
                }
                placeHolder=""
              />
            </div>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="align-top mt-2">
            <ListItem />
          </div>
          <div className="ml-4">
            <div className="flex w-full">
              <Text fontSize={18}>携帯番号</Text>
            </div>
            <div className="flex flex-col  items-start mt-2">
              <InputText
                onChange={e =>
                  setAccountData({
                    ...accountData,
                    mobileNumber: e.target.value,
                  })
                }
                placeHolder=""
              />
            </div>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="align-top mt-2">
            <ListItem />
          </div>
          <div className="ml-4">
            <div className="flex w-full">
              <Text fontSize={18}>ご自宅電話番号</Text>
            </div>
            <div className="flex flex-col  items-start mt-2">
              <InputText
                onChange={e =>
                  setAccountData({
                    ...accountData,
                    addressNumber: e.target.value,
                  })
                }
                placeHolder=""
              />
            </div>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="align-top mt-2">
            <ListItem />
          </div>
          <div className="flex w-full ml-4">
            <Text fontSize={18}>携帯アドレス</Text>
          </div>
        </div>
        <div className="flex mt-2 justify-center">
          <a href="mailto:abc@example.com?subject = Feedback&body = Message">
            <RoundButton
              title="クリックして空メールを送信"
              onClick={() => console.log('click')}
              color={colors.lightBlue}
              fontSize={16}
              fontColor={colors.primary}
              outlineColor={colors.primary}
              fontWeight={600}
              height={46}
            />
          </a>
        </div>

        <div className="flex flex-row justify-around mt-4  ">
          <Text fontSize={18}>
            受信メールに　{'\n'}記載の番号を　{'\n'}入力ください。
          </Text>
          <div className="flex self-center">
            <InputText
              onChange={e =>
                setAccountData({
                  ...accountData,
                  receivedEmailCode: e.target.value,
                })
              }
              placeHolder=""
              size={144}
            />
          </div>
        </div>
        <div className="flex mt-2">
          <div className="align-top mt-2">
            <ListItem />
          </div>
          <div className="flex w-full ml-4">
            <Text fontSize={18}>本人確認資料WEB提出</Text>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="align-top">
            <Text fontSize={18} color={colors.primary}>
              ※
            </Text>
          </div>
          <div className="flex w-full ml-4 text-justify">
            <Text
              fontSize={18}
              color={colors.primary}
              textDecoration={'underline'}
            >
              当行が認めている本人確認 {'\n'}資料はコチラをご確認ください。
            </Text>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="ml-4">
            <Text fontSize={28}>表</Text>
          </div>
          <div className="ml-8">
            <InputFile
              title="ファイルを選択"
              color={colors.lightBlue}
              onChange={e =>
                setAccountData({
                  ...accountData,
                  frontSideImage: e.target.files,
                })
              }
              fontSize={16}
              fontColor={colors.primary}
              outlineColor={colors.primary}
              fontWeight={600}
              height={46}
              width={186}
            />
          </div>
        </div>
        <div className="flex mt-6">
          <div className="ml-4">
            <Text fontSize={28}>裏</Text>
          </div>
          <div className="ml-8">
            <InputFile
              title="ファイルを選択"
              color={colors.lightBlue}
              onChange={e =>
                setAccountData({
                  ...accountData,
                  backSideImage: e.target.files,
                })
              }
              fontSize={16}
              fontColor={colors.primary}
              outlineColor={colors.primary}
              fontWeight={600}
              height={46}
              width={186}
            />
          </div>
        </div>
        <div className="flex mt-6 justify-center">
          <RoundButton
            title="内容確認"
            onClick={() =>
              navigation('/AccountProfileResult', { state: accountData })
            }
            color={colors.primary}
            fontSize={24}
          />
        </div>
      </styled.Container>
    </div>
  )
}
