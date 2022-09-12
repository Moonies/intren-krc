export function toBase64(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  file: any
): Promise<string | null | undefined | ArrayBuffer> {
  return new Promise(resolve => {
    const reader = new FileReader()
    reader.onload = event => {
      resolve(event?.target?.result)
    }
    reader.readAsDataURL(file)
  })
}
