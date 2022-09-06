import SubHeader from 'components/SubHeader'
import Text from 'components/Text'
import React from 'react'

export default function AccountProfileAddressScreen() {
  return (
    <div className="flex flex-1 flex-col">
      <SubHeader />
      <div className="flex justify-center font-semibold mt-2">
        <Text fontSize={18}>変更内容を入力ください。</Text>
      </div>
      <SubHeader height={2} />
      <div>
        <Text>郵便番号（ハイフン不要）</Text>
      </div>
      <div>
        <Text>住所</Text>
      </div>
      <div>
        <Text>携帯番号</Text>
      </div>
      <div>
        <Text>ご自宅電話番号</Text>
      </div>
      <div>
        <Text>携帯アドレス</Text>
      </div>
      <div>
        {/* btn  クリックして空メールを送信*/}

        {/*  受信メールに
                    記載の番号を
                    入力ください。
 */}
      </div>
      <div>
        <Text>本人確認資料WEB提出</Text>
      </div>
      {/* 
            <Remark>
               
                当行が認めている本人確認 
                資料はコチラをご確認ください。
            </Remark>
            <div style={{paddingLeft: '15px'}}>
               <FileInput onChange={onFrontChange}>表</FileInput>
               <FileInput onChange={onBackChange}>裏</FileInput>
            </div>
                <PrimaryButton onClick={() => navigate('/confirm')}>内容確認</PrimaryButton>
         */}
    </div>
  )
}
