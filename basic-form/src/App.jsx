import { useInput } from "./CustomHooks/useInput"
import { useValidation } from "./CustomHooks/useValidation"

function App() {
  const [mail, setMail] = useInput("")
  const [pw, setPw] = useInput("")
  const { preventDefault, checkMail, checkPassword, mailErrors, pwErrors } =
    useValidation()

  return (
    <>
      <form
        onSubmit={(e) => {
          preventDefault(e)
          checkMail(mail)
          checkPassword(pw)
          console.log(mailErrors, pwErrors)
        }}
        className="form"
      >
        <div className="form-group error">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            // type="email"
            id="email"
            value={mail}
            onChange={
              setMail
              // checkMail(mail)
            }
          />
          <div
            style={{ display: mailErrors ? "none" : "block" }}
            className="msg"
          >
            {mailErrors.join(", ")}
          </div>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            type="password"
            id="password"
            value={pw}
            onChange={
              setPw
              // checkPassword(pw)
            }
          />
          <div style={{ display: pwErrors ? "none" : "block" }} className="msg">
            {pwErrors.join(", ")}
          </div>
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  )
}

export default App
