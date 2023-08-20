import { useState } from "react"

export function useValidation() {
  const [mailErrors, setMailErrors] = useState([])
  const [pwErrors, setPwErrors] = useState([])

  function checkMail(mail) {
    setMailErrors([])
    if (mail.length === 0) {
      setMailErrors((currentErrors) => {
        return [...currentErrors, "Required"]
      })
    }

    if (!mail.includes("@") || !mail.includes(".com")) {
      setMailErrors((currentErrors) => {
        return [...currentErrors, "Must contain @ and .com"]
      })
    }
  }

  function checkPassword(password) {
    setPwErrors([])

    if (password.length < 10) {
      setPwErrors((currentErrors) => {
        return [...currentErrors, "Must be at least 10 characters."]
      })
    }

    if (!password.match(/[a-z]/)) {
      setPwErrors((currentErrors) => {
        return [...currentErrors, "Must include at least 1 lowercase letter"]
      })
    }

    if (!password.match(/[a-z]/)) {
      setPwErrors((currentErrors) => {
        return [...currentErrors, "Must include at least 1 uppercase letter"]
      })
    }
    if (!password.match(/[0-9]/)) {
      setPwErrors((currentErrors) => {
        return [...currentErrors, "Must include at least 1 number"]
      })
    }
  }
  function preventDefault(event) {
    return event.preventDefault()
  }

  return {
    preventDefault,
    mailErrors,
    checkMail,
    pwErrors,
    setPwErrors,
    checkPassword,
  }
}
