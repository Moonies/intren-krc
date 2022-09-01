//prepare to navigation all Projects
//if used react-router-dom use this file
//else used NextJs for seo -> new Create eco system
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useCallback } from 'react'
import AccountLoginScreen from '../screens/AccountLoginScreen'
import Header from '../components/Header'
// import LoginScreen from '../screens/login'
// import RandomRewardScreen from '../screens/randomRewardScreen'
export const GroupRoute = {
  register: ['/', 'profile'],
}
export default function Router() {
  const { pathname } = window.location

  const currentGroupHeader = useCallback(() => {
    switch (true) {
      case GroupRoute.register.includes(pathname):
        return 'register'

      default:
        break
    }
  }, [pathname])
  return (
    <BrowserRouter>
      <Header groupHeader={currentGroupHeader()} />
      <Routes>
        <Route path="/" element={<AccountLoginScreen />} />
        {/* <Route path="/login" element={<LoginScreen />} /> */}
        {/* <Route path="/random" element={<RandomRewardScreen />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
