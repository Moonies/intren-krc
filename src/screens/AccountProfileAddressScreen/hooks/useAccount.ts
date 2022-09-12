import { ChangeEvent, useCallback, useState } from 'react'
export type AccountProfile = {
  postCode?: string
  address?: string
  mobileNumber?: string
  addressNumber?: string
  frontSideImage?: FileList | null
  backSideImage?: FileList | null
  receivedEmailCode?: string
}
export default function useAccount() {
  const [accountData, setAccountData] = useState<AccountProfile>()
  const updateImage = useCallback(
    (fileUpload: ChangeEvent<HTMLInputElement>) => {
      //updateImage
      const rawFileUpload = fileUpload.currentTarget.files
      if (!rawFileUpload || rawFileUpload?.length === 0) return

      const imageUrl = URL.createObjectURL(rawFileUpload[0])
      console.log(imageUrl)
      // setAccountData({ ...accountData, backSideImage: imageUrl })
      // if (!rawFileUpload || rawFileUpload?.length > 0) {
      //   const fileSelected = rawFileUpload[0]
      // }
    },
    []
  )
  return {
    accountData,
    updateImage,
    setAccountData,
  }
}
