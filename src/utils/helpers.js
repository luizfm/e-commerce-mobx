export default function emailValidator(email) {
  const reg = /\S+@\S+\.\S+/
  const isValid = reg.test(email)
  return isValid
}
