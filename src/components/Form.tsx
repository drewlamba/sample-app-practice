import React from 'react'
import "./form.css";
function Form() {
  return (
    <div id="formCon">
        <div id="form">
          <form>
            <div id="inputs">
              <div id="input">
                <label>Enter email:
                  <input type="text" onChange={(event) => console.log(event.target.value)} />
                </label>
              </div>
              <div id="input">
                <label>Enter name:
                  <input type="text" onChange={(event) => console.log(event.target.value)} />
                </label>
              </div>
              <div id="input">
                <label>Enter age:
                  <input type="number" onChange={(event) => console.log(event.target.value)} />
                </label>
              </div>
             
            </div>
            <button>Submit Details</button>
          </form>
        </div>
  </div>
  )
}

export default Form;