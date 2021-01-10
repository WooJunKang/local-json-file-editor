import { css } from 'glamor';
import { useEffect, useState } from 'react';

const basedStyle = css({
  width: "40vw",
  height: "4rem",
  padding: "0.25rem 1rem",
  fontSize: "1rem",
  letterSpacing: "2pt",
  '&:focus': {
    border: "1px solid #3E8ACD"
  },
})


export default function EditInput({ label, value, dispatch }) {

  // const [inputVal, setInputVal] = useState("")
  // console.log(label, value)


  const idInputStyle = label === 'id' && (
    css({
      color: "gray",
      fontStyle: "italic",
      backgroundColor: "#f5f5f5"
    })
  )

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'HANDLE_INPUT_CHANGE',
      key: name,
      value: value
    })

  }

  return (
    <li key={label} style={{ marginBottom: "0.5rem" }}>
      <label htmlFor={label}>
        <div>{label}</div>
        <textarea
          name={label}
          value={value}
          onChange={onChange}
          readOnly={label === "id" && "readonly"}
          {...basedStyle}
          {...idInputStyle}
        />
      </label>

    </li>
  )
}