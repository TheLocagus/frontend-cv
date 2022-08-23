export const redirectTo = (value: string) => {
  // window.location.href = value;
  window.open(
    `${value}`,
    '_blank'
  )
}