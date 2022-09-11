import React, { useEffect, useMemo, useState } from 'react'
import { toBase64 } from 'utils/fileConverts'

export type ImageProps = {
  fileSrc?: FileList | null
  width?: number
  height?: number
}
export default function Image({
  fileSrc,
  width = 300,
  height = 300,
}: ImageProps) {
  const [newImageBase64, setNewImageBase64] = useState<string>()
  const isEmpty = useMemo(
    () => (fileSrc === null || fileSrc === undefined ? true : false),
    [fileSrc]
  )
  useEffect(() => {
    if (fileSrc === undefined) return
    toBase64(!!fileSrc && fileSrc[0]).then(resultBase64 => {
      if (typeof resultBase64 !== 'string') return
      setNewImageBase64(resultBase64)
    })
  }, [])

  return (
    <>
      {isEmpty ? (
        <img
          src={require('asset/images/noimage.png')}
          height={height}
          width={width}
        />
      ) : (
        <img src={newImageBase64} height={height} width={width} />
      )}
    </>
  )
}
