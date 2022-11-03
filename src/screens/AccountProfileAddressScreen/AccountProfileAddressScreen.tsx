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
        <Text fontSize={22}>変更内容を入力ください。</Text>
      </div>
      <SubHeader height={2} />
      <styled.Container>
        <div className="flex ">
          <div className="align-top mt-2 ml-1 ">
            <ListItem color={colors.darkBlue} />
          </div>
          <div className="ml-3">
            <div className="flex w-full">
              <Text fontSize={22}>郵便番号（ハイフン不要）</Text>
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
        <div className="flex mt-2 ml-1">
          <div className="align-top mt-2">
            <ListItem color={colors.darkBlue} />
          </div>
          <div className="ml-3">
            <div className="flex w-full">
              <Text fontSize={22}>住所</Text>
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
          <div className="align-top mt-2 ml-1">
            <ListItem color={colors.darkBlue} />
          </div>
          <div className="ml-3">
            <div className="flex w-full">
              <Text fontSize={22}>携帯番号</Text>
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
          <div className="align-top mt-2 ml-1">
            <ListItem color={colors.darkBlue} />
          </div>
          <div className="ml-3">
            <div className="flex w-full">
              <Text fontSize={22}>ご自宅電話番号</Text>
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
          <div className="align-top mt-2 ml-1">
            <ListItem color={colors.darkBlue} />
          </div>
          <div className="flex w-full ml-3">
            <Text fontSize={22}>携帯アドレス</Text>
          </div>
        </div>
        <div className="flex mt-2 justify-center">
          <a href="mailto:abc@example.com?subject = Feedback&body = Message">
            <RoundButton
              title="クリックして空メールを送信"
              onClick={() => console.log('click')}
              color={colors.lightBlue}
              boxShadowColor={colors.gray[1]}
              fontSize={22}
              fontColor={colors.darkBlue}
              outlineColor={colors.primary}
              fontWeight={600}
              height={46}
              width={326}
            />
          </a>
        </div>

        <div className="flex flex-row justify-around mt-4  ">
          <Text fontSize={22}>
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
          <div className="align-top mt-2 ml-1">
            <ListItem />
          </div>
          <div className="flex w-full ml-3">
            <Text fontSize={22}>本人確認資料WEB提出</Text>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="align-top">
            <Text fontSize={22} color={colors.primary}>
              ※
            </Text>
          </div>
          <div className="flex w-full ml-1 text-justify">
            <Text
              fontSize={20}
              color={colors.darkBlue}
              textDecoration={'underline'}
            >
              当行が認めている本人確認{'\n'}資料はコチラをご確認ください。
            </Text>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="ml-4">
            <Text fontSize={28}>表</Text>
          </div>
          <div className="ml-6">
            <InputFile
              title="ファイルを選択"
              color={colors.lightBlue}
              onChange={e =>
                setAccountData({
                  ...accountData,
                  frontSideImage: e.target.files,
                })
              }
              fontSize={22}
              fontColor={colors.darkBlue}
              outlineColor={colors.primary}
              boxShadowColor={colors.gray[1]}
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
          <div className="ml-6">
            <InputFile
              title="ファイルを選択"
              color={colors.lightBlue}
              onChange={e =>
                setAccountData({
                  ...accountData,
                  backSideImage: e.target.files,
                })
              }
              fontSize={22}
              fontColor={colors.darkBlue}
              outlineColor={colors.primary}
              boxShadowColor={colors.gray[1]}
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
