import emailValidator from '_utils/helpers'

export default function validate(data) {
  const payload = {}

  const validateEmail = emailValidator(data.email)

  if (!validateEmail) {
    payload.emailError = 'Email type is incorrect'
  }

  if (data.email === '') {
    payload.emailError = "This field can't be empty"
  }

  if (data.name === '') {
    payload.nameError = "This field can't be empty"
  }

  if (data.password === '') {
    payload.passwordError = "This field can't be empty"
  }

  if (data.confirmPassword === '') {
    payload.confirmPasswordError = "This field can't be empty"
  }

  if (data.password !== data.confirmPassword) {
    payload.passwordError = 'Passwords are not matching'
    payload.confirmPasswordError = 'Passwords are not matching'
  }

  return payload
}
