import { css } from 'glamor';
import { useState } from 'react';

const basedStyle = css({
  width: "40vw",
  height: "4rem",
  padding: "0.25rem 1rem",
  fontSize: "1rem",
  letterSpacing: "2pt"
})


export default function EditInput({ label, value, onChange }) {

  const [inputVal, setInputVal] = useState(value)


  const idInputStyle = label === 'id' && (
    css({
      color: "gray",
      fontStyle: "italic",
      backgroundColor: "#f5f5f5"
    })
  )

  // const onChange = (e) => {
  //   setInputVal(e.target.value)
  // }

  return (
    <li key={label} style={{ marginBottom: "0.5rem" }}>
      <label htmlFor={label}>
        <div>{label}</div>
        <input
          name={label}
          value={inputVal}
          onChange={onChange}
          readOnly={label === "id" && "readonly"}
          {...basedStyle}
          {...idInputStyle}
        />
      </label>

    </li>
  )
}