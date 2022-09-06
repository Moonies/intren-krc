//prepare to navigation all Projects
//if used react-router-dom use this file
//else used NextJs for seo -> new Create eco system
import { Routes, Route } from 'react-router-dom'
import React, { useCallback } from 'react'
import AccountLoginScreen from 'screens/AccountLoginScreen'
import Header from 'components/Header'
import AccountProfileScreen from 'screens/AccountProfileScreen'
import useNavigation from './hooks/useNavigation'
import AccountProfileAddressScreen from 'screens/AccountProfileAddressScreen'
// import LoginScreen from '../screens/login'
// import RandomRewardScreen from '../screens/randomRewardScreen'
export const GroupRoute = {
  register: ['/', '/AccountProfile', '/AccountProfileAddress'],
}
export default function Router() {
  const { location } = useNavigation()

  const currentGroupHeader = useCallback(() => {
    switch (true) {
      case GroupRoute.register.includes(location.pathname):
        return 'register'

      default:
        break
    }
  }, [location])
  return (
    <>
      <Header groupHeader={currentGroupHeader()} />
      <Routes>
        <Route path="/" element={<AccountLoginScreen />} />
        <Route path="AccountProfile" element={<AccountProfileScreen />} />
        <Route
          path="/AccountProfileAddress"
          element={<AccountProfileAddressScreen />}
        />
      </Routes>
    </>
  )
}
