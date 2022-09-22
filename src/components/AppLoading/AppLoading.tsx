import React from 'react'
import LoadingOverlay from 'react-loading-overlay-ts'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

type AppLoadingProps = {
  children: React.ReactNode
}
export default function AppLoading(props: AppLoadingProps) {
  const { isLoading } = useSelector((state: RootState) => state.loading)

  return (
    <>
      <LoadingOverlay
        active={isLoading}
        spinner
        text="Loading..."
        className="flex flex-col flex-1"
      >
        {!!props && props.children}
      </LoadingOverlay>
    </>
  )
}
