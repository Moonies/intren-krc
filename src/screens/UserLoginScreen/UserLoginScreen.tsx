import React, { useCallback, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'firebaseConfig'
import SubHeader from 'components/SubHeader'
import Text from 'components/Text'
import InputText from 'components/InputText'
import RoundButton from 'components/RoundButton'
import { colors } from 'theme'

import styled from './UserLoginScreen.style'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLoader } from 'components/AppLoading/store'
export default function UserLoginScreen() {
  const [userName, setUserName] = useState<string>()
  const [password, setPassword] = useState<string>()
  const navigation = useNavigate()
  const dispatch = useDispatch()
  const onClickLogin = useCallback(async () => {
    //check auth
    if (userName === undefined || password === undefined) return
    try {
      dispatch(setLoader(true))
      const user = await signInWithEmailAndPassword(auth, userName, password)
      console.log('success' + user)
      navigation('/AccountLogin')
    } catch (error) {
      console.log(error)
      alert('email or password not correct!!')
    }
    dispatch(setLoader(false))
  }, [dispatch, navigation, password, userName])

  return (
    <div className="flex flex-1 flex-col">
      <SubHeader />
      <styled.Container>
        <div className="flex flex-1 flex-col ">
          <div className="flex justify-between">
            <div className="self-center">
              <Text fontSize={22}>LOGIN</Text>
            </div>
            <InputText
              onChange={e => setUserName(e.target.value)}
              placeHolder=""
              size={200}
            />
          </div>
          <div className="flex justify-between mt-6">
            <div className="self-center">
              <Text fontSize={22}>PASSWORD</Text>
            </div>
            <InputText
              onChange={e => setPassword(e.target.value)}
              placeHolder=""
              size={200}
              typeInput="password"
            />
          </div>
          <div className="flex  justify-center mt-6">
            <RoundButton
              color={colors.darkBlue}
              boxShadowColor={colors.gray[0]}
              title="LOGIN"
              fontSize={22}
              onClick={onClickLogin}
            />
          </div>
        </div>
      </styled.Container>
    </div>
  )
}
