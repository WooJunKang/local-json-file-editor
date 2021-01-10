
import { css } from 'glamor'

const POSITIVE_COLOR = '#3E8ACD'
const NEGATIVE_COLOR = '#DB524B'

export default function EditBtn({ btnType }) {

  const btnColor = btnType === 'SUBMIT' ? POSITIVE_COLOR : (
    btnType === 'CANCEL' ? NEGATIVE_COLOR : (
      "black"
    )
  )

  const btnText = btnType === 'SUBMIT' ? "저장" : (
    btnType === 'CANCEL' ? "취소" : (
      "버튼"
    )
  )

  const btnTypes = btnType === 'SUBMIT' ? 'submit' : 'button';

  const inputStyled = css({
    padding: "0.5rem 1rem",
    backgroundColor: "white",
    color: btnColor,
    border: `1px solid ${btnColor}`,
    borderRadius: '0.75rem',
    fontSize: "1rem",
    fontWeight: "600",
    ":hover": {
      color: "white",
      backgroundColor: btnColor,
      cursor: "pointer"
    },
  })

  return (
    <input
      type={btnTypes}
      value={btnText}
      {...inputStyled}
    />
  )
}