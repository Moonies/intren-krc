export function toBase64(
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
