//prepare to navigation all Projects
//if used react-router-dom use this file
//else used NextJs for seo -> new Create eco system
import { Routes, Route, useNavigate } from 'react-router-dom'
import React, { useCallback, useEffect } from 'react'
import AccountLoginScreen from 'screens/AccountLoginScreen'
import Header from 'components/Header'
import AccountProfileScreen from 'screens/AccountProfileScreen'
import useNavigation from './hooks/useNavigation'
import AccountProfileAddressScreen from 'screens/AccountProfileAddressScreen'
import AccountProfileResultScreen from 'screens/AccountProfileResultScreen'
import UserLoginScreen from 'screens/UserLoginScreen/UserLoginScreen'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
export const GroupRoute = {
  register: [
    '/',
    '/AccountLogin',
    '/AccountProfile',
    '/AccountProfileAddress',
    '/AccountProfileResult',
  ],
}
export default function Router() {
  const { location } = useNavigation()
  const navigation = useNavigate()

  const user = useSelector((state: RootState) => state.user)

  const currentGroupHeader = useCallback(() => {
    switch (true) {
      case GroupRoute.register.includes(location.pathname):
        return 'register'

      default:
        break
    }
  }, [location])

  useEffect(() => {
    if (user === null) {
      navigation('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])
  return (
    <>
      <Header groupHeader={currentGroupHeader()} />
      <Routes>
        <Route path="/" element={<UserLoginScreen />} />
        <Route path="AccountLogin" element={<AccountLoginScreen />} />
        <Route path="AccountProfile" element={<AccountProfileScreen />} />
        <Route
          path="AccountProfileAddress"
          element={<AccountProfileAddressScreen />}
        />
        <Route
          path="AccountProfileResult"
          element={<AccountProfileResultScreen />}
        />
      </Routes>
    </>
  )
}
